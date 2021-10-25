import React from 'react'
import { View, Text, SafeAreaView, TextInput, FlatList } from 'react-native';

import styles from './Style'
import products_data from './data.json'



const PatikaShop = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.main_title}>Patika Shop</Text>
                <TextInput
                style={styles.input}
                    placeholder="Patika Shop"
                />
            </View>

            <FlatList

                data={products_data}
                renderItem={({item})=> {
                    return (<Text>{item.title}</Text>)
                }}

            />

        </SafeAreaView>
    )
}

export default PatikaShop;
