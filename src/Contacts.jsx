import React, { useRef, useState} from 'react';
import styled from 'styled-components';
import Map from './Map';
import emailjs from '@emailjs/browser';


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
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
function Contacts() {

  const ref = useRef();

  const [sucess, setSucess] = useState(null);

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_irgvmh1', 'template_mcd4aic', ref.current, 'Nq5cezEM1a36mvdYO')
    .then((result) => {
        console.log(result.text);
        setSucess(true)
    }, (error) => {
        console.log(error.text);
        setSucess(false)
    });
};

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref}  onSubmit={sendEmail}>
          <Title> Contact Us </Title>
            <Input placeholder='Name' name='name'/>
            <Input placeholder='Email' name='email'/>
            <TextArea placeholder="Write your message"
              name="message"
              rows={10}/>
              <Button type='submit'>Send</Button>
              {sucess && "Your message has been sent"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  )
}

export default Contacts
