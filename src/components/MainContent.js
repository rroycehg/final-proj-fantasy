import React, { useState, useEffect } from "react";
import CharWheel from "./CharWheel";
import BattleContainer from "./BattleContainer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function MainContent() {
  const [characters, setCharacters] = useState([]);
  const [selectChar, setSelectChar] = useState({});

  useEffect(() => {
    async function fetchChar() {
      const res = await fetch(
        `https://secure-mountain-06952.herokuapp.com/characters`
      );
      if (res.ok) {
        const data = await res.json();
        setCharacters(data);
      }
    }
    fetchChar();
  }, []);

  const getThisChar = (charObj) => {
    console.log(charObj);
    setSelectChar(charObj);
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <CharWheel characters={characters} getThisChar={getThisChar} />
      <BattleContainer selectChar={selectChar} />
    </div>
  );
}

export default MainContent;
