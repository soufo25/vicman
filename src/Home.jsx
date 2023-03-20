import React from 'react';
import styled from 'styled-components';
import About from './About';
import Contacts from './Contacts';
import Hero from './Hero';
import Services from './Services';


const Container = styled.div`
height: 100vh;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
color: white;
background-image: url('https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1517&q=80');
};
&::-webkit-scrollbar{
  display: none;

  
}

`;


function Home() {
  

  return (
    <div>
      <Container>
      <Hero />
      <About />
      <Services/>
      <Contacts />
      </Container>
    
    </div>
  )
}

export default Home;
