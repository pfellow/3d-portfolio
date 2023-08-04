import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Macbook = () => {
  const macbook = useGLTF('./macbook/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={2} />
      <spotLight angle={2} penumbra={1} intensity={12} position={[1, 1, 1]} />
      <primitive object={macbook.scene} scale={2.6} position={[0, -0.35, 0]} />
    </mesh>
  );
};

const MacbookCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 7, near: 1, far: 50, position: [-5, 4.5, 8] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} />
        <Macbook />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default MacbookCanvas;
