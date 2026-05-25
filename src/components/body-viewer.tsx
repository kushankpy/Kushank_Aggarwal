"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { BufferGeometry, Vector3 } from "three";


function BodyModel() {
  const geometry = useLoader(STLLoader, "/assets/all mesh stl.stl") as BufferGeometry;

  const centeredGeometry = useMemo(() => {
    const geo = geometry.clone();
    geo.computeBoundingBox();

    if (!geo.boundingBox) {
      return geo;
    }

    const center = new Vector3();
    geo.boundingBox.getCenter(center);
    geo.translate(-center.x, -center.y, -center.z);

    const size = new Vector3();
    geo.boundingBox.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z);
    // Increase this multiplier to make the chassis model appear larger.
    // Tweak this value to resize the model: const scale = 1 / maxDim * <multiplier>
    // Increased to 5 for a larger, zoomed-in appearance
    const scale = maxDim > 0 ? 1 / maxDim * 7 : 1;
    geo.scale(scale, scale, scale);

    return geo;
  }, [geometry]);

  return (
    <mesh geometry={centeredGeometry} position={[0, 0.18, 0]} castShadow receiveShadow>
      <meshStandardMaterial color="#8ca7ff" metalness={0.45} roughness={0.3} />
    </mesh>
  );
}

function InteractiveOrbitControls({
  onInteract,
  initialPosition,
  initialTarget,
}: {
  onInteract: () => void;
  initialPosition?: [number, number, number];
  initialTarget?: [number, number, number];
}) {
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    if (!controlsRef.current) return;
    const ctrl = controlsRef.current;

    // Mark controls as initializing so the first 'change' events don't count as user interaction
    ctrl.__initializing = true;

    // Apply initial camera position and target immediately
    if (initialPosition && ctrl.object?.position) {
      try {
        ctrl.object.position.set(initialPosition[0], initialPosition[1], initialPosition[2]);
      } catch (e) {}
    }

    if (initialTarget && ctrl.target) {
      try {
        ctrl.target.set(initialTarget[0], initialTarget[1], initialTarget[2]);
      } catch (e) {}
    }

    // Force update so there is no transition from default to our set values
    try {
      ctrl.update();
    } catch (e) {}

    // After the next frame, clear the initializing flag so future changes are user interactions
    requestAnimationFrame(() => {
      ctrl.__initializing = false;
    });

    const handleChange = () => {
      // Ignore the initial programmatic changes
      if (ctrl.__initializing) return;
      onInteract();
    };

    ctrl.addEventListener("change", handleChange);

    return () => {
      ctrl?.removeEventListener("change", handleChange);
    };
  }, [onInteract, initialPosition, initialTarget]);

  return (
    <OrbitControls ref={controlsRef} enablePan={false} enableDamping={false} minDistance={4} maxDistance={20} />
  );
}

export default function BodyViewer() {
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleInteract = () => {
    setHasInteracted(true);
  };

  return (
    <div className="relative mt-10 w-full mb-4">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [6.5, 0.5, 0], fov: 35 }}
        className="w-full"
        style={{ height: '40vh', minHeight: '400px' }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 4, 2]} intensity={1.2} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        <directionalLight position={[-5, -2, -2]} intensity={0.4} />

        <BodyModel />

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]} receiveShadow>
          <planeGeometry args={[14, 14]} />
          <shadowMaterial opacity={0.12} />
        </mesh>

        <InteractiveOrbitControls
          onInteract={handleInteract}
          // Adjust these values to match the photo orientation. Tweak as needed.
          initialPosition={[0, 0.6, 6]}
          initialTarget={[0, 0.1, 0]}
        />
        <Environment preset="city" />
      </Canvas>

      {!hasInteracted && (
        <div className="absolute inset-x-0 top-6 flex justify-center pointer-events-none">
          <div className="animate-pulse">
            <div className="px-4 py-2 rounded-lg bg-accent-500/20 border border-accent-500/40 backdrop-blur-sm">
              <p className="text-accent-300 font-semibold text-sm tracking-widest drop-shadow-md">360° VIEW</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}