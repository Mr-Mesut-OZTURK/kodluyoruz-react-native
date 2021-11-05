import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'

import Home from './pages/Home'
import SignIn from './pages/SignIn'

import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const FitnessAppRouter = () => {
    return (

        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={SignIn} />
            <Stack.Screen name="Fitness" component={Home} />
        </Stack.Navigator>

    )
}

export default FitnessAppRouter
