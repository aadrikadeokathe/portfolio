"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Orb() {
  const mesh = useRef<THREE.Mesh>(null);
  const halo = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (mesh.current) {
      const px = state.pointer.x;
      const py = state.pointer.y;
      mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, px * 0.8, 0.05);
      mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, -py * 0.6, 0.05);
      mesh.current.rotation.z += delta * 0.05;
    }
    if (halo.current) {
      const s = 1.28 + Math.sin(state.clock.elapsedTime * 1.4) * 0.03;
      halo.current.scale.setScalar(s);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.9}>
      {/* soft glow halo */}
      <mesh ref={halo}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color={"#FF4D2E"} transparent opacity={0.08} />
      </mesh>
      <Sphere ref={mesh} args={[1.5, 128, 128]}>
        <MeshDistortMaterial
          color={"#FF4D2E"}
          emissive={"#FF4D2E"}
          emissiveIntensity={0.4}
          roughness={0.15}
          metalness={0.3}
          distort={0.35}
          speed={1.6}
        />
      </Sphere>
    </Float>
  );
}

export default function ContactOrb() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.8]} gl={{ alpha: true }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 3, 3]} intensity={40} color={"#ffffff"} />
      <pointLight position={[-4, -2, 2]} intensity={30} color={"#B8C7FF"} />
      <Orb />
    </Canvas>
  );
}
