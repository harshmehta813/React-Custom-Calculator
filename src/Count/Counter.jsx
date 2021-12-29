import { useContext } from "react";
import { decrementCounter, incrementCounter } from "../redux/action";
import { AppContext } from "../redux/AppContextProvider";

const Counter = () => {
	const x = 1;
	const { dispatch } = useContext(AppContext)[1];
	const handleIncrement = () => {
		const action = incrementCounter(x);
		dispatch(action);
	};
	const handleDecrement = () => {
		const action = decrementCounter(x);
		dispatch(action);
	};
	return (
		<div>
			<button onClick={handleIncrement}>INCREMENT</button>
			<button onClick={handleDecrement}>DECREMENT</button>
		</div>
	);
};

export default Counter;
