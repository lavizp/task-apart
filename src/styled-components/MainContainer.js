import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: ${props=> props.gap? "space-around": "start"};

`