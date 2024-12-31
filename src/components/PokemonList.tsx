import { ListPokemon } from "../interfaces/pokemon.interface";
import PokemonCard from "./PokemonCard";
import { Card, Image, ListGroup } from "react-bootstrap";
import "./PokemonList.scss";
import { Col } from "react-bootstrap";
import pokelogo from "../assets/pokemon.png";

interface PokemonListProps {
  pokemon: ListPokemon[];
  onSelectPokemon: (pokemon: ListPokemon) => void;
}

const PokemonList = ({ pokemon, onSelectPokemon }: PokemonListProps) => {
  return (
    <Col>
      <Card
        style={{
          width: "24rem",
          maxHeight: "100vh",
          borderTopLeftRadius: "0",
          borderBottomLeftRadius: "0",
        }}
      >
        <Card.Header className="logo">
          <Image src={pokelogo} alt="pokemon logo"></Image>
        </Card.Header>
        <ListGroup
          variant="flush"
          style={{
            overflowY: "auto",
          }}
          className="custom-scrollbar"
        >
          {pokemon.length > 0
            ? pokemon.map((p) => {
                return (
                  <ListGroup.Item
                    key={p.name}
                    onClick={() => onSelectPokemon(p)}
                    style={{ cursor: "pointer" }}
                  >
                    <PokemonCard key={p.name} pokemon={p} />
                  </ListGroup.Item>
                );
              })
            : null}
        </ListGroup>
      </Card>
    </Col>
  );
};

export default PokemonList;
