import React, { Component } from "react";
import { NavigationActions, StackNavigator } from "react-navigation";
import Login from "./Login";
import ForgotPassword from './ForgotPassword';

const LoginScreen = ({ navigation }) => <Login navigation={navigation} />;

const AuthNavigator = StackNavigator(
	{
		Login: {
			screen: LoginScreen,
			navigationOptions: {
				header: null
			}
		},
		ForgotPassword: {
			screen: ForgotPassword,
			navigationOptions: {
				header: null
			}
		}
	},
	{
		initialRouteName: "Login",
		headerMode: "screen"
	}
);

export default AuthNavigator;
