import React from 'react'
import CategoryComponent from '../components/CategoryComponent'

function SofasScreen({ navigation }) {
    return (
        <CategoryComponent
            title="Sofas"
            path="/sofas"
            navigation={navigation} />
    )
}

export default SofasScreen