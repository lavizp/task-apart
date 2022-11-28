import styled from "styled-components";
type Props ={
    gap?: string;
}
export const MainContainer = styled.div<Props>`
    width: 100%;
    display: flex;
    justify-content: start;
    background-color: ${props=> props.theme.backgroundColor};
    gap: ${props=> props.gap};
    @media(max-width: 1024px){
        flex-direction: column;
    }
    

`