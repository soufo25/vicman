import React ,{useState} from 'react';
import styled from 'styled-components';
import Card from "./ServiceCard/Card";
import Debt from './ServiceCard/Debt';
import Estate from './ServiceCard/Estate';
import Insurance from './ServiceCard/Insurance';
import Tax from './ServiceCard/Tax';





const data = [
  "Business Growth",
  "Estate Planning",
  "Retirement Planning",
  "Emergency Fund",
  "Life insurance",
  "Debt Management",
  "Tax Relief",
  "And Much More"
];


const Section= styled.div`
height:100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
position: relative;
color: black;
font-size: 14px;
font-weight: 300;
@media only screen and (max-width: 768px) {
    width: 100%;
    height: 200vh;
    display: flex;
    flex-direction: column;
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
const Left= styled.div`
flex: 1;
display: flex;
align-items: center;
@media only screen and (max-width: 768px) {
  padding: 20px;
  justify-content: center;
}
`;
const List= styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 20px;
`;
const ListItem= styled.li`
font-size: 40px;
font-weight: bold;
cursor: pointer;
color: transparent;
-webkit-text-stroke: 1px white;
position: relative;
@media only screen and (max-width: 768px) {
  font-size: 24px;
  color: white;
  -webkit-text-stroke: 0px;
}
::after {
  content: "${(props) => props.text}";
  position: absolute;
  top: 0;
  left: 0;
  color: pink;
  width: 0px;
  overflow: hidden;
  white-space: nowrap;
}
&:hover {
  ::after {
    animation: moveText 0.5s linear both;
    @keyframes moveText {
      to {
        width: 100%;
      }
    }
  }
}
`;
const Right= styled.div`
flex: 1;
display: flex;
align-items: center;
position: relative;
@media only screen and (max-width: 768px) {
  padding: 20px;
  justify-content: center;
}
`;

function Services() {
 
 const [works , setWorks] = useState("");
  return (
    <Section>
     <Container>
      <Left>
        <List>
          {data?.map((item)=> (<ListItem key={item} text={item} 
          onClick= {() => setWorks(item)}> 
          {item}
          </ListItem>
          ))}
        </List>
      </Left>
      <Right>
      {works === "Business Growth"? (<Card/>): works === "Estate Planning"?
       (<Estate/>) : works ==="Tax"?(<Tax />): works ==="Life Insurance"? (<Insurance/>):
       works ==="Debt Management" ? (<Debt />): (<Card />)}
      </Right>
     </Container>
    </Section>
  )
}

export default Services