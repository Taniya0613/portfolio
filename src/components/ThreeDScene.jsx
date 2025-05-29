import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

export default function ThreeDScene({ theme = "dark" }) {
  // Use lighter stars and a vibrant blue wireframe for dark mode
  const starColor = theme === "dark" ? "#b3e5fc" : "#0f4c81";
  const wireColor = theme === "dark" ? "#2196f3" : "#0f4c81";
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
        color={starColor}
      />
      <mesh rotation={[0, 0, 0]}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={wireColor}
          wireframe={true}
          transparent
          opacity={0.85}
        />
      </mesh>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  );
}
