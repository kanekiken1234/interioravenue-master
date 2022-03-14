import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Image, Text } from "react-native";


import colors from "../config/colors";

function Card({ title, subTitle, price, imageUrl, onPress, thumbnailUrl }) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.card}>
				<Image
					style={styles.image}
					source={{
						uri: imageUrl
					}}
					resizeMode="center"
				/>
				<View style={styles.detailsContainer}>
					<Text style={styles.title}>
						{title}
					</Text>
					<Text style={styles.subTitle}>
						{subTitle}
					</Text>
					<Text style={styles.price}>
						{price}
					</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 15,
		backgroundColor: colors.white,
		marginBottom: 20,
		overflow: "hidden",
	},
	detailsContainer: {
		padding: 20,
	},
	image: {
		width: "100%",
		height: 200,

	},
	price: {
		color: colors.black,
		fontWeight: "bold",
		fontSize: 25
	},
	title: {
		marginBottom: 5,
		fontSize: 20,
		color: colors.medium,
		fontWeight: 'bold'
	},
	subTitle: {
		marginBottom: 20,
		color: colors.medium,
	}
});

export default Card;
