import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = () => {
  const imac = useGLTF('./imac/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={4} />
      {/* <pointLight intensity={1} /> */}
      {/* <spotLight
        position={[0, 15, 5]}
        angle={0.1}
        penumbra={0}
        intensity={100}
        // castShadow
        // shadow-mapSize={1024}
      /> */}

      <primitive
        object={imac.scene}
        scale={0.0005}
        position={[0, -1.15, 0]}
        rotation={[0, -0.3, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      // shadows
      camera={{ position: [1, 5, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
