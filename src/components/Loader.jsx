import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <div className='flex flex-col items-center'>
        <span className='canvas-loader'>3D</span>
        <p
          style={{
            fontSise: 14,
            color: '#f1f1f1',
            fontWeight: 800,
            marginTop: 30
          }}
        >
          {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  );
};

export default Loader;
