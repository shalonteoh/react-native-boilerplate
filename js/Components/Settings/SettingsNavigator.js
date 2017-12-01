import React, { Component } from "react";
import { NavigationActions, StackNavigator } from "react-navigation";
import Settings from "./index";
import {
	View,
	Platform,
	TouchableOpacity,
} from "react-native";
import {
	Header,
	Title,
	Icon,
	List,
	Text,
	Left,
	Switch
} from "native-base";
import styles from "./styles";
import { themeColor } from "../../Global";
import { scale, verticalScale, moderateScale } from "../../Scaling";

const MainScreen = ({ navigation }) => <Settings navigation={navigation} />;

const SettingsNavigator = StackNavigator(
	{
		Settings: {
			screen: MainScreen,
			navigationOptions: {
				headerStyle: {
					backgroundColor: themeColor,
				},
				headerTitleStyle: {
					color: "#000"
				},
				headerBackTitleStyle: {
					color: "#157EFB"
				},
				headerTintColor: "#666",
				title: "Settings"
			}
		}
	},
	{
		initialRouteName: "Settings",
		headerMode: "screen"
	}
);

export default SettingsNavigator;
