import React, { useEffect } from "react";
import MainContent from "./MainContent";
import Navbar from "./Navbar";
import styled from "styled-components";

function App() {
	return (
		<div className="App">
			<MainContent />
			<Navbar />
		</div>
	);
}

export default App;
