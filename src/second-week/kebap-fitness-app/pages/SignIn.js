import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, Alert } from 'react-native'

import Input from '../components/input/Input'


const SignIn = ({ navigation }) => {

    const [name, setOnChanceName] = useState("")
    const [surname, setOnChanceSurname] = useState("")
    const [email, setOnChanceEmail] = useState("")
    const [age, setOnChanceAge] = useState("")
    // const [user, setUser] = useState({})


    const handleSubmit = () => {
        if(!name || !surname || !email || !age){
            Alert.alert("Kebap Fitness Alert","Boş bırakmayınız!...")
        }else{
            const user = {
                name,
                surname,
                email,
                age
            }
            // setUser(user1)
            
            navigation.navigate('Fitness', {user})
        }
    }

    return (
        <View style={styles.container}>

            <Text style={styles.text}>Login</Text>

            <Input label="Name" placeholder="Please enter your name!.." onChangeText={setOnChanceName}/>
            <Input label="Surname" placeholder="Please enter your surname!.." onChangeText={setOnChanceSurname}/>
            <Input label="Email" placeholder="Please enter your email!.." onChangeText={setOnChanceEmail}/>
            <Input label="Age" placeholder="Please enter your age!.." onChangeText={setOnChanceAge}/>
            
            <Button style={styles.button} title="Login" onPress={handleSubmit}></Button>

        </View>
    )
}

export default SignIn


const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#6d006d',
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        
    },
    button: {
        marginTop: 20,
    },
})