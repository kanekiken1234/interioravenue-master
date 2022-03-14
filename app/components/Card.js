import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Image, Text } from "react-native";

import colors from "../config/colors";
import IconButton from "./AppIconButton";

function Card({ title, subTitle, price, imageUrl, onPress }) {
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
					<View style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}>
						<Text style={styles.price}>
							Rs. {price}
						</Text>
						<IconButton
							iconName="shopping-cart-outline"
							buttonAppearance="ghost"
							iconWidth={32}
							iconHeight={32}
							iconFill={colors.black}
							buttonBackgroundColor={colors.white}
							borderRadius={25}
							isIconRequired={true} />
					</View>
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
		paddingVertical: 20,
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
