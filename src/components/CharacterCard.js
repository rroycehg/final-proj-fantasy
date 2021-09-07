function CharacterCard(props) {
	const role = [props.character.role_id];
	console.log(role);
	return (
		<div className="card-container">
			<div className="image-container">
				<img src={props.character.image1} alt="char-image1" />
			</div>
			<div className="card-name">
				<h2>{props.character.name}</h2>
			</div>
			<div className="game-footer">
				<small>{props.character.game}</small>
			</div>
			<div className="class-role-container"></div>
		</div>
	);
}

export default CharacterCard;
