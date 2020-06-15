import React from 'react'
import styled from 'styled-components';

export default function EpisodeCard(props) {
    const ContainerDiv = styled.section`
    width:100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  `

    const Card = styled.div`
    width: 40%;
    text-align: left
    border: 1px solid gray;
    padding-top: 10px
    padding-left: 10px
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  `
    const Headline = styled.div`
  width: 100%;
  text-align: left;
`

    const CharCard = styled.div`
    width: 40%;  
    text-align: center;
    border-radius: 5px;
    background-color: grey;
    color: white;
    margin-top: 10px;
    padding: 5px 5px;
    align-self: flex-end;
  `
    const { episode } = props;
    return (
        <ContainerDiv>
            <Card>
                <Headline>
                    <h2>Episode: {episode.name}  {episode.episode}</h2>
                    <p>Airdate: {episode.air_date}</p>
                </Headline>
                <CharCard>
                    Characters in episode: {episode.characters.length}
                </CharCard>
            </Card>
        </ContainerDiv>
    )
}