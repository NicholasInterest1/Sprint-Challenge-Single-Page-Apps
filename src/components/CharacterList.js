import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="character-list grid-view">
      {characters.map(character => {
        return <CharacterCard key={character.id} character={character} />;
      })}
    </section>
  );
}
