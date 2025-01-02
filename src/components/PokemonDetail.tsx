import { Col, Collapse, Container, Image, Row } from "react-bootstrap";
import {
  DetailPokemon,
  FlavorTextEntry,
} from "../interfaces/pokemon.interface";
import "./PokemonDetail.scss";
import generic from "../assets/generic-pokemon.png";
import pokelogo from "../assets/pokemon.png";
import { playAudio } from "../utils/playAudioUtils";
import { capitalizeFirstLetter } from "../utils/stringUtils";
import DexEntry from "./DexEntry";
import speaker from "../assets/speaker.png";
import kreise from "../assets/kreise.png";

interface PokemonDetailProps {
  pokemon: DetailPokemon | null;
  entry: string | null;
}

const PokemonDetails = ({ pokemon, entry }: PokemonDetailProps) => {
  return (
    <Container>
      <Col className="display">
        {pokemon ? (
          <>
            <div className="pokedex-details">
              <div className="top-row">
                <div className="poke-sprite">
                  <div className="sprite-and-details">
                    <Image
                      className="h-12"
                      src={
                        pokemon.sprites.other["official-artwork"].front_default
                      }
                      alt={pokemon.name}
                    ></Image>
                    <div className="poke-details">
                      <div>
                        <span># {pokemon.id} </span>
                        {capitalizeFirstLetter(pokemon.name)}
                      </div>
                      <span>HT {pokemon.height * 10} cm </span>
                      <span>WT {pokemon.weight / 10} kg</span>
                      <span>
                        Types:
                        {pokemon.types.map((type) => {
                          return " " + type.type.name + " ";
                        })}
                      </span>
                      <div className="poke-cry">
                        <div
                          className="cry-btn"
                          onClick={() => playAudio(pokemon.cries.legacy)}
                        >
                          <p>►</p>
                        </div>
                        {pokemon.name}'s cry!
                      </div>
                    </div>
                  </div>
                  <div className="entry-text">{entry}</div>
                </div>
              </div>
              <div className="bottom-row">
                <Image src={speaker} alt="speaker"></Image>
                <Image src={kreise} alt="kreise"></Image>
              </div>
            </div>
          </>
        ) : (
          <div>
            <div className="poke-sprite">
              <Image src={pokelogo} alt="Generic Pokemon"></Image>
            </div>
            <div className="bottom-row">
              <Image src={speaker} alt="speaker"></Image>
              <Image src={kreise} alt="kreise"></Image>
            </div>
          </div>
        )}
      </Col>
    </Container>
  );
};

export default PokemonDetails;
