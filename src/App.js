import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import './App.css';

function Scene() {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
    'test_normal.png'
  ])
  const obj = useLoader(OBJLoader, 'test.obj')
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight />
      <mesh position={[1, 2, 3]} rotation={[Math.PI / 2, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          map={colorMap}
          displacementMap={displacementMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          aoMap={aoMap}
        />
        <primitive object={obj} scale={1} />
      </mesh>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App;
