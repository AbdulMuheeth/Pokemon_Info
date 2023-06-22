
import {CardGroup,Card,CardBody,CardTitle,CardText,ListGroup,ListGroupItem,CardLink} from 'reactstrap'

export default function CardTemplate({pokemons}){
  // rendering each pokemon details as the card.
  return(
    <>
    <CardGroup style={{display:'flex',justifyContent:'center'}}>
      {
        pokemons.map((pokemon,pos)=>{
          return(
            <Card
            key={"KEY"+pos}
            style={{
              width: '18rem',
              maxWidth:'20rem',
              marginTop:'2rem'
            }}
            >
            <img
              alt="Card"
              top
              width="300"
              src={pokemon.sprites.other.home.front_default}
            />
            <CardBody>
              <CardTitle tag="h3">
                {pokemon.name}
              </CardTitle>
              <CardText>
              </CardText>
            </CardBody>
            <ListGroup flush>
              <ListGroupItem>
                Height : {pokemon.height}
              </ListGroupItem>
              <ListGroupItem>
                Weight : {pokemon.weight}
              </ListGroupItem>
              <ListGroupItem>
                Number of Abilities: {pokemon.abilities.length}
              </ListGroupItem>
              <ListGroupItem>
                Number of Moves: {pokemon.moves.length}
              </ListGroupItem>
            </ListGroup>
          </Card>
          )
          
        })
      }
    </CardGroup>
  </>
  );

}