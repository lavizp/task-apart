import styled from "styled-components";
interface Props{
    selected?: string
}

const NavContainerLeft = styled.div`
    height: "100%";
    padding-top: 100px;
    min-width: 70px;
    background-color: ${props=>props.theme.primaryColor};
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:flex-start;
    @media(max-width: 1024px){
        padding-top: 0px;
        height: 70px;
        width: 100%;
        flex-direction: row;
        justify-content: space-around;

    }


`

const NavItem = styled.div<Props>`
    height: 50px;
    width: 50px;
    background-color: ${props=> props.selected === "selected"? "#5051F9": ""};
    color: ${props=> props.selected === "selected"? "white": "#5F6388"};
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    margin-bottom: 20px;
    @media(max-width: 1024px){
        height: 50px;
        margin-top: 0px;
        margin-bottom: 0px;

        

    }
`

export {NavContainerLeft, NavItem}