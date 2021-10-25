import React from 'react'
import { View, Text, SafeAreaView, TextInput, FlatList } from 'react-native';

import styles from './Style'
import products_data from './data.json'

import Header from './Header'
import Card from './Card'


const PatikaShop = () => {
    return (
        <SafeAreaView style={styles.container}>

            <Header/>

            <FlatList
                numColumns={2}
                columnWrapperStyle={styles.row}
                // horizontal
                // columnWrapper={true}
                // keyExtractor={item=> item.id.toString()}
                data={products_data}
                renderItem={({ item }) => {
                    return (<Card key={item.id.toString()} product={item}/>)
                }}

            />

        </SafeAreaView>
    )
}

export default PatikaShop;
