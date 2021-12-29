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
			<h1>React Custom Calculator</h1>
			<h1>{count}</h1>
			<Counter />
		</div>
	);
}
