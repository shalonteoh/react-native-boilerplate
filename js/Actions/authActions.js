import { Alert } from "react-native";

/**
* Set request timeout for http request
*/
function timeout(ms, promise) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			reject(new Error("timeout"));
		}, ms);
		promise.then(resolve, reject);
	});
}

/**
* Function to login user
*/
exports.loginUser = (email,password) => {
	return function(dispatch) {
		// return timeout(
		// 	5000,
		// 	fetch(POSTLOGIN_URL, {
		// 		method: "POST",
		// 		headers: {
		// 			Accept: "application/json",
		// 			"Content-Type": "application/json"
		// 		},
		// 		body: JSON.stringify({
		// 			email: email,
		// 			password: password,
		// 			redirect_uri: redirect_uri,
		// 			is_remember: 1
		// 		})
		// 	})
		// )
		// 	.then(response => {
		// 		return response.json();
		// 	})
		// 	.then(responseJson => {
		// 		if (!responseJson.error) {
		// 			dispatch(authUser(email, password, responseJson.token));
		// 		} else {
		// 			return Alert.alert("Invalid email or password. Please enter again.");
		// 		}
		// 	})
		// 	.catch(error => {
		// 		return Alert.alert(
		// 			"No Internet Connection",
		// 			"Please check your connection and try again."
		// 		);
		// 	});
        let token = 'this_is_the_access_token';
        return dispatch(authUser(email, password, token));
	};
};

/**
* Function to logout user
*/
exports.logoutUser = token => {
	return function(dispatch) {
		return dispatch(unauthUser);
	};
};

exports.forgetPassword = email => {
	return function(dispatch) {
		return;
	};
};

/**
* Login user action
*/
authUser = (email, password, token) => {
	return {
		type: "AUTH_USER",
		email,
		password,
		token
	};
};

/**
* Logout user action
*/
unauthUser = {
	type: "UNAUTH_USER"
};
