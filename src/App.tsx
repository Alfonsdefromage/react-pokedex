import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "@emotion/react";
import theme from "../public/theme";
import { CssBaseline } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import PokemonDetails from "./components/PokemonDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:pokemonName",
    element: <PokemonDetails />,
  },
]);

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
