import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'


const Home = ({ navigation, route }) => {

    const user = route.params.user
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Home</Text>
            <Button title="Go Back" onPress={() => navigation.goBack()}></Button>

            <View style={styles.inner_container}>

                <Text style={styles.user_text}>
                    <Text style={styles.inner_text}>Name : </Text>
                    {user.name}
                </Text>

                <Text style={styles.user_text}>
                    <Text style={styles.inner_text}>Surname : </Text>
                    {user.surname}
                </Text>

                <Text style={styles.user_text}>
                    <Text style={styles.inner_text}>Email : </Text>
                    {user.email}
                </Text>

                <Text style={styles.user_text}>
                    <Text style={styles.inner_text}>Age : </Text>
                    {user.age}
                </Text>

            </View>

        </View>
    )
}

export default Home


const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#6d006d',
        flex: 1,
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        paddingBottom: 20,
        color: 'white',
    },
    inner_container: {
        paddingTop: 30,
    },
    user_text: {
        color: 'white',
        padding: 5,
        marginBottom:10,
        borderWidth: 1,
        borderColor: '#aaa',
    },
    inner_text:{
        color: '#888',
        width:300,
        marginRight:10,
    },
})