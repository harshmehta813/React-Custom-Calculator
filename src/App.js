import { useContext } from "react";
import { AppContext } from "./redux/AppContextProvider";
import "./styles.css";
import React from "react";
import Counter from "./Count/Counter";

export default function App() {
	const { getState } = useContext(AppContext)[1];
	const { count } = getState();
	return (
		<div className="App">
			<h2>React Custom Calculator</h2>
			<h2>{count}</h2>
			<Counter />
		</div>
	);
}
