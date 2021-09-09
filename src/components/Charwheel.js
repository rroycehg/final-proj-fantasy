import CharacterCard from "./CharacterCard";
import Carousel from "react-elastic-carousel";
import { breakpoints } from "./CarouselStyle";
import Item from "./Item";

function CharWheel(props) {
  const chararray = props.characters.map((character) => (
    <CharacterCard
      key={character.id}
      character={character}
      getThisChar={props.getThisChar}
    />
  ));
  return (
    <div>
      <div className="car-container">
        <Carousel breakpoints={breakpoints} itemsToShow={3}>
          {chararray}
        </Carousel>
      </div>
    </div>
  );
}

export default CharWheel;
