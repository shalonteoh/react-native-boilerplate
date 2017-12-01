import React, { Component } from "react";
import {
	Image,
	View,
	StatusBar,
	Dimensions,
	ActivityIndicator,
	TextInput,
	Platform,
	Alert,
	TouchableOpacity
} from "react-native";
import {
	Container,
	Button,
	H3,
	H2,
	Text,
	Header,
	Title,
	Body,
	Left,
	Right,
	Icon,
	Subtitle,
	Item,
	Input,
	Form,
	Thumbnail
} from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
import global from "../../Global";
import { connect } from "react-redux";
import { forgetPassword } from "../../Actions";
import { NavigationActions, StackNavigator } from "react-navigation";
import { moderateScale } from "../../Scaling";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const resetAction = NavigationActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: "Login" })]
});

class ForgotPassword extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "testing@testing.com",
			valid: true,
			submit: false,
			loading: false
		};
	}

	onForgotPassword() {
		let { email } = this.state;
		this.setState({ loading: true }, () => {
			if (email !== "" && this.validateEmail(email)) {
				this.props
					.dispatch(forgetPassword(email));
					Alert.alert(
						`We have received your password reset request. If your email address is associated to an EasyStore account, we will send you an email to reset your password shortly. Please follow the instructions in the email to reset your password.
						`,
						`Note: This password reset link will expire within one hour for security purposes.`,
						[
							{
								text: "Dismiss",
								onPress: () =>
									this.setState(
										{
											loading: false
										},
										() => this.props.navigation.dispatch(resetAction)
									)
							}
						],
						{ cancelable: false }
					);
					// .then(() => {
					// 	Alert.alert(
                    //         `We have received your password reset request. If your email address is associated to an EasyStore account, we will send you an email to reset your password shortly. Please follow the instructions in the email to reset your password.
                    //         `,
                    //         `Note: This password reset link will expire within one hour for security purposes.`,
                    //         [
                    //             {
                    //                 text: "Dismiss",
                    //                 onPress: () =>
                    //                     this.setState(
                    //                         {
                    //                             loading: false
                    //                         },
                    //                         () => this.props.navigation.dispatch(resetAction)
                    //                     )
                    //             }
                    //         ],
                    //         { cancelable: false }
                    //     );
					// })
					// .catch(error => {
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
		});
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
						<Text style={styles.greetingText}>Forgot your password?</Text>
						<Text style={styles.labelText}>
							Input your registered email to reset password
						</Text>
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
								returnKeyType="done"
								value={this.state.email}
								onChangeText={input => {
									this.setState({ email: input }, () => {
										this.validateEmail(this.state.email);
									});
								}}
								onSubmitEditing={event => {
									this.onForgotPassword();
								}}
								clearButtonMode={"while-editing"}
							/>
						</Item>

						<TouchableOpacity
							style={styles.button}
							onPress={() => this.onForgotPassword()}
						>
							{this.state.loading ? (
								<ActivityIndicator
									size={moderateScale(20) > 25 ? "large" : "small"}
									color="white"
								/>
							) : (
								<Text style={styles.buttonText}>Confirm</Text>
							)}
						</TouchableOpacity>
					</Form>
					<View style={styles.bottomContainer}>
						<TouchableOpacity
							onPress={() => this.props.navigation.dispatch(resetAction)}
						>
							<Text note style={styles.bottomText}>
								{"Back to sign in"}
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

module.exports = connect()(ForgotPassword);
