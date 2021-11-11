import React from 'react'

import Categories from './pages/categories'
import Meals from './pages/meals'
import Detail from './pages/detail'

import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

const TarifkaRouter = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name="Home" component={Categories}/>
            <Stack.Screen name="Meals" component={Meals}/>
            <Stack.Screen name="Detail" component={Detail}/>
            
        </Stack.Navigator>
    )
}

export default TarifkaRouter
