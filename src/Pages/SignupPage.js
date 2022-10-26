import React, { useRef } from 'react'
import { Background, Container, LeftContainer, RightContainer, Input, Button, LineText, Form} from '../styled-components/AuthStyles'
import { useAuth } from '../FIrebase/authContext';
export default function SignupPage() {
  const {signUp, currentUser} = useAuth();
  const usernameRef = useRef();
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef();
  function handleSubmit(e){
    e.preventDefault();
    if(passwordRef.current.value !== confirmPasswordRef.current.value)
    {
      window.alert("Passwords Do Not Match");
      return;
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
          <Input type="password" placeholder='Password' ref={passwordRef} required/>
          <Input type="password" placeholder='Confirm Password' ref={confirmPasswordRef} required/>

          <Button type='button' onClick={(e)=>handleSubmit(e)}>Signup</Button>
        </Form>
        <LineText>OR</LineText>
        <p>Already Have an Account? <a href='/login'>Login</a> </p>

      </LeftContainer>
      <RightContainer src='https://img.freepik.com/free-vector/space-game-background-neon-night-alien-landscape_107791-1624.jpg?w=2000'>
      </RightContainer>
    </Container>
  </Background>
  )
}
