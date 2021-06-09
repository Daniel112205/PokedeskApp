
const PokemonList = ({pokemons}) => {
    const list = pokemons.map( (value) => (
        <div>
            <h2>{value.name}</h2>
        </div>
    ))
    return(
        <div>
            {list }
        </div>
    )
}
export default PokemonList;