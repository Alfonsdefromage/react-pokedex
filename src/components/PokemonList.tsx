import { ListPokemon } from "../interfaces/pokemon.interface";
import PokemonCard from "./PokemonCard";
import { Card, ListGroup } from "react-bootstrap";
import "./PokemonList.scss";

interface PokemonListProps {
  pokemon: ListPokemon[];
  onSelectPokemon: (pokemon: ListPokemon) => void;
}

const PokemonList = ({ pokemon, onSelectPokemon }: PokemonListProps) => {
  return (
    <Card
      style={{
        width: "24rem",
        maxHeight: "100vh",
        position: "absolute",
        top: "0",
        left: "0",
      }}
    >
      <Card.Header>Pokemon</Card.Header>
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
  );
};

export default PokemonList;
