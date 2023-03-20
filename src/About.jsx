import React ,{useRef} from 'react';
import styled from 'styled-components';
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Stage } from "@react-three/drei";
import Scene from "./Scene";
import {useFrame} from "@react-three/fiber";



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
  flex: 1;  
  bottom: -5px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  color: white;
  text-shadow: 2px 2px 4px;
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Img = styled.img`
width:600px;
height: 600px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
animation: animate 2s infinite ease alternate;
@media only screen and (max-width: 768px) {
  width: 300px;
  height: 300px;
}
@keyframes animate {
  to {
    transform: translateY(20px);
  }
}
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;



const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function About() {



  return (
    <Section>
      <Container>
        <Left>
        <Canvas>
          <Stage environment={'city'}>
             <Scene />
             </Stage>
            <OrbitControls enableZoom={false} autoRotate/>
            </Canvas>
          </Left>
        <Right>
          <Title>Secure Your Future With Us </Title>
          <WhatWeDo>
            <Subtitle>Who we Are</Subtitle>
          </WhatWeDo>
          <Desc>
           Since day one, we  have been guided by our mission to help families
           create the life they want to live, while protecting their loved ones 
           and planning their financial legacy. Offering access to a diverse portfolio 
           of insurance, retirement, savings, and wealth-building strategies, we help 
           guide individuals across USA and Canada from where they are to where they want to be.
          </Desc>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default About
