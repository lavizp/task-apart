import styled from "styled-components";

export const NavContainerLeft = styled.div`
    height: 100vh;
    width: 85px;
    background-color: ${props=>props.theme.primaryColor};

`

export const NavContainerTop = styled.div`
    padding-left:15px;
    padding-right: 30px;
    width: "100%";
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
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        object-fit: cover;
        width: 40px;
        height: 40px;
        border-radius: 100%;
    }
`
