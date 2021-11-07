import React from 'react'

import Products from './pages/product'
import Detail from './pages/detail'



import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

const DukkanRouter = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name="Home" component={Products} />
            <Stack.Screen name="Detail" component={Detail} />

        </Stack.Navigator>
    )
}

export default DukkanRouter
