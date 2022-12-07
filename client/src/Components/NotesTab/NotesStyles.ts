import styled from "styled-components";

const NotesContainer = styled.div`

    height: "100%";
    width: 60%;
    margin-left: 10px;
    background-color: ${props=> props.theme.primaryColor};
    h2{
        color: white;
        margin-left: 30px;
    }
    textarea{
        margin-left: 30px;
        margin-right: 10px;
        width: 80%;
        height: 80%;
        background-color: ${props=>props.theme.backgroundColor};
        color: white;
        @media(max-width: 1024px){  
          width: 80%;
          min-height: 300px;

      }
    }

    @media(max-width: 1024px){
      width: 100%;
      height: auto;

    }
    
`

export {NotesContainer}