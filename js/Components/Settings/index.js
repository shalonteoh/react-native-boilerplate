import React, { Component } from "react";
import {
	TouchableWithoutFeedback,
	View,
	Dimensions,
	Platform,
	TouchableOpacity,
	Image,
	ActivityIndicator,
	Animated
} from "react-native";
import { StackNavigator } from "react-navigation";
import styles from "./styles";
import { themeColor } from "../../Global";
import {
	Container,
	Header,
	Title,
	Content,
	Icon,
	List,
	ListItem,
	Text,
	Left,
	Switch
} from "native-base";
import { NavigationActions } from "react-navigation";
import { logoutUser } from "../../Actions";
import { connect } from "react-redux";
import { scale, verticalScale, moderateScale } from "../../Scaling";

const deviceWidth = Dimensions.get("window").width;

class Settings extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLogingOut: false
		};
	}

	render() {
		return (
			<Container style={[styles.container]}>
				<Content
				>
					<TouchableWithoutFeedback
						onPress={() => {
							this.setState(
								{
									isLogingOut: true
								},
								() =>
									// this.props.dispatch(logoutUser(this.props.token)).then(() => {
									// 	this.setState({ isLogingOut: false });
									// })
									{this.props.dispatch(logoutUser(this.props.token));
									this.setState({ isLogingOut: false });}

							);
						}}
					>
						<View
							ref="loading"
							style={[
								styles.item,
								{ flexDirection: "row", alignItems: "center" }
							]}
						>
							<View style={{ paddingHorizontal: moderateScale(10) }}>
								<Text style={styles.title}>Sign out</Text>
								<Text style={styles.description}>
									Sign out from application
								</Text>
							</View>
						</View>
					</TouchableWithoutFeedback>
				</Content>
			</Container>
		);
	}
}

var mapStateToProps = state => {
	return {
		token: state.auth.token
	};
};

module.exports = connect(mapStateToProps)(Settings);
