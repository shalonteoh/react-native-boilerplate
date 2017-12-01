import React, { Component } from "react";
import { Image, View, Dimensions, FlatList, BackHandler } from "react-native";
import {
	NavigationActions,
	StackNavigator,
	DrawerNavigator
} from "react-navigation";
import {
	Content,
	Text,
	List,
	ListItem,
	Container,
	Left,
	Button
} from "native-base";
import Global from "../../Global";
import styles from "./styles";
import { connect } from "react-redux";
import { scale, verticalScale, moderateScale } from "../../Scaling";

const deviceWidth = Dimensions.get("window").width;

const MENU = [
	{
		name: "Settings",
		route: "Settings",
	}
];

class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shadowOffsetWidth: 1,
			shadowRadius: 4,
			selectedRoute: "Settings"
		};
	}

	_keyExtractor = (item, index) => item.name;

	_renderItem = ({ item }) => (
		<ListItem
			button
			noBorder
			id={item.id}
			onPress={() => this._onPressRow(item)}
		>
			<Left>
				<Text
					style={[
						styles.text,
						{
							fontWeight:
								this.state.selectedRoute === item.route ? "500" : "300"
						}
					]}
				>
					{item.name}
				</Text>
			</Left>
		</ListItem>
	);

	_onPressRow(rowData) {
		this.setState(
			{
				selectedRoute: rowData.route
			},
			() => {
				this.props.navigation.navigate(rowData.route);
			}
		);
	}

	render() {
		return (
			<Container>
				<Content
					bounces={false}
					style={{ flex: 1, backgroundColor: Global.backgroundColor }}
				>
					<View style={styles.drawerCover}>
						<Text style={styles.username}>Username</Text>
					</View>
					<View style={styles.flatList}>
						<FlatList
							data={MENU}
							extraData={this.state}
							keyExtractor={this._keyExtractor}
							renderItem={this._renderItem}
						/>
					</View>
				</Content>
			</Container>
		);
	}
}

var mapStateToProps = state => {
	return {
	};
};

module.exports = connect(mapStateToProps)(SideBar);
