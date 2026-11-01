"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

const PRODUCTS = [
  { name: "Matrixx CRM", color: "#D4AF37", price: "Enterprise" },
  { name: "Zentro IT Hub", color: "#3B82F6", price: "Services" },
  { name: "Vintology", color: "#9A3412", price: "Marketplace" },
  { name: "Skyland", color: "#0D9488", price: "Real Estate" },
  { name: "Zentro Mart", color: "#15803D", price: "Organic" },
  { name: "Ayses", color: "#BE185D", price: "Beauty" },
];

function CarouselRing() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.3;
  });

  const radius = 3.5;
  return (
    <group ref={groupRef}>
      {PRODUCTS.map((p, i) => {
        const angle = (i / PRODUCTS.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        return (
          <group key={p.name} position={[x, 0, z]} rotation={[0, -angle + Math.PI / 2, 0]}>
            <RoundedBox args={[1.6, 2.2, 0.15]} radius={0.1} smoothness={4}>
              <meshStandardMaterial
                color={p.color}
                metalness={0.6}
                roughness={0.3}
                emissive={p.color}
                emissiveIntensity={0.15}
              />
            </RoundedBox>
            <Text
              position={[0, 0.3, 0.1]}
              fontSize={0.18}
              color="#F8FAFC"
              anchorX="center"
              anchorY="middle"
              maxWidth={1.4}
            >
              {p.name}
            </Text>
            <Text
              position={[0, -0.1, 0.1]}
              fontSize={0.12}
              color="#D4AF37"
              anchorX="center"
              anchorY="middle"
            >
              {p.price}
            </Text>
          </group>
        );
      })}
    </group>
  );
}

export default function ProductCarousel3D() {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas camera={{ position: [0, 1.5, 7], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, -5]} intensity={0.3} color="#D4AF37" />
        <CarouselRing />
      </Canvas>
    </div>
  );
}
