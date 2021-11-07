import React, { useState } from 'react'
import { Button, FlatList, SafeAreaView, View, StyleSheet, ActivityIndicator } from 'react-native'

import axios from 'axios'
import Card from './card/Card'

const URL = "https://jsonplaceholder.typicode.com/users"

const FetchApiApp = () => {


    const [loading, setLoading,] = useState(false)
    const [userList, setUserList,] = useState([])


    const fetchApi = async () => {
        setLoading(true)
        const response = await axios.get(URL)
        setLoading(false)
        setUserList(response.data)
    }

    const renderUserList = ({ item }) => (<Card user={item} />)

    const itemSeparator = (item) => <View style={{ height: 20 }} />

    if (loading) {
        return <ActivityIndicator
            style={styles.loader}
            size="large"
        />
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.button} >
            <Button title="Fetch" onPress={fetchApi}/>
            </View>

            <FlatList
            keyExtractor={(item, index) => index}
                ItemSeparatorComponent={itemSeparator}
                data={userList}
                renderItem={renderUserList}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
    },
    container: {
        padding: 20,
    },
    button: {
        marginBottom: 20,
    }
})

export default FetchApiApp
