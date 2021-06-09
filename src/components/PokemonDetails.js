import axios from "axios";
import { useEffect, useState } from "react";

const PokemonDetails = ({ name, url }) => {
    const [pokemon, setPokemon] = useState(null);
  
    useEffect(() => {
      const promise = axios(url);
  
      promise.then((res) => {
        setPokemon(res.data.sprites.front_shiny);
      });
    });
  
    return (
      <div>
        <img src={pokemon} alt={name} />
        <h1>{name}</h1>
      </div>
    );
  };

export default PokemonDetails;