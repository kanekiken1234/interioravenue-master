import React from 'react'
import CategoryComponent from '../components/CategoryComponent'


function DesksScreen({ navigation }) {
    return (
        <CategoryComponent
            title="Desks"
            path="/desks"
            navigation={navigation} />
    )
}

export default DesksScreen