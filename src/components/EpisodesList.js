import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard'

export default function EpisodesList() {

const [episodes, setEpisodes] = useState();

  useEffect(() => {
 
    axios.get(
      'https://rickandmortyapi.com/api/episode/'
    ).then(res => setEpisodes(res.data.results)).catch(err => console.log('Axios GET ERROR: ', err))
  }, [episodes])

  return (
    <section>
      {episodes && episodes.map(episode => <EpisodeCard key={episode.id} episode={episode}/>)}
    </section>
  )

}
