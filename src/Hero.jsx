import React from 'react';
import styled from 'styled-components';
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Cube from './Cube';


const Section= styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
@media only screen and (max-width: 768px) {
  height: 200vh;
}

`;

const Container = styled.div`
height: 100%;
scroll-snap-align: center;
width: 1400px;
display: flex;
justify-content: space-between;
@media only screen and (max-width: 768px) {
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
 
`;

const Left = styled.div`
 flex: 2;
 display: flex;
 flex-direction: column;
 justify-content: center;
 gap: 20px;
 @media only screen and (max-width: 768px) {
  flex: 1;
  align-items: center;
 } 

`;

const Title = styled.h1`
 font-size: 74px;
 color: white;
 text-shadow: 2px 2px 4px;
 @media only screen and (max-width: 768px) {
  text-align: center;
 }
`;

const WhatWeDo = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;



const Subtitle = styled.h2`
color: #da4ea2;
`;

const Desc = styled.p`
font-size: 24px;
color: lightgray;
@media only screen and (max-width: 768px) {
  padding: 20px;
  text-align: center;
}

`;

const Button = styled.button`
background-color: #da4ea2;
color: white;
font-weight: 500;
width: 100px;
padding: 10px;
border: none;
border-radius: 5px;
cursor: pointer;
`;

const Right = styled.div`
flex: 3;
position: relative;
@media only screen and (max-width: 768px) {
  flex: 1;
  width: 100%;
}
`;




function Hero() {
  return (
    <Section>
        <Container>
            <Left>
                <Title>Who is Cash Afloat ?</Title>
                <WhatWeDo>
                <Subtitle>What We Do</Subtitle>
                </WhatWeDo>
                <Desc>
                 At Cash AfloatWe do more than just provide financial services . we help guide people to better future.
                </Desc>
                <Button>Learn More</Button>
            </Left>
            <Right>
            <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1}/>
            <directionalLight args={[3,2,1]} />
            <Cube />
            </Canvas>
            </Right>
        </Container>
    </Section>
  )
}

export default Hero;
