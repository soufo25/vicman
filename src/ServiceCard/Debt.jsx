import React from 'react';
import styled from 'styled-components';
import "./Debt.css"


const Section= styled.div`
height:100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
gap: 45px;
justify-content: center;

`;

const Container = styled.div`
  height: 80vh;
  scroll-snap-align: center;
  width: 100%;
  justify-content: space-between;
`;


function Debt () {
  return (
    <Section>
        <Container>
    <div className="wrap animate pop">
    <div className="overlay">
        <div className="overlay-content animate slide-left delay-2">
            <h1 className="animate slide-left pop delay-4">Book</h1>
            <p className="animate slide-left pop delay-5" style={{"color":"#1b2430", "marginBottom": "2.5rem"}}>with <em>us</em></p>
        </div>
        <div className="image-content animate slide delay-5"></div>
                <div className="dots animate">
                    <div className="dot animate slide-up delay-6"></div>
                    <div className="dot animate slide-up delay-7"></div>
                    <div className="dot animate slide-up delay-8"></div>
                </div>
    </div>
        <div className="text">
            <p>Trees are woody perennial plants that are a member of the kingdom <em>Plantae</em>. All species of trees are grouped by their genus, family, and order. This helps make identifying and studying trees easier.</p>
            <p>Apart from providing oxygen for the planet and beauty when they bloom or turn color, trees are very useful. Certain species of hardwood and softwood trees are excellent for timber, making furniture, and paper.</p>
            <p>When managed properly, trees are a good source of renewable energy and construction material.</p>
        </div>
   </div>
   
   
   </Container>
   </Section>

  )
}

export default Debt;
