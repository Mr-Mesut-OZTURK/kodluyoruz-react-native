import React from 'react'
import { View, Text, Button } from 'react-native'

const Home = ({ navigation  }) => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text>Merhaba</Text>
            <Button
                title="Go To Card App"
                onPress={() => navigation.navigate("CardApp")}
            />

        </View>
    )

}

export default Home
