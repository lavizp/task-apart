import React, { useRef } from 'react'
import { Background, Container, LeftContainer, RightContainer, Input, Button, LineText, Form} from '../../styled-components/AuthStyles'
import { useAuth } from '../../Auth/authContext';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const {signUp} = useAuth()
  const navigate = useNavigate();
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: any){

    e.preventDefault();
    if(passwordRef.current && confirmPasswordRef.current)
    if(passwordRef.current.value !== confirmPasswordRef.current.value)
    {
      window.alert("Passwords Do Not Match");
      return;
    }
    if(usernameRef.current && emailRef.current && passwordRef.current && roleRef.current)
    {
      const userData = {
        name: "Laviz Pandey", 
        username: usernameRef.current.value, 
        password: passwordRef.current.value,
         role: roleRef.current.value,
        }
        await signUp(userData);
        navigate("/")
    }
  }
  return (
    <Background>
    <Container>
      <LeftContainer padding="35px">
        <h1>Signup:</h1>
        <Form>
          <Input type="text" placeholder='Username' ref={usernameRef} required/>   
          <Input type="email" placeholder='Email' ref={emailRef} required/>
          <Input type="text" placeholder='Role: Developer' ref={roleRef} required/>
          <Input type="password" placeholder='Password' ref={passwordRef} required/>
          <Input type="password" placeholder='Confirm Password' ref={confirmPasswordRef} required/>
          <Button type='button' onClick={(e)=>handleSubmit(e)}>Signup</Button>
        </Form>
        <LineText>OR</LineText>
        <p>Already Have an Account? <a href='/'>Login</a> </p>

      </LeftContainer>
      <RightContainer src='https://img.freepik.com/free-vector/space-game-background-neon-night-alien-landscape_107791-1624.jpg?w=2000'>
      </RightContainer>
    </Container>
  </Background>
  )
}
