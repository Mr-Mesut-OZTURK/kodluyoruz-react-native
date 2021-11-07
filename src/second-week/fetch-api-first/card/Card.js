import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Card = ({ user }) => {
    return (
        <View style={styles.container}>

            <Text style={styles.username}>{user.username}</Text>

            <View style={styles.inner_container} >
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.email}>{user.email}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#d39d9d',
        padding: 15,
        backgroundColor: '#c7bf90'
    },
    username: {
        color: 'black',
        fontSize: 18,
        flex: 1,
    },
    inner_container: {
        flexDirection: 'row',
    
    },
    name: {},
    email: {
        flex: 1,
        textAlign: 'right',
        fontSize: 12,
        color: '#571f05',
    },
})

export default Card
