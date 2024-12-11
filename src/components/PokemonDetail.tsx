import { Col, Image, Row } from "react-bootstrap";
import { ListPokemon } from "../interfaces/pokemon.interface";

interface PokemonDetailProps {
  pokemon: ListPokemon;
}

const PokemonDetails = ({ pokemon }: PokemonDetailProps) => {
  return (
    <Row>
      <Col xs="6">
        <Image src={pokemon.image} alt={pokemon.name}></Image>
      </Col>
    </Row>
  );
};

export default PokemonDetails;
