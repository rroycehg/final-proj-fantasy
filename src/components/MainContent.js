import React, { useState, useEffect } from "react";
import CharWheel from "./Charwheel";

function MainContent() {
	const [characters, setCharacters] = useState("");

	useEffect(() => {
		async function fetchChar() {
			const res = await fetch(
				`https://secret-eyrie-33623.herokuapp.com/characters`
			);
			if (res.ok) {
				const data = await res.json();
				console.log(data);
				setCharacters(data);
			}
		}
		fetchChar();
	}, []);

	return <CharWheel />;
}

export default MainContent;
