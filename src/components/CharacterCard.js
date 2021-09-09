import { Fwrap } from "./CarouselStyle";
function CharacterCard(props) {
  const role = [props.character.role][0];
  const classType = [props.character.classtype][0];

  return (
    <Fwrap
      className="card-container"
      onClick={() => props.getThisChar(props.character)}
    >
      <div className="image-container">
        <img
          src={props.character.image1}
          alt="char-image1"
          className="image-actual"
        />
      </div>
      <div className="char-details">
        <div className="card-name">
          <h2>{props.character.name}</h2>
        </div>
        <div className="game-footer">
          <small>{props.character.game}</small>
        </div>
        <div className="class-role-container">
          {classType.class_name} | {role.role_name}{" "}
        </div>
        <div className="stats-container" data-total="1000" data-value="1000">
          <div id="hp" className="bar">
            <h3>HP: {props.character.hp}</h3>
          </div>
          <div id="dmg" className="bar">
            <h3>DMG: {props.character.dmg}</h3>
          </div>
        </div>
      </div>
    </Fwrap>
  );
}

export default CharacterCard;
