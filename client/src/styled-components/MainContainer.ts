import styled from "styled-components";
type Props ={
    gap?: string;
    direction?: string;
}
export const MainContainer = styled.div<Props>`
    width: 100%;
    display: flex;
    flex-direction: ${props => props.direction? props.direction : "row"};
    justify-content: start;
    background-color: ${props=> props.theme.backgroundColor};
    gap: ${props=> props.gap};
    @media(max-width: 1024px){
        flex-direction: column;
    }
    

`