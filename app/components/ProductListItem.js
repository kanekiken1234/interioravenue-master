import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import colors from '../config/colors'
import IconButton from './AppIconButton'

function ProductListItem({ id, title }) {
    return (
        <View style={styles.container}>
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
                        Rs. 10
                    </Text>
                </View>
                <View style={styles.more}>
                    <IconButton
                        iconName='plus-outline'
                        iconHeight={16}
                        iconWidth={16}
                        borderRadius={25}
                        buttonWidth={32}
                        buttonHeight={32}
                        iconFill={colors.black}
                        isIconRequired={true}
                    />
                    <Text style={styles.qty}>5</Text>
                    <IconButton
                        iconName='minus-outline'
                        iconHeight={16}
                        iconWidth={16}
                        borderRadius={25}
                        buttonWidth={32}
                        buttonHeight={32}
                        iconFill={colors.black}
                        isIconRequired={true}
                    />
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        width: "90%",
        height: 150,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: 16,
        alignSelf: 'center',
    },
    description: {
        flex: 0.5,
        height: '100%',
        padding: 16
    },
    imgContainer: {
        flex: 0.5,
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginLeft: 12,
    },
    img: {
        height: 80,
        width: 150
    },
    more: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16
    },
    name: {
        fontWeight: "bold",
        fontSize: 16,
        color: colors.medium
    },
    price: {
        color: colors.black,
        fontWeight: "bold",
        fontSize: 22,
    },
    qty: {
        color: colors.dark,
        fontWeight: "300",
        fontSize: 20
    }
})

export default ProductListItem