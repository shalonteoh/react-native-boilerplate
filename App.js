import React from "react";
import App from "./js/App";
import { Provider } from "react-redux";
import { configureStore } from "./js/Store";

export default class App1 extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Provider store={configureStore()}>
				<App />
			</Provider>
		);
	}
}
