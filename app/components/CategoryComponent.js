import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, ToastAndroid } from 'react-native'


import IconButton from '../components/AppIconButton'
import Screen from '../components/Screen'
import colors from '../config/colors'
import fetchDetailsApi from '../api/fetchDetails'
import Card from '../components/Card'



function CategoryComponent({ navigation, title, path }) {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await fetchDetailsApi.fetchDetails(path);
                if (!result.ok) {
                    setChairsData("No Data Found")
                    return
                }
                const ids = Object.keys(result.data)
                const details = ids.map(eachId => {
                    return (
                        {
                            "id": eachId,
                            "data": result.data[eachId]
                        }
                    )
                })
                setData(details)
            } catch (error) {
                console.log(error)
                ToastAndroid.show(error, ToastAndroid.LONG);
            }
        };
        fetchData();
    }, []);
    return (
        <Screen style={styles.screenColor}>
            <View style={styles.topBar}>
                <IconButton
                    buttonWidth={32}
                    buttonHeight={32}
                    buttonBackgroundColor={colors.white}
                    iconName="corner-up-left-outline"
                    iconWidth={20}
                    iconHeight={20}
                    iconFill={colors.medium}
                    borderRadius={50}
                    isIconRequired={true}
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.headingStyle}>{title}</Text>
                <IconButton
                    buttonWidth={32}
                    buttonHeight={32}
                    buttonBackgroundColor={colors.white}
                    iconName="more-horizontal-outline"
                    iconWidth={20}
                    iconHeight={20}
                    iconFill={colors.medium}
                    borderRadius={50}
                    isIconRequired={true}
                    onPress={() => { }}
                />
            </View>
            <View style={styles.content}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => (
                        <Card
                            title={item.data.product_name}
                            imageUrl={item.data.product_3D_model_image}
                            price={item.data.product_price}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 0.9,
        padding: 16
    },
    headingStyle: {
        fontWeight: "bold",
        fontSize: 16,
    },
    screenColor: {
        backgroundColor: colors.primary,
    },
    topBar: {
        flexDirection: "row",
        alignItems: "center",
        flex: 0.1,
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16,
    }
})

export default CategoryComponent