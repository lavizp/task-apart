import styled from "styled-components";

export const NavContainerLeft = styled.div`
    height: 100vh;
    width: 85px;
    background-color: ${props=>props.theme.primaryColor};

`

export const NavContainerTop = styled.div`
    padding: 0 15px;
    width: 96.5vw;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props=>props.theme.primaryColor};


`

export const NavLogo = styled.img`
    height: 75%;
`

export const TopNavRight = styled.div`
    color: white;
`
