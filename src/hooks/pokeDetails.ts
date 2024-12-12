import { DetailPokemon } from "./../interfaces/pokemon.interface";
import { useEffect, useState } from "react";
import { DetailPokemon } from "../interfaces/pokemon.interface";
import { httpClient } from "../api/httpsClient";
import { POKEMON_API_POKEMON_URL } from "../constants";

interface UsePokemonProps {
  pokemonName: string | undefined;
}

const useDetails = ({ pokemonName }: UsePokemonProps) => {
  const [pokemon, setPokemon] = useState<DetailPokemon | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchPokemon = async () => {
    if (pokemonName) {
      setIsLoading(true);
      const url = `${POKEMON_API_POKEMON_URL}/${pokemonName}`;
      const result = await httpsClient.get<DetailPokemon>(url);
      if (result?.data) {
        setPokemon(result.data);
      }
      setIsLoading(false);
    }

    return {
      pokemon,
      isLoading,
    };
  };
  return {
    fetchPokemon,
  };
};

useEffect(() => {
  if (pokemonName) {
    fetchPokemon();
  }
}, [pokemonName]);

const fetchPokemon = async () => {
  if (pokemonName) {
    setIsLoading(true);
    const url = `${POKEMON_API_POKEMON_URL}/${pokemonName}`;
    const result = await httpsClient.get<DetailPokemon>(url);
    if (result?.data) {
      setPokemon(result.data);
    }
    setIsLoading(false);
  }

  return {
    pokemon,
    isLoading,
  };
};

export default useDetails;
