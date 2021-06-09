import axios from "axios";
import { useEffect, useState } from "react";
import { HashRouter as Router,  Route, Switch } from "react-router-dom";
import PokemonList from "./PokemonList";
const PokemonContainer = () => {
    
    const [pokemons, setPokemons] = useState([]);
    const [query, setQuery] = useState("");
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        axios({
            url: 'https://pokeapi.co/api/v2/pokemon/',
            method: 'GET'
        }).then(response => {
            setPokemons(response.data.results);
            console.log(response.data.results);
        })
    },[])

    useEffect((query) => {
        if(query){
            axios({
                url: `https://pokeapi.co/api/v2/pokemon/${query}`,
                method: 'GET'
            }).then(response => {
                setPokemon(response.data.results);
                console.log(response.data.results);
            })
        }
    },[query])

    const Search = ({ handleSearch }) => {
        const [searchTerm, setSearchTerm] = useState(""); // Candidato a useCallback y una explicacion del porque
      
        return (
          <div>
            <input onChange={(e) => setSearchTerm(e.target.value)} />
            <button onClick={() => handleSearch(searchTerm)}>Search</button>
          </div>
        );
      };
    const handleSearchPokemons = (value) => {
        setQuery(value);
    };
    return(
        <Router>
            <Switch>
                <Route path="/">
                    <Search handleSearch={handleSearchPokemons} />
                    <PokemonList pokemons={pokemons}/>
                </Route>
            </Switch>
        </Router>
    )
}
export default PokemonContainer;