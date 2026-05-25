declare module "three/examples/jsm/loaders/STLLoader" {
  import { Loader, BufferGeometry } from "three";

  export class STLLoader extends Loader {
    constructor(manager?: any);
    load(
      url: string,
      onLoad: (geometry: BufferGeometry) => void,
      onProgress?: (event: ProgressEvent<EventTarget>) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
    parse(data: ArrayBuffer, path?: string): BufferGeometry;
  }
}
