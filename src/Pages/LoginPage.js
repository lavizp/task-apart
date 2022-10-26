import React from 'react'
import { Background, Container, LeftContainer, RightContainer, Input, Button, LineText} from '../styled-components/AuthStyles'

export default function LoginPage() {
  return (
    <Background>
      <Container>
        <LeftContainer padding="50px">
          <h1>Login:</h1>
          <Input placeholder='Email'/>
          <Input placeholder='Password'/>
          <Button>Login</Button>
          <LineText>OR</LineText>
          <p>Do not have an account? <a href='/signup'>Sign Up</a> </p>

        </LeftContainer>
        <RightContainer src='https://img.freepik.com/free-vector/evening-cloudy-sky-purple-background-with-group-cumulus-cirrus-clouds-flat-cartoon-illustration_1284-62768.jpg?w=2000'>
        </RightContainer>
      </Container>
    </Background>
  )
}
