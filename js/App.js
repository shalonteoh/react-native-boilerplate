/* @flow */

import React, { Component } from "react";
import { connect } from "react-redux";
import { Platform, View } from "react-native";
import { Root, StyleProvider } from "native-base";
import { StackNavigator, addNavigationHelpers } from "react-navigation";
import Drawer from "./Drawer";
import AuthNavigator from "./Components/Auth/AuthNavigator";
import getTheme from "../native-base-theme/components";
import Global from "./Global";

export const AppNavigator = (token) => {
	return StackNavigator(
		{
			Drawer: { screen: Drawer,  path: 'drawer', },
			Authentication: { screen: AuthNavigator , path: 'auth',},
		},
		{
			initialRouteName: token? "Drawer":"Authentication",
			contentOptions: {
				activeTintColor: Global.backgroundColor
			},
			headerMode: "none"
		}
	);
};

const prefix = Platform.OS == 'android' ? 'staringit://staringit/' : 'staringit://';

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
        
	}

	componentWillUnmount() {
		
	}

	render() {
		const { token } = this.props;
		const Layout = AppNavigator(token);
		return (
			<Root>
				<StyleProvider style={getTheme()}>
                    <Layout uriPrefix={prefix}/>
				</StyleProvider>
			</Root>
		);
	}
}

var mapStateToProps = state => {
	return {
		token: state.auth.token,
	};
};

module.exports = connect(mapStateToProps)(App);
