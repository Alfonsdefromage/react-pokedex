import { Col, Image, Row } from "react-bootstrap";
import { DetailPokemon } from "../interfaces/pokemon.interface";
import "./PokemonDetail.scss";
import generic from "../assets/generic-pokemon.png";
import { playAudio } from "../utils/playAudioUtils";
import { capitalizeFirstLetter } from "../utils/stringUtils";
import DexEntry from "./DexEntry";

interface PokemonDetailProps {
  pokemon: DetailPokemon | null;
}

const PokemonDetails = ({ pokemon }: PokemonDetailProps) => {
  return (
    <Row className="d-flex" xs="12">
      {pokemon ? (
        <>
          <Col>
            <div className="poke-sprite">
              <Image
                className="h-12"
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={pokemon.name}
              ></Image>
            </div>
          </Col>
          <Col>
            <div className="poke-details">
              <div>
                <img src={generic}></img>
                <span># {pokemon.id} </span>
                {capitalizeFirstLetter(pokemon.name)}
              </div>
              <span>HT {pokemon.height * 10} cm </span>
              <span>WT {pokemon.weight / 10} kg</span>
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
          </Col>
        </>
      ) : (
        <div></div>
      )}
    </Row>
  );
};

export default PokemonDetails;
