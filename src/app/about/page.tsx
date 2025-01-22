"use client";
import './about.css';


import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const Globe: React.FC = () => {
  const [pinDescriptions, setPinDescriptions] = useState<{ [key: string]: string }>({});
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [isSpinning, setIsSpinning] = useState(true);
  const [popup, setPopup] = useState<{ visible: boolean, description: string, x: number, y: number }>({ visible: false, description: '', x: 0, y: 0 });

  useEffect(() => {
    const fetchPinDescription = (filename: string, key: string) => {
      fetch(`/text/${filename}`)
        .then(response => response.text())
        .then(text => setPinDescriptions(prevDescriptions => ({ ...prevDescriptions, [key]: text })));
    };
  
    fetchPinDescription('rabat.txt', 'rabat');
    fetchPinDescription('lausanne.txt', 'lausanne');
    fetchPinDescription('rochester.txt', 'rochester');
    fetchPinDescription('champaign.txt', 'champaign');
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Add a globe
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const hour = new Date().getHours();
    const texturePath = hour >= 6 && hour < 18 ? 'textures/2k_earth_daymap.jpg' : 'textures/2k_earth_nightmap.jpg';
    const texture = new THREE.TextureLoader().load(texturePath);
    const material = new THREE.MeshStandardMaterial({ map: texture });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Add lighting
    const pointLight = new THREE.PointLight(0xffffff, 2, 100); // Increased intensity
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0x808080); // Increased intensity
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Additional directional light
    directionalLight.position.set(-5, 5, 5);
    scene.add(directionalLight);

    // Add stars
    const starGeometry = new THREE.BufferGeometry();
    const starTexture = new THREE.TextureLoader().load('textures/star_yellow.png');
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, map: starTexture, size: 3, sizeAttenuation: true, transparent: true, alphaTest: 0.5 });

    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;

    // Add pins with descriptions
    const pins = [
      { position: new THREE.Vector3(
        Math.cos(45 * (Math.PI / 180)) * Math.cos(78 * (Math.PI / 180)),
        Math.cos(45 * (Math.PI / 180)) * Math.sin(78 * (Math.PI / 180)),
        Math.sin(45 * (Math.PI / 180))
      ), 
      description: pinDescriptions['rochester']
      },
      {
      position: new THREE.Vector3(
        Math.cos(6 * (Math.PI / 180)) * Math.cos(34 * (Math.PI / 180)),
        Math.cos(6 * (Math.PI / 180)) * Math.sin(34 * (Math.PI / 180)),
        Math.sin(6 * (Math.PI / 180))
      ),
      description: pinDescriptions['rabat']
      },
      {
        position: new THREE.Vector3(
          Math.cos(-5 * (Math.PI / 180)) * Math.cos(48 * (Math.PI / 180)),
          Math.cos(-5 * (Math.PI / 180)) * Math.sin(48 * (Math.PI / 180)),
          Math.sin(-5 * (Math.PI / 180))
        ),
        description: pinDescriptions['lausanne']
      },
      {
        position: new THREE.Vector3(
          Math.cos(50 * (Math.PI / 180)) * Math.cos(88 * (Math.PI / 180)),
          Math.cos(50 * (Math.PI / 180)) * Math.sin(88 * (Math.PI / 180)),
          Math.sin(50 * (Math.PI / 180))
        ),
        description: pinDescriptions['champaign']
      }
    ];

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const pinMeshes: THREE.Mesh[] = [];

    pins.forEach(pin => {
      const pinGeometry = new THREE.SphereGeometry(0.02, 16, 16);
      const pinMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      const pinMesh = new THREE.Mesh(pinGeometry, pinMaterial);
      pinMesh.position.copy(pin.position);
      globe.add(pinMesh);
      pinMeshes.push(pinMesh);
    });

    const onMouseClick = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(pinMeshes);

      if (intersects.length > 0) {
        const index = pinMeshes.indexOf(intersects[0].object as THREE.Mesh);
        if (index !== -1) {
          const pin = pins[index];
          setPopup({
            visible: true,
            description: pin.description,
            x: event.clientX,
            y: event.clientY
          });
          setIsSpinning(false); // Stop spinning when a pin is clicked
        }
      } else {
        setPopup({ visible: false, description: '', x: 0, y: 0 });
      }
    };

    window.addEventListener('click', onMouseClick);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the globe if isSpinning is true
      if (isSpinning) {
        globe.rotation.y += 0.002;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', onMouseClick);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, [isSpinning]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
      {popup.visible && (
        <div style={{ position: 'absolute', top: popup.y, left: popup.x, backgroundColor: 'white', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.5)', color: 'black' }}>
          {popup.description}
        </div>
      )}
      <a href="https://www.flaticon.com/free-icons/star" target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', bottom: 10, left: 10, color: 'white', fontSize: '12px' }}>
        Star icons created by Pixel perfect - Flaticon
      </a>
      <button className="glow-on-hover" onClick={() => window.location.href = '/'}>Back Home</button>
    </div>
  );
};

export default Globe;
