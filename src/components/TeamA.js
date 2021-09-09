function TeamA(props) {
  return (
    <div>
      <div className="column">
        <ul>
          <img src={props.selectChar.image2} alt="battle-image" />
          <div>
            <h1>{props.selectChar.name}</h1>
            <span className="span-bars">HP: {props.selectChar.hp}</span>
            <span className="span-bars">DMG: {props.selectChar.dmg}</span>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default TeamA;
