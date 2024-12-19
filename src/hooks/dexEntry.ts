import { useState } from "react";
import { POKEMON_SPECIES_URL } from "../constants";
import { FlavorTextEntry } from "./../interfaces/pokemon.interface";
import { httpClient } from "../api/httpsClient";

interface PokemonSpecies {
  flavor_text_entries: FlavorTextEntry[];
}

export const useDexEntry = () => {
  const [loadedEntry, setLoadedEntry] = useState<string | null>(null);

  const fetchDexEntry = async (pokemonId: number) => {
    if (pokemonId) {
      const url = `${POKEMON_SPECIES_URL}/${pokemonId}`;
      const result = await httpClient.get<PokemonSpecies>(url);
      const data = result.data;

      const flavorTextEntry = data.flavor_text_entries.find(
        (entry) =>
          entry.version.name === "crystal" && entry.language.name === "en"
      );

      if (flavorTextEntry) {
        console.log("Flavor text found.");
        setLoadedEntry(flavorTextEntry.flavor_text);
        console.log(loadedEntry);
      } else {
        console.log("No matching flavor text found.");
      }
    }
  };

  return {
    loadedEntry,
    fetchDexEntry,
  };
};
