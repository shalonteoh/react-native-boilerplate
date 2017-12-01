import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import { AsyncStorage } from "react-native";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage";
import reducers from "../Reducers";

const config = {
	key: "root",
	storage
};

const reducer = persistCombineReducers(config, reducers);

exports.configureStore = () => {
	var store = createStore(reducer, applyMiddleware(thunk));
	let persistor = persistStore(store);

	return persistor, store;
};
