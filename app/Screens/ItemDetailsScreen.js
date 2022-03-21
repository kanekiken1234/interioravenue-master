import React, { useEffect, useState } from "react";
import { View, StyleSheet, StatusBar, Text, Image, ToastAndroid } from "react-native";


import Screen from "../components/Screen";
import colors from "../config/colors";
import fetchDetailsApi from '../api/fetchDetails';
import IconButton from "../components/AppIconButton";
import Loader from "../components/Loader";


function ItemDetailsScreen({ route }) {

	const [data, setData] = useState({});

	useEffect(() => {
		const listing = route.params;
		console.log(listing[1]);
		let path = listing[1]
		let product_id = listing[0]
		let apiPath = path.slice(0, -1)
		let absoluteApiPath = `${path}${apiPath}?id=${product_id}`
		console.log(absoluteApiPath)
		async function fetchData() {
			try {
				const result = await fetchDetailsApi.fetchDetails(absoluteApiPath);
				if (!result.ok) {
					setData("No Data Found")
					return
				}
				console.log("before")
				console.log(result.data)
				setData(result.data)
			} catch (error) {
				console.log(error)
				ToastAndroid.show(error, ToastAndroid.LONG);
			}
		};
		fetchData();
	}, [])

	console.log("after")
	console.log(data)
	const {
		product_3D_model_images,
		product_name,
		product_price,
		product_type,
		product_description,
		product_3D_model_mtl,
		product_3D_model_obj,
		product_3D_model_texture,
	} = data

	const modelProps = {
		"product_3D_model_mtl": product_3D_model_mtl,
		"product_3D_model_obj": product_3D_model_obj,
		"product_3D_model_texture": product_3D_model_texture
	}

	if (Object.keys(data).length !== 0) {
		console.log(data)
		return (
			<Screen>
				<View style={styles.imageContainer}>
					<Image
						style={styles.image}
						source={{
							uri: product_3D_model_images[0]
						}}
						resizeMode="center"
					/>
				</View>
				<View style={styles.profileContent}>
					<View style={{ flex: 0.3 }}>
						<Text style={styles.title}>{product_name}</Text>
						<Text style={styles.subTitle}>{product_description}</Text>
					</View>

					<View style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						paddingRight: 20,
						flex: 0.3,
						// backgroundColor:"red"
					}}>
						<Text style={styles.price}>Rs.&nbsp;{product_price}</Text>
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
						flex: 0.2,
						flexDirection: "row",
						alignItems: 'center',
						justifyContent: 'space-around',
						bottom: 0,
						width: "100%",
						paddingHorizontal: 6,
						paddingBottom:12
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
		)
	}
	else {
		return (
			<Loader />
		)
	}
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
		// overflow: 'hidden',
		flex: 0.3,
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		elevation: 35,
		backgroundColor: colors.white,
		// position: "absolute",
		// bottom: 0,
		width: "100%",
		// height: 250,
		display: "flex",
		paddingTop: 16,
		justifyContent: "space-between",
	},
});

export default ItemDetailsScreen;