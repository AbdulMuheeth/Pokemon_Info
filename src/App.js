import React, { useEffect } from "react";
import CardTemplate from "./components/CardTemplate";
import Search from "./components/Search";
import "./styles.css";
import { Navbar, NavbarBrand } from "reactstrap";

export default function App() {
  const [pokemons, setPokemons] = React.useState([]);
  const [all, setAll] = React.useState([]);

  return (
    <div className="App">
      
      <Navbar color="dark" light expand="md">
        <NavbarBrand style={{ color: "white" }} href="/">
          <b> Pokemon Info </b>
        </NavbarBrand>
      </Navbar>

      <Search setPokemons={setPokemons} setAll={setAll} all={all} />

      {pokemons.length > 0 ? ( // Showing pokemons only when there is atleast one pokemon
        <CardTemplate pokemons={pokemons} />
      ) : (
        <h5 style={{ textAlign: "center" }}>No Results Found!</h5>
      )}

    </div>
  );
}
