import React from 'react'
import CategoryComponent from '../components/CategoryComponent'


function TablesScreen() {
    return (
        <CategoryComponent
            title="Tables"
            path="/tables"
            navigation={navigation} />
    )
}

export default TablesScreen