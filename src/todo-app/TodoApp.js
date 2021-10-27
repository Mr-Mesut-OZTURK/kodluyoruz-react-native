import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, StyleSheet, Dimensions, FlatList } from 'react-native'

const TodoApp = () => {

    const [list, setList] = useState([])

    const showList = ({item}) => {
        
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Todo App</Text>
                <Text style={styles.score}>0</Text>
            </View>

            <FlatList
                data={list}
                renderItem={showList}
            />
        </SafeAreaView>
    )
}

export default TodoApp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        padding: 10,
        paddingTop: 30,
    },
    header: {
        width: Dimensions.get('window').width-20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        fontSize: 30,
        color: 'orange',
    },
    score: {
        fontSize: 30,
        color: 'orange',
    }
})
