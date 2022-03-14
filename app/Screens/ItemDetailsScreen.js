import React from "react";
import { View, StyleSheet, StatusBar, Text, Image } from "react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";
import IconButton from "../components/AppIconButton";

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
				<View style={{ flex: 0.3 }}>
					<Text style={styles.title}>{listing.title}</Text>
					<Text style={styles.subTitle}>{listing.subTitle}</Text>
				</View>

				<View style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					paddingRight: 20,
					flex: 0.3
				}}>
					<Text style={styles.price}>{listing.price}<Text style={styles.taxes}>&nbsp;&nbsp;(*Inclusive of all taxes)</Text></Text>
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


				<View style={{
					display: "flex",
					flex: 0.3,
					flexDirection: "row",
					alignItems: 'center',
					justifyContent: 'space-around',
					bottom: 0,
					width: "100%",
					paddingHorizontal: 6,
				}}>
					<IconButton
						name="VIEW IN AR"
						buttonWidth="45%"
						buttonHeight="75%"
						buttonBackgroundColor={colors.secondary}
						borderRadius={25}
						size="large"
					/>
					<IconButton
						name="BUY NOW"
						buttonWidth="45%"
						buttonHeight="75%"
						buttonBackgroundColor={colors.secondary}
						borderRadius={25}
						size="large"
					/>
				</View>
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
		fontSize: 40,
		paddingLeft: 20,
	},
	title: {
		marginBottom: 5,
		fontSize: 25,
		color: colors.medium,
		fontWeight: "bold",
		paddingLeft: 20,
	},
	subTitle: {
		fontSize: 16,
		color: colors.black,
		paddingLeft: 20,
		fontWeight: "300"
	},
	taxes: {
		fontSize: 12,
		fontWeight: "300",
		fontStyle: "italic",
	},
	profileContent: {
		overflow: 'hidden',
		flex: 1,
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		elevation: 35,
		backgroundColor: colors.white,
		position: "absolute",
		bottom: 0,
		width: "100%",
		height: 250,
		display: "flex",
		paddingTop: 16,
		justifyContent: "space-between",
	},
});

export default ItemDetailsScreen;