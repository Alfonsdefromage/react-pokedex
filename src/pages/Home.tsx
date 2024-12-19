import { Container } from "@mui/material";
import PokemonList from "../components/PokemonList";
import usePokemon from "../hooks/usePokemon";
import PokemonDetails from "../components/PokemonDetail";
import { DetailPokemon, ListPokemon } from "../interfaces/pokemon.interface";
import { useDetails } from "../hooks/pokeDetails";
import { useDexEntry } from "../hooks/dexEntry";

function Home() {
  const { pokemon } = usePokemon();
  const { loadedPokemon, fetchPokemon, isLoading } = useDetails();
  const { loadedEntry, fetchDexEntry } = useDexEntry();

  const handleSelectPokemon = (pokemon: ListPokemon) => {
    fetchPokemon(pokemon.name);
    console.log(pokemon.pokedexNumber);
    fetchDexEntry(pokemon.pokedexNumber);
  };

  return (
    <Container>
      <div className="d-flex">
        <PokemonList
          pokemon={pokemon}
          onSelectPokemon={handleSelectPokemon}
        ></PokemonList>
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <PokemonDetails
            pokemon={loadedPokemon}
            entry={loadedEntry}
          ></PokemonDetails>
        )}
      </div>
    </Container>
  );
}

export default Home;
