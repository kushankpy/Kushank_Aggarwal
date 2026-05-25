"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { BufferGeometry, Vector3 } from "three";


function ChassisModel() {
  const geometry = useLoader(STLLoader, "/assets/Chassis.STL") as BufferGeometry;

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

function InteractiveOrbitControls({ onInteract }: { onInteract: () => void }) {
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    if (!controlsRef.current) return;

    const handleChange = () => {
      onInteract();
    };

    controlsRef.current.addEventListener("change", handleChange);
    return () => {
      controlsRef.current?.removeEventListener("change", handleChange);
    };
  }, [onInteract]);

  return (
    <OrbitControls ref={controlsRef} enablePan={false} minDistance={4} maxDistance={20} />
  );
}

export default function ChassisViewer() {
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleInteract = () => {
    setHasInteracted(true);
  };

  return (
    <div className="relative mt-10 w-full mb-4">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [5, 0.5, 0], fov: 35 }}
        className="w-full"
        style={{ height: '35vh', minHeight: '350px' }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 4, 2]} intensity={1.2} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        <directionalLight position={[-5, -2, -2]} intensity={0.4} />

        <ChassisModel />

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]} receiveShadow>
          <planeGeometry args={[14, 14]} />
          <shadowMaterial opacity={0.12} />
        </mesh>

        <InteractiveOrbitControls onInteract={handleInteract} />
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
