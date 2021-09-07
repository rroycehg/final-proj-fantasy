import React, { useState, useEffect } from "react";
import CharWheel from "./CharWheel";

function MainContent() {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		async function fetchChar() {
			const res = await fetch(
				`https://secret-eyrie-33623.herokuapp.com/characters`
			);
			if (res.ok) {
				const data = await res.json();
				setCharacters(data);
			}
		}
		fetchChar();
	}, []);

	return <CharWheel characters={characters} />;
}

export default MainContent;
