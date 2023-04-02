import React, {useRef} from 'react'
import {useFrame} from "@react-three/fiber"
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'

const Cube = () => {

    const textRef = useRef()
    useFrame(state=> (textRef.current.position.x = Math.sin(state.clock.elapsedTime)))


  return (
    <mesh>
        <boxGeometry />
        <meshStandardMaterial>
            <RenderTexture attach="map">
                <PerspectiveCamera makeDefault position={[0, 0, 5]}/>
                <color attach="background" args={["#dc9dcd"]}/>
                <Text ref = {textRef} fontSize={3} color="#555">
                    Hello
                </Text>
            </RenderTexture>
        </meshStandardMaterial>
    </mesh>
  )
}

export default Cube