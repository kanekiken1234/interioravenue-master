import React from 'react'
import CategoryComponent from '../components/CategoryComponent'

function DesksScreen({ navigation }) {
    return (
        <CategoryComponent
            title="Beds"
            path="/beds"
            navigation={navigation} />
    )
}

export default DesksScreen