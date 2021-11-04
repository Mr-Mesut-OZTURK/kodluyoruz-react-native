import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './Style'

const Header = () => {
    return (
        <View>
            <Text style={styles.main_title}>PATIKASTORE</Text>
            <TextInput
                style={styles.input}
                placeholder="Ara..."
            />
        </View>
    )
}

export default Header
