import ReactDOM from "react-dom";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, draco } from "@react-three/drei";

export default function App() {
  return (
    <>
      <div className="bg">
        <h1>
          Portals
          <br />
          <span>Xperience</span>
        </h1>
      </div>
      <Canvas shadowMap camera={{ position: [0, 0, 15] }}>
        <ambientLight intensity={0.75} />
        <pointLight intensity={1} position={[-10, -25, -10]} />
        <spotLight
          castShadow
          intensity={2.25}
          angle={0.2}
          penumbra={1}
          position={[25, 25, 25]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
        />
        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          enableDamping
          dampingFactor={0.2}
          rotateSpeed={4}
          maxPolarAngle={-Math.PI / 2}
          minPolarAngle={-Math.PI / 2}
        />
        <mesh camera={[0, 0, 15]} className="portal">
          <sphereGeometry args={[5.5, 28]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </Canvas>
      <button className="switch">STATIC</button>
      <div className="layer" />
      <img src="./portals_icon2.png" alt="PortalsX Icon" className="top-left" />
      <link className="top-left" href="./portals_icon2.png" />
      <a
        href="https://twitter.com/0xca0a"
        className="top-right"
        children="Twitter"
      />
      <a
        href="https://github.com/drcmda/react-three-fiber"
        className="bottom-left"
        children="+ react-three-fiber"
      />
    </>
  );
}
