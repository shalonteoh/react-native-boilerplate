import React, { Component } from "react";
import { Dimensions, BackHandler, Platform } from "react-native";
import {
	DrawerNavigator,
	addNavigationHelpers,
	NavigationActions
} from "react-navigation";
import { scale, verticalScale, moderateScale } from "./Scaling";
import SideBar from "./Components/Sidebar";
import Global from "./Global";
import SettingsNavigator from "./Components/Settings/SettingsNavigator";

const deviceWidth = Dimensions.get("window").width;

const DrawerNav = DrawerNavigator(
	{
		Settings: { screen: SettingsNavigator },
	},
	{
		initialRouteName: "Settings",
		contentOptions: {
			activeTintColor: Global.backgroundColor
		},
		drawerWidth: moderateScale(250),
		contentComponent: props => <SideBar {...props} />
	}
);

class Drawer extends Component {
	render() {
		return <DrawerNav />;
	}
}

export default Drawer;
