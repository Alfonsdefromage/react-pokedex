import { Container } from "@mui/material";
import PokemonList from "../components/PokemonList";
import usePokemon from "../hooks/usePokemon";
import PokemonDetails from "../components/PokemonDetail";
import { ListPokemon } from "../interfaces/pokemon.interface";
import { useState } from "react";

function Home() {
  const { pokemon } = usePokemon();
  const;
  const [selectedPokemon, setSelectedPokemon] = useState<ListPokemon | null>(
    null
  );
  const [selectedPokemonName, setSelectedPokemonName] = useState<string>("");

  const handleSelectPokemon = (pokemon: ListPokemon) => {
    setSelectedPokemon(pokemon);
    setSelectedPokemonName(pokemon.name);
  };

  return (
    <Container>
      <div className="d-flex">
        <PokemonList
          pokemon={pokemon}
          onSelectPokemon={handleSelectPokemon}
        ></PokemonList>
        {selectedPokemon && (
          <PokemonDetails pokemon={selectedPokemon}></PokemonDetails>
        )}
      </div>
    </Container>
  );
}

export default Home;
