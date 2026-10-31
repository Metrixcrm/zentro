"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Torus, Sphere, OrbitControls } from "@react-three/drei";
import { useRef, useMemo, Suspense } from "react";
import { Mesh, AdditiveBlending } from "three";
import { useTheme } from "next-themes";

// Shared gold material properties matching Blender render
const GOLD = {
  baseColor: "#D4AF37",
  emissive: "#F3E5AB",
  metalness: 1.0,
  roughness: 0.12,
  emissiveIntensity: 0.3,
};

function GoldenSphere() {
  const meshRef = useRef<Mesh>(null!);
  const glowRef = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.08;
      meshRef.current.rotation.x += delta * 0.02;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y -= delta * 0.05;
    }
  });

  return (
    <group>
      {/* Main wireframe globe */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color={GOLD.baseColor}
          wireframe
          metalness={GOLD.metalness}
          roughness={GOLD.roughness}
          emissive={GOLD.emissive}
          emissiveIntensity={GOLD.emissiveIntensity}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Crescent arc 1 */}
      <Torus args={[1.3, 0.02, 16, 100, Math.PI * 1.2]} rotation={[0.3, 0, 0.5]}>
        <meshStandardMaterial
          color={GOLD.baseColor}
          metalness={GOLD.metalness}
          roughness={GOLD.roughness}
          emissive={GOLD.emissive}
          emissiveIntensity={GOLD.emissiveIntensity}
          transparent
          opacity={0.7}
        />
      </Torus>
      {/* Crescent arc 2 */}
      <Torus args={[1.3, 0.02, 16, 100, Math.PI * 1.2]} rotation={[-0.3, 0, -0.5]}>
        <meshStandardMaterial
          color={GOLD.baseColor}
          metalness={GOLD.metalness}
          roughness={GOLD.roughness}
          emissive={GOLD.emissive}
          emissiveIntensity={GOLD.emissiveIntensity}
          transparent
          opacity={0.7}
        />
      </Torus>

      {/* Inner glow sphere (slightly larger, inverted) */}
      <mesh ref={glowRef} scale={1.02}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshBasicMaterial
          color={GOLD.emissive}
          side={1}
          transparent
          opacity={0.1}
          depthWrite={false}
          blending={AdditiveBlending}
          toneMapped={false}
        />
      </mesh>

      {/* Latitude rings */}
      <LatitudeRings />
      {/* Longitude lines */}
      <LongitudeLines />
    </group>
  );
}

function LatitudeRings() {
  const group = useRef<any>(null!);
  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.z += delta * 0.03;
    }
  });

  return (
    <group ref={group}>
      {[0, Math.PI / 4, -Math.PI / 4, Math.PI / 2].map((rot, i) => (
        <mesh key={i} rotation={[rot, 0, 0]}>
          <ringGeometry args={[0.95, 0.97, 64]} />
          <meshStandardMaterial
            color={GOLD.baseColor}
            metalness={GOLD.metalness}
            roughness={GOLD.roughness}
            emissive={GOLD.emissive}
            emissiveIntensity={GOLD.emissiveIntensity * 0.5}
            transparent
            opacity={0.6}
            side={1}
          />
        </mesh>
      ))}
    </group>
  );
}

function LongitudeLines() {
  const group = useRef<any>(null!);
  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.06;
    }
  });

  const numLines = 12;
  return (
    <group ref={group}>
      {Array.from({ length: numLines }).map((_, i) => {
        const angle = (i * Math.PI * 2) / numLines;
        const x = Math.sin(angle);
        const z = Math.cos(angle);
        return (
          <mesh key={i} position={[x, 0, z]} rotation={[0, angle, 0]}>
            <cylinderGeometry args={[0.008, 0.008, 2, 8]} />
            <meshStandardMaterial
              color={GOLD.baseColor}
              metalness={GOLD.metalness}
              roughness={GOLD.roughness}
              emissive={GOLD.emissive}
              emissiveIntensity={GOLD.emissiveIntensity * 0.5}
              transparent
              opacity={0.6}
              toneMapped={false}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function ParticleField() {
  const ref = useRef<Mesh[]>([]);
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map(() => {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 1.4 + Math.random() * 0.4;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      return [x, y, z] as [number, number, number];
    });
  }, []);

  useFrame((_, delta) => {
    ref.current.forEach((mesh, i) => {
      if (mesh) mesh.rotation.x += delta * (0.2 + i * 0.01);
    });
  });

  return (
    <>
      {particles.map((pos, i) => (
        <mesh
          key={i}
          position={pos}
          ref={(el) => {
            if (el) ref.current[i] = el;
          }}
        >
          <octahedronGeometry args={[0.015]} />
          <meshBasicMaterial
            color={GOLD.emissive}
            transparent
            opacity={0.5}
            toneMapped={false}
          />
        </mesh>
      ))}
    </>
  );
}

export default function GoldenGlobe({ className = "" }: { className?: string }) {
  const { theme } = useTheme();

  return (
    <div className={`relative w-full max-w-md h-80 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.8}
          color={GOLD.baseColor}
          castShadow
        />
        <directionalLight
          position={[-3, -2, -5]}
          intensity={0.5}
          color={GOLD.emissive}
        />
        <pointLight position={[0, 0, -5]} intensity={1.0} color={GOLD.emissive} />
        <Suspense fallback={null}>
          <GoldenSphere />
          <ParticleField />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
          />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/10 via-yellow-400/10 to-amber-500/10 blur-3xl -z-10" />
    </div>
  );
}
