import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";

function ItemDetailsScreen({ route }) {
	const listing = route.params;
	return (
		<Screen>
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={{
						uri: listing.image
					}}
					resizeMode="center"
				/>
			</View>
			<View style={styles.profileContent}>
				<Text style={styles.title}>{listing.title}</Text>
				<Text style={styles.subTitle}>{listing.subTitle}</Text>
				<Text style={styles.price}>{listing.price}</Text>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	imageContainer: {
		flex: 0.7
	},
	image: {
		width: "100%",
		height: "100%",
	},
	price: {
		color: colors.black,
		fontWeight: "bold",
		fontSize: 40
	},
	title: {
		marginBottom: 5,
		fontSize: 25,
		color: colors.medium,
		fontWeight: "bold",
	},
	subTitle: {
		marginBottom: 20,
		fontSize: 16,
		color: colors.medium,
	},
	profileContent: {
		overflow: 'hidden',
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		elevation: 35,
		backgroundColor: colors.white,
		position: "absolute",
		bottom: 0,
		width: "100%",
		height: 300,
		padding: 20
	},
});

export default ItemDetailsScreen;
