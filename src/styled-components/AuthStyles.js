import styled from 'styled-components'

export const Background = styled.div`
  background-color: ${props=>props.theme.primaryColor};
  height: 100vh;
  width: 100vw;
  display: flex;
  margin: auto;

`

export const Container = styled.div`
  background-color: white;
  display: flex;
  width: 60%;
  margin: auto;
  height: 80%;
  border-radius: 16px;
`

export const LeftContainer = styled.div`
  width: 50%;
  padding: ${props=> props.padding};
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const RightContainer = styled.img`
  width: 60%;
  border-radius: 16px;
  background-color: #5051F9;
  border: none;
  object-fit: cover;
  border-radius: 0 10px 10px 0;

`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
export const Input = styled.input`
  width: 80%;
  height: 40px;
  border: none;
  border-bottom: 1px solid grey;
  font-size: 20px;
  margin-bottom: 10px;
`

export const Button = styled.button`
  width: 130px;
  height: 45px;
  border: none;
  background-color:  #5051F9;
  border-radius: 16px;
  color: white;
  font-size: 20px;
  margin-top: 30px;
  cursor: pointer;
`

export const LineText = styled.h4`
  display: flex;
  flex-direction: row;
  color: grey;
  width: 300px;
  &:before {
    content: " ";
    flex: 1 1;
    border-bottom: 1px solid grey;
    margin: auto;
    margin-right: 10px
  }
  &:after {
    content: "";
    flex: 1 1;
    border-bottom: 1px solid grey;
    margin: auto;
    margin-left: 10px
  }
`