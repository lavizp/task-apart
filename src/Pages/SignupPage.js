import React from 'react'
import { Background, Container, LeftContainer, RightContainer, Input, Button, LineText} from '../styled-components/AuthStyles'

export default function SignupPage() {
  return (
    <Background>
    <Container>
      <LeftContainer padding="35px">
        <h1>Signup:</h1>
        <Input placeholder='Username'/>

        <Input placeholder='Email'/>
        <Input placeholder='Password'/>
        <Button>Signup</Button>
        <LineText>OR</LineText>
        <p>Already Have an Account? <a href='/login'>Login</a> </p>

      </LeftContainer>
      <RightContainer src='https://img.freepik.com/free-vector/space-game-background-neon-night-alien-landscape_107791-1624.jpg?w=2000'>
      </RightContainer>
    </Container>
  </Background>
  )
}
