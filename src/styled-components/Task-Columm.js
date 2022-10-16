import styled from "styled-components";

export const TaskColumnStyle = styled.div`
    width: 230px;
    min-height: 500px;


`

export const TaskTitle = styled.div`
    width: 180px;
    height: 54px;
    border-radius: 10px;
    background-color: ${props=> props.theme.primaryColor};
    display: flex;
    align-items: center;
    padding:0 20px;
    justify-content: space-between;
    color: white;

    p{
        font-size: 20px;
    }

`