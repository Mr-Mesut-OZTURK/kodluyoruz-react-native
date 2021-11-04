import React from 'react'


import CardApp from './CardApp'
import Home from './Home'

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator ();

const CardRouter = () => {
    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>

                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="CardApp" component={CardApp} />

            </Stack.Navigator>
        </>
    )
}

export default CardRouter
