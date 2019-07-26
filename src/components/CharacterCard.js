import React from 'react'
import { Icon } from 'semantic-ui-react'

export default function CharacterCard (props) { 



  return (
  <>
  <div>
   <img src = {props.character.image} alt={props.character.name} /> 
   <h2>{props.character.species}: {props.character.status}</h2>
   <p>Location: {props.character.location.name}</p>
   <p>Origin: {props.character.origin.name}</p>
   <span><Icon name='video camera'/><p>Episodes</p></span>
  </div>
  </>
  )
}
