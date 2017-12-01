const React = require("react-native");
import Global from "../../Global";
const { StyleSheet } = React;
import { scale, verticalScale, moderateScale } from "../../Scaling";

export default {
	container: {
		backgroundColor: Global.themeColor
	},
	topContainer: {
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		paddingTop: 50
	},
	text: {
		alignSelf: "center",
		marginBottom: 7
	},
	mb: {
		marginBottom: 15
	},
	header: {
		backgroundColor: "#000"
	},
	item: {
		backgroundColor: "#F5F5F7",
		paddingHorizontal: moderateScale(16),
		paddingVertical: verticalScale(12),
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: "#ddd"
	},
	image: {
		width: 120,
		height: 120,
		alignSelf: "center",
		marginBottom: 20,
		resizeMode: "contain"
	},
	title: {
		fontSize: moderateScale(16),
		fontWeight: "400",
		color: "#000"
	},
	description: {
		fontSize: moderateScale(13),
		color: "#999"
	},
	centering: {
		alignSelf: "center",
		marginTop: 100,
		marginBottom: 50
	},
	badge: {
		fontSize: moderateScale(12),
		color: "#999",
		fontWeight: "200"
	},
	navIcon: {
		margin: moderateScale(20)
	}
};
