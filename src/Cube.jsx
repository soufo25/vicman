import React, {useRef} from 'react';
import { PerspectiveCamera, Text, RenderTexture} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";


function Cube() {
    const textRef = useRef();

    useFrame(state=> 
        (textRef.current.position.x = 
         Math.sin(state.clock.elapsedTime) * 2))

  return (
    <mesh>
    <boxGeometry/>
    <meshStandardMaterial>
        <RenderTexture attach= "map">
           <PerspectiveCamera makeDefault position={[0 , 0, 5]} />
           <color attach="background" args={["#dc9dcd"]} />
           <Text ref={textRef} fontSize={2} color="#555"> 
            Cash Afloat
           </Text>
        </RenderTexture>
    </meshStandardMaterial>
</mesh>
  )
}





export default Cube;