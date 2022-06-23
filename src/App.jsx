import Button from "./Button";
import Card from "./Card";

function App(){
	const pokemons = [
		{
			id: "#001",
			nome: "Bulbasaur",
			foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
			tipo: "Grama / Venenoso",
		},
		{
			id: "#002",
			nome: "Ivysaur",
			foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
			tipo: "Grama / Venenoso",
		},
		{
			id: "#003",
			nome: "Venusaur",
			foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
			tipo: "Grama / Venenoso",
		},
	];

	return(
		<div>
			{
				pokemons.map((poke, id) => {
					return <Card key={id}
							id={poke.id}
							nome={poke.nome}
							foto={poke.foto}
							tipo={poke.tipo}
						/>;
				})
			}
		</div>
	);
}

export default App;