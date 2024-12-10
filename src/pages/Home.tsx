import { Container } from "@mui/material";
import PokemonList from "../components/PokemonList";
import usePokemon from "../hooks/usePokemon";

function Home() {
  const { pokemon } = usePokemon();

  return (
    <Container>
      <PokemonList pokemon={pokemon}></PokemonList>
    </Container>
  );
}

export default Home;
