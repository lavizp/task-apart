import styled from "styled-components";
type Props ={
    gap?: string;
}
export const MainContainer = styled.div<Props>`
    display: flex;
    justify-content: start;
    overflow: hidden;
    gap: ${props=> props.gap};
    @media(max-width: 1024px){
        flex-direction: column;
    }
    

`