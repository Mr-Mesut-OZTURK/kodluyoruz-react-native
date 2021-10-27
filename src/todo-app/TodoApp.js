import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, StyleSheet, Dimensions, FlatList } from 'react-native'

import Card from './components/Card';
import AddTodo from "./components/AddTodo";


const TodoApp = () => {

    const [text, setText] = useState("");
    const [list, setList] = useState(["Duygularım darmadağın..."])

    const handleLongPress = (todo) => {
        let newList = list.slice(0)
        const index = newList.indexOf(todo);
        
        if (index > -1) {
            newList.splice(index, 1);
            setList(newList)
        }
    }

    const showList = ({ item }) => {
        return (<Card
            todo={item}
            handleLongPress={handleLongPress}
        />)
    }

    const addTodoItem = () => {
        if(text !== "") {
            setList([text, ...list])
            setText("")
        }else {
            alert("Boş bırakmayınız!...")
        }
        
    }





    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerText}>Todo App</Text>
                <Text style={styles.score}>{list.length}</Text>
            </View>

            <FlatList
                keyExtractor={(item, index) => index}
                style={styles.list}
                data={list}
                renderItem={showList}
            />

            <AddTodo
                text={text}
                setText={setText}
                addTodoItem={addTodoItem}
            />

        </SafeAreaView>
    )
}

export default TodoApp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#102027',
        padding: 10,
        paddingTop: 30,
        paddingBottom: 50,
    },
    header: {
        width: Dimensions.get('window').width - 20,
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
    },
    list: {
        paddingTop: 30,
        paddingBottom: 30,
        // backgroundColor: 'yellow'
    }
})
