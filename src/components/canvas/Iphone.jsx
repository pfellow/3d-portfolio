import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Iphone = () => {
  const iphone = useGLTF('./iphone/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={1} />
      <spotLight
        angle={2}
        penumbra={1}
        intensity={0.5}
        position={[-0.2, 0.5, 0.2]}
      />
      <spotLight angle={1} penumbra={1} intensity={20} position={[-0, 0, -2]} />

      <primitive object={iphone.scene} scale={1.2} position={[0, 0, 0]} />
    </mesh>
  );
};

const IphoneCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 7, near: 1, far: 50, position: [-5, 3.5, 8] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} enablePan={false} />
        <Iphone />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default IphoneCanvas;
