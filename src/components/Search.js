import React from "react";
import axios from "axios";
import { Input, FormGroup,Col } from "reactstrap";

export default function Search({ setPokemons, setAll, all }) {
  const [name, setName] = React.useState("");

  React.useEffect(() => {

    // On initial render retrieving pokemon names
        // to make pattern match with the user input
    const func = async () => {
      const pokeNames = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      // console.log(pokeNames)
      setAll(pokeNames.data);
    };
    func();

  }, []);

  React.useEffect(() => {
    const fetchPokes = async () => {
      if (all.results) { // checking if pokemons name list
        // console.log(all);
        
        const filteredValues = all.results.filter((ele) => { // filtering original pokemon names which matches the user input
          return ele.name.includes(name);
        });

        // console.log(filteredValues, "filtered");

        // Using Promise.All to wait for until all pokemon details are received.
        const pokes = await Promise.all(
          filteredValues.map(async (poke) => { // getting each pokemon details
            const pokeData = await axios.get(
              `https://pokeapi.co/api/v2/pokemon/${poke.name}`
            );
            return pokeData.data;
          })
        );

        setPokemons(pokes); // setting the searched pokemon details
      }
    };

    // Start fetching when user input is atleast 3 characters long
    if (name.length >= 3) {
      fetchPokes();
    }
    else{ // when there are less than 3 characters in the input dialog, remove the previous pokemons details
      setPokemons([])
    }
  }, [all, name]); // adding dependency of all pokemon names fetched and user input

  return (
    <>
      <div>
      <FormGroup row style={{margin:"1rem",display:'flex',alignItems:'center'}}>
        <Col sm={2} style={{alignItems:'center'}}>
            <h5> Pokemon Name </h5>
        </Col>
         <Col sm={10}>
          <Input // search bar
            value={name}
            placeholder="please enter Pokemon Name (atleast 3 characters)"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Col>
        </FormGroup>
        <br />
        <br />
      </div>
    </>
  );
}
