import styled from "styled-components";
type Props ={
    gap?: string;
}
export const MainContainer = styled.div<Props>`
    display: flex;
    justify-content: start;
    gap: ${props=> props.gap};
    

`