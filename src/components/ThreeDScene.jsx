import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

export default function ThreeDScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <mesh rotation={[0, 0, 0]}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color="#0f4c81" 
          wireframe={true} 
          transparent 
          opacity={0.8}
        />
      </mesh>
      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={2}
      />
    </Canvas>
  );
}