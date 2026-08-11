"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, RoundedBox, Edges } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Cube() {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    // slow auto-spin
    group.current.rotation.y += delta * 0.25;
    // tilt toward pointer
    const px = state.pointer.x;
    const py = state.pointer.y;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -py * 0.5, 0.06);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, px * 0.25, 0.06);
    if (core.current) core.current.rotation.x -= delta * 0.6;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.8}>
      <group ref={group}>
        <RoundedBox args={[2.3, 2.3, 2.3]} radius={0.14} smoothness={6}>
          <MeshTransmissionMaterial
            samples={6}
            resolution={512}
            thickness={1.6}
            roughness={0.08}
            transmission={1}
            ior={1.4}
            chromaticAberration={0.06}
            anisotropy={0.3}
            distortion={0.2}
            distortionScale={0.3}
            temporalDistortion={0.1}
            color={"#dfe6ff"}
            attenuationColor={"#b8c7ff"}
            attenuationDistance={2.4}
          />
          <Edges scale={1.001} threshold={15} color={"#ffffff"} />
        </RoundedBox>

        {/* glowing accent core visible through the glass */}
        <mesh ref={core}>
          <octahedronGeometry args={[0.62, 0]} />
          <meshStandardMaterial
            color={"#FF4D2E"}
            emissive={"#FF4D2E"}
            emissiveIntensity={1.5}
            roughness={0.3}
            metalness={0.1}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function HeroCube() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 40 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <pointLight position={[-4, -2, -3]} intensity={40} color={"#B8C7FF"} />
      <pointLight position={[4, 3, 2]} intensity={30} color={"#FF4D2E"} />
      <Cube />
    </Canvas>
  );
}
