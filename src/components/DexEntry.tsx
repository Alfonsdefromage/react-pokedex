import { Row } from "react-bootstrap";
import { FlavorTextEntry } from "../interfaces/pokemon.interface";

interface DexEntryProps {
  pokemon: FlavorTextEntry | null;
}

const DexEntry = ({ pokemon }: DexEntryProps) => {
  return <Row>{pokemon.flavor_text}</Row>;
};

export default DexEntry;
