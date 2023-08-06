import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Imac = () => {
  const imac = useGLTF('./imac/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={1.5} />

      <spotLight
        position={[0, 2, 1]}
        angle={1}
        penumbra={1}
        intensity={20}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={imac.scene}
        scale={0.008}
        position={[0, -1.15, 0]}
        rotation={[0.1, -0.3, 0.03]}
      />
    </mesh>
  );
};

const ImacCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [1, 5, 6], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Imac />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ImacCanvas;
