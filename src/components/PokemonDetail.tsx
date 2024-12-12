import { Col, Image, Row } from "react-bootstrap";
import { ListPokemon } from "../interfaces/pokemon.interface";
import { useParams } from "react-router-dom";

interface PokemonDetailProps {
  pokemon: ListPokemon;
}

const PokemonDetails = ({ pokemon }: PokemonDetailProps) => {
  return (
    <Row>
      <Col xs="6">
        <Image src={pokemon.image} alt={pokemon.name}></Image>
        {/* <div>{pokemonName}</div> */}
      </Col>
    </Row>
  );
};

export default PokemonDetails;
