const React = require("react-native");
import Global from "../../Global";
import { scale, verticalScale, moderateScale } from "../../Scaling";
const { StyleSheet, Dimensions, Platform } = React;

const { deviceWidth, deviceHeight } = Dimensions.get("window");

export default {
	container: {
		flex: 1,
		paddingHorizontal: moderateScale(30, 3),
		paddingTop: verticalScale(100),
		backgroundColor: Global.backgroundColor
	},
	topContainer: {
		alignItems: "center",
		justifyContent: "flex-start"
	},
	inputContainer: {
		backgroundColor: "#F5F5F7",
		paddingHorizontal: moderateScale(10),
		marginTop: verticalScale(10)
	},
	inputText: {
		color: "#666"
		//fontSize: moderateScale(14)
	},
	labelText: {
		paddingTop: verticalScale(10),
		paddingBottom: verticalScale(20),
		fontSize: moderateScale(12),
		color: "#999"
	},
	image: {
		width: moderateScale(80),
		height: moderateScale(80)
	},
	greetingText: {
		paddingVertical: moderateScale(20),
		fontSize: moderateScale(24)
	},

	button: {
		marginTop: verticalScale(30),
		backgroundColor: "#40A4E0",
		borderRadius: moderateScale(5),
		height: verticalScale(50),
		alignItems: "center",
		justifyContent: "center"
	},
	buttonText: {
		color: "#fff",
		fontWeight: "500"
	},
	logoContainer: {
		flex: 1,
		marginTop: deviceHeight / 8,
		marginBottom: 30
	},
	logo: {
		position: "absolute",
		left: Platform.OS === "android" ? 40 : 50,
		top: Platform.OS === "android" ? 35 : 60,
		width: 280,
		height: 100
	},
	text: {
		color: "#D8D8D8",
		bottom: 6,
		marginTop: 5
	},
	bottomContainer: {
		flexDirection: "row",
		alignSelf: "center",
		justifyContent: "center",
		// position: "absolute",
		// bottom: 0
		marginTop: verticalScale(20)
	},
	bottomText: {
		color: "#40A4E0",
		fontSize: moderateScale(14)
	},
	icon: {
		color: "#666",
		fontSize: moderateScale(20)
	}
};
