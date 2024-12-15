import { DetailPokemon } from "./../interfaces/pokemon.interface";
import { useState } from "react";
import { httpClient } from "../api/httpsClient";
import { POKEMON_API_POKEMON_URL } from "../constants";

export const useDetails = () => {
  const [loadedPokemon, setLoadedPokemon] = useState<DetailPokemon | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  const fetchPokemon = async (pokemonName: string) => {
    if (pokemonName) {
      setIsLoading(true);
      const url = `${POKEMON_API_POKEMON_URL}/${pokemonName}`;
      const result = await httpClient.get<DetailPokemon>(url);
      if (result?.data) {
        setLoadedPokemon(result.data);
      }
      setIsLoading(false);
    }
  };
  return {
    loadedPokemon,
    isLoading,
    fetchPokemon,
  };
};
