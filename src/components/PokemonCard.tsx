import { IndexedPokemon, ListPokemon } from "../interfaces/pokemon.interface";
import { Row, Col, Image } from "react-bootstrap";
import { capitalizeFirstLetter } from "../utils/stringUtils";
import "./PokemonCard.scss";

interface PokemonCardProps {
  pokemon: ListPokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <Row className="align-items-center">
      <Col xs="3">
        <Image src={pokemon.image} alt={pokemon.name} rounded fluid />
      </Col>
      <Col>
        <div className="poke-name">
          <strong>#{pokemon.pokedexNumber}</strong>{" "}
          {capitalizeFirstLetter(pokemon.name)}
        </div>
      </Col>
    </Row>
  );
};

export default PokemonCard;
