import React from 'react'

export default function LocationCard (props) {
  
  const {location} = props;
  
  return (
  <div>
    <h2>{location.name}</h2>
    <h4>Type: {location.type} Dimension: {location.dimension}</h4>
    <div>
      <p>Number of residents: {location.residents.length}</p>
    </div>
    
  </div>
  )
}
