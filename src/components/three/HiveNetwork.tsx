"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Html } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

type Node = { id: string; label: string; pos: [number, number, number]; accent?: boolean };

const NODES: Node[] = [
  { id: "hive", label: "HIVE", pos: [0, 0, 0], accent: true },
  { id: "creators", label: "CREATORS", pos: [0, 2.2, 0] },
  { id: "projects", label: "PROJECTS", pos: [2.4, 0, 0] },
  { id: "payments", label: "PAYMENTS", pos: [0, -2.2, 0] },
  { id: "brands", label: "BRANDS", pos: [-2.4, 0, 0] },
];

const OUTER = NODES.filter((n) => !n.accent);

function Scene() {
  const group = useRef<THREE.Group>(null);
  const nodes = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state, delta) => {
    if (group.current) {
      const px = state.pointer.x;
      const py = state.pointer.y;
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, px * 0.35, 0.05);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -py * 0.25, 0.05);
    }
    nodes.current.forEach((m, i) => {
      if (!m) return;
      const t = state.clock.elapsedTime;
      const s = 1 + Math.sin(t * 1.6 + i) * 0.06;
      m.scale.setScalar(s);
    });
  });

  const center = NODES[0].pos;

  return (
    <group ref={group}>
      {/* spokes: center -> outer */}
      {OUTER.map((n) => (
        <Line
          key={`spoke-${n.id}`}
          points={[center, n.pos]}
          color="#B8C7FF"
          lineWidth={1}
          transparent
          opacity={0.5}
        />
      ))}
      {/* ecosystem loop */}
      <Line
        points={[...OUTER.map((n) => n.pos), OUTER[0].pos]}
        color="#DCDAD4"
        lineWidth={1}
        transparent
        opacity={0.3}
      />

      {NODES.map((n, i) => (
        <group key={n.id} position={n.pos}>
          <mesh ref={(el) => { nodes.current[i] = el; }}>
            <sphereGeometry args={[n.accent ? 0.42 : 0.24, 32, 32]} />
            <meshStandardMaterial
              color={n.accent ? "#FF4D2E" : "#111111"}
              emissive={n.accent ? "#FF4D2E" : "#B8C7FF"}
              emissiveIntensity={n.accent ? 1.4 : 0.35}
              roughness={0.35}
              metalness={0.2}
            />
          </mesh>
          <Html center distanceFactor={9} position={[0, n.accent ? 0.85 : 0.62, 0]}>
            <span
              className={`select-none whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.2em] ${
                n.accent ? "font-semibold text-accent" : "text-graphite"
              }`}
            >
              {n.label}
            </span>
          </Html>
        </group>
      ))}
    </group>
  );
}

export default function HiveNetwork() {
  return (
    <Canvas camera={{ position: [0, 0, 7.5], fov: 42 }} dpr={[1, 1.8]} gl={{ alpha: true }}>
      <ambientLight intensity={0.8} />
      <pointLight position={[3, 3, 4]} intensity={30} />
      <Scene />
    </Canvas>
  );
}
