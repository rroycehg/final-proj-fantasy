import TeamA from "./TeamA";
import TeamB from "./TeamB";

function BattleContainer(props) {
  return (
    <div className="battle-container">
      <TeamA selectChar={props.selectChar} />
      <TeamB selectChar={props.selectChar} />
    </div>
  );
}

export default BattleContainer;
