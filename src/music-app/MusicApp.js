import React from 'react'
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native'

import data from './music-data.json'
import Card from './card/Card'



const MusicApp = () => {

    const showCards = ({ item }) => {
        return (<Card song={item} />)
    }

    const seperator = () => {
        return (<View style={styles.seperator}/>)
    }

    return (
        <SafeAreaView>

            <FlatList
                // keyExtractor={item => item.id.toString()}
                data={data}
                renderItem={showCards}
                ItemSeparatorComponent={seperator}
            />

        </SafeAreaView>
    )
}

export default MusicApp

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        flex: 1,
    },
    seperator : {
        borderWidth: 1,
        borderColor: '#ccc'
    }
})
