import React from 'react'
import styled from 'styled-components'

const NotesContainer = styled.div`
    height: "100%";
    width: 25%;
    background-color: ${props=> props.theme.primaryColor};
    h2{
        color: white;
        margin-left: 30px;
    }
    textarea{
        margin-left: 30px;
        width: 80%;
        height: 80%;
        background-color: ${props=>props.theme.backgroundColor};
        color: white;
    }
`
export default function NotesTab() {
  return (
    <NotesContainer>
        <h2>Notes:</h2>
        <textarea placeholder='Enter Notes'></textarea>
    </NotesContainer>
  )
}
