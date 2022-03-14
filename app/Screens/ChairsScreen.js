import React from 'react'
import CategoryComponent from '../components/CategoryComponent'


function ChairsScreen({ navigation }) {
    return (
        <CategoryComponent
            title="Chairs"
            path="/chairs"
            navigation={navigation} />
    )
}



export default ChairsScreen