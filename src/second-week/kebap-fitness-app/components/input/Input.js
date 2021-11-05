import React from 'react'
import { View, TextInput, Text } from 'react-native'
import styles from './Input.style'


const Input = ({ label, placeholder, onChangeText }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}:</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
            />
        </View>
    )
}

export default Input
