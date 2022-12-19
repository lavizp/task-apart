import styled from 'styled-components'

export const ProfilePageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media(max-width: 1024px){
      width: 100%;

    }
  img{
    height: 150px;
    width: 150px;
    position: absolute;
    top: 230px;
    left: 100px;
    border: 5px solid ${props=>props.theme.backgroundColor};
    border-radius: 100%;
    @media(max-width: 1024px){
      left: 0px;
      right: 0;
      top: 280px;
      margin-left: auto;
      margin-right: auto; 

    }


  }

`

export const Banner = styled.div`
  width: "100%";
  margin: 20px;
  background-color: red;
  height: 200px;
  position: relative;
  img{
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 0;
    object-fit: cover;
  }
`
export const SaveButton = styled.button`
width: 100px;
height:30px;
color: white;
font-size: 15px;
font-weight: bold;
position: absolute;
background-color: #5051F9;
border: none;
border-radius: 7px;
right: 100px;
top: 310px;
text-align: center;
@media(max-width: 1024px){
    right: 20px;
    bottom: 0px;
    width: 150px;

  }
`
export const Name = styled.h2`
  color: white;
  font-size: 30px;
  position: absolute;
  left: 280px;
  top: 280px;
  text-align: center;
  @media(max-width: 1024px){
      left: 0;
      right: 0;
      top: 430px;
      width: 500px;
      margin-left: auto;
      margin-right: auto; 

    }

`
export const LogOut = styled.button`
    width: 100px;
    height:30px;
    color: white;
    font-size: 15px;
    font-weight: bold;
    background-color: #5051F9;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    @media(max-width: 1024px){
        right: 20px;
        bottom: 0px;
        width: 150px;

      }
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 100px;
  margin-left: 50px;
  margin-bottom: 50px;
  @media(max-width: 1024px){
      left: 0;
      right: 0;
      top: 490px;
      margin-left: auto;
      margin-right: auto; 

    }
  input{
    background: none;
    border: 3px solid;
    border-color: ${props=>props.theme.primaryColor};
    border-radius: 8px;
    width: 250px;
    padding: 10px 20px;
    color: white;
  }
  h3{
    color: white;
  }

`