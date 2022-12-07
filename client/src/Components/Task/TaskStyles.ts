import styled from "styled-components";

interface Props{
    main?: boolean,
    bg?: string
}
const TaskContainer = styled.div`
    width: 160px;
    min-height: 150px;
    max-height: 300px;
    background-color: ${props=> props.theme.primaryColor};
    margin-top: 30px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 20px;

`

const TaskCatogery = styled.div<Props>`
    height: 22px;
    width: 57px;
    background: ${props=> props.bg};
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    p{
        color: white;
        font-weight: 500;
        font-size: 12px;

    }
`

const Title = styled.p<Props>`
    font-weight: 500;
    font-size: ${props=> props.main? "17px": "15px"};
    line-height: 17px;
    color: ${props=> props.main? "white": "#768396"};
    margin: 0;

`
const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 90px;
    align-items: start;
    justify-content: space-between;
    gap: 10px;
    img{
        width: 100%;
        height: 100px;
        border-radius: 8px;

    }

`

const DetailsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        border: 1px solid #2C2D37;
        border-radius: 4px;
        font-size: 12px;
        color: white;
        padding: 5px;
    }
`
const TaskCompleted = styled.div`
    cursor: pointer;
`

export {Title, TitleContainer,TaskCatogery, TaskCompleted, TaskContainer, DetailsContainer}