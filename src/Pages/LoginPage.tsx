import React, { useRef } from 'react'
import { Background, Container, LeftContainer, RightContainer, Input, Button, LineText, Form} from '../styled-components/AuthStyles'
import { useAuth } from '../FIrebase/authContext'
export default function LoginPage() {
  const{ login } = useAuth();
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const handleSubmit =(e: any)=>{
    e.preventDefault();
    if(emailRef.current && passwordRef.current)
    login(emailRef.current.value, passwordRef.current.value)
  }
  return (
    <Background>
      <Container>
        <LeftContainer padding="35px">
          <h1>Login:</h1>
          <Form>

            <Input placeholder='Email' ref={emailRef} type="email" required/>
            <Input placeholder='Password'ref={passwordRef} type="password" required/>
            <Button onClick={(e: any)=>{handleSubmit(e)}} type='submit'>Login</Button>
          </Form>
          <LineText>OR</LineText>
          <p>Do not have an account? <a href='/signup'>Sign Up</a> </p>

        </LeftContainer>
        <RightContainer src='https://thumbs.dreamstime.com/b/alien-planet-landscape-space-game-background-alien-planet-landscape-space-game-background-vector-cartoon-fantasy-179898017.jpg'>
        </RightContainer>
      </Container>
    </Background>
  )
}
