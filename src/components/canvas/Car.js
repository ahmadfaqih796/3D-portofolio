import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

import CanvasLoader from "../Loader";

const Car = ({ isMobile }) => {
  // Menggunakan useGLTF untuk memuat model 3D rumah dari file scene.gltf
  const computer = useGLTF("./car/scene.gltf");

  return (
    <mesh>
      {/* Pencahayaan */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />

      {/* Merender model 3D rumah */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.01 : 0.017}
        position={isMobile ? [0, -3.5, 0] : [0, -2.7, 0]}
        rotation={[-0.01, -0.2, 0]}
      />
    </mesh>
  );
};

const CarCanvas = () => {
  // Mengecek apakah tampilan berada di perangkat mobile atau bukan menggunakan state `isMobile`
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Menambahkan listener untuk memantau perubahan ukuran layar
    const mediaQuery = window.matchMedia("(max-width: 1150px)");

    // Mengatur nilai awal dari variabel state `isMobile`
    setIsMobile(mediaQuery.matches);

    // Mendefinisikan fungsi callback untuk menangani perubahan media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Menambahkan fungsi callback sebagai listener untuk perubahan media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Menghapus listener ketika komponen dilepas (unmounted)
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Suspense untuk menampilkan fallback jika model 3D masih dimuat */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls memungkinkan kontrol kamera menggunakan mouse atau sentuhan */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* Memanggil komponen Car dengan memberikan properti isMobile */}
        <Car isMobile={isMobile} />
      </Suspense>

      {/* Preload untuk memastikan semua sumber daya dimuat sebelum merender */}
      <Preload all />
    </Canvas>
  );
};

export default CarCanvas;
