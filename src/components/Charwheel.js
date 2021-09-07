import CharacterCard from "./CharacterCard";
import Carousel from "react-elastic-carousel";
import { breakpoints } from "./CarouselStyle";

function CharWheel(props) {
	const chararray = props.characters.map((character) => (
		<CharacterCard key={character.id} character={character} />
	));
	return (
		<div>
			<Carousel breakpoints={breakpoints}>{chararray}</Carousel>
		</div>
	);
}

export default CharWheel;
