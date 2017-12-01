const React = require("react-native");
import { scale, verticalScale, moderateScale } from "../../Scaling";
const { StyleSheet, Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
	sidebar: {
		flex: 1,
		backgroundColor: "#fff"
	},
	drawerCover: {
		alignSelf: "stretch",
		// resizeMode: 'cover',
		height: verticalScale(200),
		width: null,
		position: "relative",
		marginBottom: verticalScale(10),
		alignItems: "center",
		justifyContent: "center",
		marginVertical: verticalScale(30),
		borderWidth: 1,
		borderTopColor: "transparent",
		borderLeftColor: "transparent",
		borderRightColor: "transparent",
		borderBottomColor: "#dbdbdb"
	},
	drawerImage: {
		position: "absolute",
		left: Platform.OS === "android" ? moderateScale(50) : moderateScale(50),
		top: Platform.OS === "android" ? verticalScale(50) : verticalScale(50),
		width: moderateScale(80, 2),
		height: moderateScale(80, 2),
		resizeMode: "cover"
	},
	listItemContainer: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center"
	},
	iconContainer: {
		width: 37,
		height: 37,
		borderRadius: 18,
		marginRight: 12,
		paddingTop: Platform.OS === "android" ? 7 : 5
	},
	sidebarIcon: {
		fontSize: 21,
		color: "#fff",
		lineHeight: Platform.OS === "android" ? 21 : 25,
		backgroundColor: "transparent",
		alignSelf: "center"
	},
	text: {
		//fontWeight: Platform.OS === "ios" ? "500" : "400",
		fontSize: moderateScale(15),
		marginLeft: moderateScale(20)
	},
	badgeText: {
		fontSize: Platform.OS === "ios" ? 13 : 11,
		fontWeight: "400",
		textAlign: "center",
		marginTop: Platform.OS === "android" ? -3 : undefined
	},
	username: {
		alignSelf: "center",
		backgroundColor: "transparent",
		color: "#000",
		marginVertical: verticalScale(10),
		fontWeight: "500",
		fontSize: moderateScale(18)
	},
	storeName: {
		alignSelf: "center",
		marginBottom: verticalScale(25),
		backgroundColor: "transparent",
		fontWeight: "400",
		fontSize: moderateScale(14),
		color: "#666"
	},
	flatList: {
		marginVertical: verticalScale(20),
		marginLeft: moderateScale(20),
		width: moderateScale(deviceWidth * 0.6)
	}
};
