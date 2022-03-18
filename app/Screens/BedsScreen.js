import React from 'react'
import CategoryComponent from '../components/CategoryComponent'

function BedsScreen({ navigation }) {
    return (
        <CategoryComponent
            title="Beds"
            path="/beds"
            navigation={navigation} />
    )
}

export default BedsScreen