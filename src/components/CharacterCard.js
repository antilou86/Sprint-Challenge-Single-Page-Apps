import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

export default function CharacterCard (props) { 

  const Card = styled.div `
    width: 300px;
    text-align: center;
    border: 1px solid gray;
    padding-bottom: 10px;
    margin-bottom: 10px;
  `

  const SpanWrap = styled.span `
    display: inline-block;
  `

  return (
  
  <Card>
   <img src = {props.character.image} alt={props.character.name} /> 
   <h2>{props.character.species}: {props.character.status}</h2>
   <p>Location: {props.character.location.name}</p>
   <p>Origin: {props.character.origin.name}</p>
   <SpanWrap><Icon name='video camera'/><p>Episodes</p></SpanWrap>
  </Card>
  
  )
}
