import styled from "styled-components";

const CenterTasksContainer = styled.div`
    width: 80%;
    height: "100%";
    padding-left: 20px;
    background-color: ${props=> props.theme.backgroundColor};

    h1{
        color: white;
        font-size: 40px;
    }
    @media(max-width: 1024px){
      width: 100%;
      height: auto;

    }

`
const MainContainer = styled.div`
  display: flex;
  gap: 30px;
  overflow-y: scroll;
  height: auto;
  padding: 30px 0px;
`

export {CenterTasksContainer, MainContainer};