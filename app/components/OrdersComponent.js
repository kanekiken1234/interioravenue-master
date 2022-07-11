import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import colors from '../config/colors'

import IconButton from './AppIconButton'

function OrdersComponent({ id, title,navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.imgContainer}>
                    <Image
                        source={{
                            uri: "https://ia-3d-models.s3.ap-south-1.amazonaws.com/models/Sofa/305/IKE080007_png/IKEA-Kramfors_Sofa_Combinaison-3D.png",
                        }}
                        style={styles.img}
                    />
                </View>
                <View style={styles.description}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>
                            {title}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.price}>
                            Order No.: 181411056
                        </Text>
                        <Text style={styles.date}>Date: 21/20/80</Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
            <IconButton
                name="CONTACT US"
                buttonWidth="40%"
                buttonHeight="20%"
                borderRadius={25}
                size="medium"
                buttonBorderColor={colors.black}
                buttonBackgroundColor={colors.white}
                onPress={()=> navigation.navigate("HelpAndSupportScreen") }
            />
            <IconButton
                name="CANCEL"
                buttonWidth="40%"
                buttonHeight="20%"
                borderRadius={25}
                size="medium"
                buttonBorderColor={colors.black}
                buttonBackgroundColor={colors.white}
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        width: "90%",
        height: 150,
        flexDirection: "column",
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: 16,
        alignSelf: 'center',
        display:"flex",
    },
    topContainer:{
        display:"flex",
        flexDirection:"row"
    },
    description: {
        flex: 0.5,
        height: '100%',
        padding: 16
    },
    imgContainer: {
        flex: 0.5,
        height: '100%',
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 12,
        paddingTop:16,
    },
    img: {
        height: 45,
        width: 90
    },
    name: {
        fontWeight: "bold",
        fontSize: 16,
        color: colors.black
    },
    price: {
        color: colors.medium,
        fontWeight: "bold",
        fontSize: 14,
    },
    buttonContainer:{
        marginTop:16,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        width:"100%"
    },
    date: {
        fontWeight: "400",
        color: colors.medium,
    },
})

export default OrdersComponent