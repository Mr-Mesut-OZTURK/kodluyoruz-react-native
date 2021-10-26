import React from 'react'
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native'

import data from './music-data.json'
import Card from './card/Card'



const MusicApp = () => {

    const showCards = () => {
        return (
            <Card />
        )
    }

    return (
        <SafeAreaView>
            
            <FlatList
                data={data}
                renderItem={showCards}
            />

        </SafeAreaView>
    )
}

export default MusicApp

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd'
    }
})
