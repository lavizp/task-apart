import styled from "styled-components";

interface Props{
    border?: string,
}
const TaskColumnStyle = styled.div<Props>`
    width: 200px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;

    border: ${props=> props.border==="grey"? "1px solid grey":"none"}
`

const TaskTitle = styled.div`
    width: 100%;
    height: 54px;
    border-radius: 10px;
    background-color: ${props=> props.theme.primaryColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;

    p{
        font-size: 20px;
        margin: 0 15px;
    }

`

export {TaskColumnStyle, TaskTitle}