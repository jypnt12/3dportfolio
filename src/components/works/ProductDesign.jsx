import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Computer from './Computer'
import styled from 'styled-components'

const Desc = styled.div`
  width:200px;
  height:70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 200px;
  right:100px;
  font-size:15px
`
const ProductDesign = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Computer/>
        </Stage>
        <OrbitControls autoRotate/>
      </Canvas>
      <Desc>
        We design products with a strong focus both world class 
        design and ensuring your product is a market success.
      </Desc>
    </>
  )
}

export default ProductDesign