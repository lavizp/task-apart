import styled from "styled-components";

const NavContainerTop = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props=>props.theme.primaryColor};


    h1{
      color: white;
      font-size: 25px;
    }
    @media(max-width: 1024px){
      justify-content: space-around;
      background-color: ${props=>props.theme.backgroundColor};
      h1{
      color: white;
      font-size: 15px;
    }
    }
`

const NavLogo = styled.img`
margin-left: 10px;
    height: 75%;
    object-fit: cover;
        width: 40px;
        height: 40px;
        border-radius: 100%;
`

const TopNavRight = styled.div`
margin-right: 10px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        object-fit: cover;
        width: 50px;
        height: 50px;
        border-radius: 100%;
    }
`

export {NavContainerTop, NavLogo,TopNavRight}