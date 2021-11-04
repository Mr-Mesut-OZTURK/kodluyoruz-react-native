import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, TextInput, FlatList, StyleSheet } from 'react-native'

import data from './music-data.json'
import Card from './card/Card'



const MusicApp = () => {

    // const [fullList, setFullList] = useState([])
    const [search, setSearch] = useState("")
    const [list, setList] = useState([])

    useEffect(() => {
        setList(data)
    }, [])

    useEffect(() =>{
        console.log()
        search === "" ? setList(data) : setList(data.filter(item =>{
            return item.title.toLocaleLowerCase().search(search.toLocaleLowerCase())!== -1
        }))
    }, [search])

    const showCards = ({ item }) => {
        return (<Card song={item} />)
    }

    const seperator = () => {
        return (<View style={styles.seperator} />)
    }

    return (
        <SafeAreaView>

            <TextInput
                style={styles.search}
                placeholder="Ara..."
                value={search}
                onChangeText={setSearch}
            />

            <FlatList
                // keyExtractor={item => item.id.toString()}
                data={list}
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
    seperator: {
        borderWidth: 1,
        borderColor: '#ccc'
    },
    search: {
        margin: 10,
        backgroundColor: '#ccc',
        borderRadius: 5,
        paddingLeft: 20,

    }
})
