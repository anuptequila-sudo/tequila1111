"use client";
import * as THREE from "three";
import { useEffect, useRef } from "react";

export default function VideoFlagEffect({
  videoSelector = ".hero-video",
  duration = 3.5,
}: {
  videoSelector?: string;
  duration?: number;
}) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const video = document.querySelector(videoSelector) as HTMLVideoElement;
    if (!video) return;

    // Create texture from HTML video
    const texture = new THREE.VideoTexture(video);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 2.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(2.5, 1.5, 80, 50);

    const vertexShader = `
      uniform float uTime;
      varying vec2 vUv;

      void main() {
        vUv = uv;
        float dist = distance(uv, vec2(0.5, 0.5));
        float strength = smoothstep(0.5, 0.0, dist);
        vec3 pos = position;
        pos.z += sin(pos.x * 5.0 + uTime * 2.0) * 0.15 * strength;
        pos.y += sin(pos.x * 3.0 + uTime * 1.2) * 0.1 * strength;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `;

    const fragmentShader = `
      varying vec2 vUv;
      uniform sampler2D uTexture;
      void main() {
        gl_FragColor = texture2D(uTexture, vUv);
      }
    `;

    const uniforms = {
      uTime: { value: 0 },
      uTexture: { value: texture },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const clock = new THREE.Clock();
    let raf: number;

    function animate() {
      uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    }

    animate();

    // stop and fade out after `duration`
    setTimeout(() => {
      container.style.transition = "opacity 1s ease";
      container.style.opacity = "0";
      setTimeout(() => {
        cancelAnimationFrame(raf);
        renderer.dispose();
        geometry.dispose();
        material.dispose();
        texture.dispose();
        if (container.parentNode) container.parentNode.removeChild(container);
      }, 1000);
    }, duration * 1000);

    return () => {
      cancelAnimationFrame(raf);
      renderer.dispose();
    };
  }, [videoSelector, duration]);

  return (
    <div
      ref={mountRef}
      className="video_class"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 10,
        pointerEvents: "none",
        background: "transparent",
      }}
    />
  );
}
