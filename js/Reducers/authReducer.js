var defaultState = {
	email: undefined,
	password: undefined,
	token: undefined
};

module.exports = (state = defaultState, action) => {
	switch (action.type) {
		case "AUTH_USER":
			return {
				email: action.email,
				password: action.password,
				token: action.token
			};
		case "UNAUTH_USER":
			return {
				user_id: undefined,
				password: undefined,
				token: undefined
			};
		default:
			return state;
	}
};
