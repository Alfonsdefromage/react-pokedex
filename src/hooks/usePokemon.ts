import { useEffect, useState } from "react";
import { httpClient } from "../api/httpsClient";
import {
  POKEMON_API_ALL_URL,
  POKEMON_API_POKEMON_URL,
  POKEMON_IMAGES_BASE_URL,
} from "../constants";
import {
  IndexedPokemon,
  ListPokemon,
  PokemonListResponse,
} from "../interfaces/pokemon.interface";

const usePokemon = () => {
  const [pokemon, setPokemon] = useState<ListPokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(POKEMON_API_ALL_URL);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const indexedPokemonToListPokemon = (indexedPokemon: IndexedPokemon) => {
    const pokedexNumber = parseInt(
      indexedPokemon.url
        .replace(`${POKEMON_API_POKEMON_URL}/`, "")
        .replace("/", "")
    );

    const listPokemon: ListPokemon = {
      name: indexedPokemon.name,
      url: indexedPokemon.url,
      image: `${POKEMON_IMAGES_BASE_URL}/${pokedexNumber}.png`,
      pokedexNumber,
    };

    return listPokemon;
  };

  const fetchPokemon = async () => {
    if (nextUrl) {
      const result = await httpClient.get<PokemonListResponse>(nextUrl);
      if (result?.data?.results) {
        const listPokemon = result.data.results.map((p) =>
          indexedPokemonToListPokemon(p)
        );
        setPokemon(listPokemon);
      }
    }
  };

  return {
    pokemon,
  };
};

export default usePokemon;
