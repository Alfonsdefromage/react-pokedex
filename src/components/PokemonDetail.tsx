import { Col, Image, Row } from "react-bootstrap";
import { DetailPokemon } from "../interfaces/pokemon.interface";

interface PokemonDetailProps {
  pokemon: DetailPokemon | null;
}

const PokemonDetails = ({ pokemon }: PokemonDetailProps) => {
  return (
    <Row xs="12">
      <Col xs="12">
        {pokemon ? (
          <>
            <Image
              className="h-12"
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
            ></Image>
            <span>
              {pokemon.name} {pokemon.height} cm tall
            </span>
          </>
        ) : (
          <div></div>
        )}
      </Col>
    </Row>
  );
};

export default PokemonDetails;
