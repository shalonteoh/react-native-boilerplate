import React, { Component } from "react";
import {
	Image,
	View,
	StatusBar,
	Dimensions,
	ActivityIndicator,
	Platform,
	TouchableOpacity
} from "react-native";
import {
	Container,
	Button,
	Text,
	Title,
	Right,
	Icon,
	Item,
	Input,
	Form,
	Thumbnail
} from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
import global from "../../Global";
import { NavigationActions, StackNavigator } from "react-navigation";
import { connect } from "react-redux";
import { loginUser } from "../../Actions";
import { moderateScale } from "../../Scaling";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const resetAction = NavigationActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: "ForgotPassword" })]
});

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "testing@testing.com",
			valid: true,
			submit: false,
			password: "testing",
			loading: false
		};
	}

	focusNextField() {
		this.refs.password._root.focus();
	}

	onSignin() {
		let { email, password, redirect_url } = this.state;
		this.setState(
			{
				loading: true
			},
			() => {
				if (email !== "" && password !== "" && this.validateEmail(email)) {
					this.props
						.dispatch(loginUser(email, password));
						this.setState({
							loading: false
						});
						// .then(() => {
						// 	this.setState({
						// 		loading: false
						// 	});
						// });
				} else {
					setTimeout(
						function() {
							this.setState({
								loading: false,
								valid: false
							});
						}.bind(this),
						500
					);
				}
			}
		);
	}
	render() {
		return (
			<Container style={styles.container}>
				{Platform.OS === "ios" ? <StatusBar barStyle="dark-content" /> : null}

				<KeyboardAwareScrollView
					contentContainerStyle={{
						flex: 1
					}}
				>
				<View style={styles.topContainer}>
						<Text style={styles.greetingText}>Login</Text>
					</View>
					<Form>
						<Item
							regular
							style={[
								styles.inputContainer,
								{
									borderColor:
										(this.state.email !== "" &&
											this.validateEmail(this.state.email)) ||
										this.state.valid
											? "#ededed"
											: "#ff0000"
								}
							]}
						>
							<Input
								ref="email"
								style={styles.inputText}
								placeholder="Email Address"
								placeholderTextColor="#999"
								autoCapitalize="none"
								autoCorrect={false}
								keyboardType="email-address"
								returnKeyType="next"
								value={this.state.email}
								onChangeText={input => {
									this.setState({ email: input }, () => {
										this.validateEmail(this.state.email);
									});
								}}
								onSubmitEditing={event => {
									this.focusNextField();
								}}
								clearButtonMode={"while-editing"}
							/>
						</Item>
						<Item
							regular
							style={[
								styles.inputContainer,
								{
									borderColor:
										this.state.password !== "" || this.state.valid
											? "#ededed"
											: "#ff0000"
								}
							]}
						>
							<Input
								ref="password"
								style={styles.inputText}
								placeholder="Password"
								placeholderTextColor="#999"
								clearButtonMode={"while-editing"}
								autoCapitalize="none"
								autoCorrect={false}
								returnKeyType="done"
								secureTextEntry={this.state.showPassword ? false : true}
								value={this.state.password}
								onChangeText={input => {
									this.setState({ password: input });
								}}
								onSubmitEditing={event => {
									this.onSignin();
								}}
							/>
							<Button
								transparent
								onPress={() => {
									this.setState({ showPassword: !this.state.showPassword });
								}}
								style={{
									marginRight: -10,
									alignSelf: "center"
								}}
							>
								{/* <Icon
									name={this.state.showPassword ? "ios-eye-off" : "ios-eye"}
									style={styles.icon}
								/> */}
							</Button>
						</Item>
						<TouchableOpacity
							ref="button"
							style={styles.button}
							onPress={() => this.onSignin()}
						>
							{this.state.loading ? (
								<ActivityIndicator
									size={moderateScale(20) > 25 ? "large" : "small"}
									color="white"
								/>
							) : (
								<Text style={styles.buttonText}>Sign In</Text>
							)}
						</TouchableOpacity>
					</Form>
					<View style={styles.bottomContainer}>
						<TouchableOpacity
							transparent
							style={[styles.button, { backgroundColor: "transparent" }]}
							onPress={() => {
								this.props.navigation.dispatch(resetAction);
							}}
						>
							<Text note style={styles.bottomText}>
								I forgot my password
							</Text>
						</TouchableOpacity>
					</View>
				</KeyboardAwareScrollView>
			</Container>
		);
	}
	validateEmail = email => {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	};
}

module.exports = connect()(Login);
