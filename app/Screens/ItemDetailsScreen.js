import React from "react";
import { View, StyleSheet, StatusBar,Text,Image } from "react-native";
// import { Image } from "react-native-expo-image-cache";
import colors from "../config/colors";

function ItemDetailsScreen() {
	// const listing = route.params;
	return (
		<View style={styles.mainContainer}>
			<Image
				style={styles.image}
				// uri={listing.images[0].url}
                source={{
                    uri:"https://images3.alphacoders.com/823/thumb-1920-82317.jpg"
                }}
			/>
			<View style={styles.detailsContainer}>
				<Text style={styles.title}>Title</Text>
				<Text style={styles.price}>Sub-Title</Text>
				<View style={styles.userContainer}>
					{/* <ListItem
						image={require("../assets/profile.jpg")}
						title="Ankit Pandey"
						subTitle="5 Listings"
					/> */}
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		// paddingTop: StatusBar.currentHeight,
	},
	detailsContainer: {
		padding: 20,
	},
	image: {
		width: "100%",
		height: 300,
	},
	price: {
		color: colors.secondary,
		fontWeight: "bold",
		fontSize: 20,
		marginVertical: 10,
	},
	title: {
		fontSize: 24,
		fontWeight: "500",
	},
	userContainer: {
		marginVertical: 40,
	},
});

export default ItemDetailsScreen;
