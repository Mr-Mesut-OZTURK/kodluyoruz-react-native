import React from 'react';
import { View, Text, Button } from 'react-native';

import FitnessAppRouter from './kebap-fitness-app/FitnessAppRouter'
import FetchApiApp from './fetch-api-first/FetchApiApp'
import DukkanRouter from './dukkan-app/DukkanRouter';
import TarifkaRouter from './tarifka/TarifkaRouter'

import { createDrawerNavigator } from '@react-navigation/drawer'
const Drawer = createDrawerNavigator();


const Home = () => {
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text>Merhaba</Text>
            <Button
                title="Second Drawer"
            />

        </View>
    )
}


const SecondDrawer = () => {

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Kebab Fitness" component={FitnessAppRouter} />
            <Drawer.Screen name="First FetchApiApp" component={FetchApiApp} />
            <Drawer.Screen name="DÜKKAN" component={DukkanRouter} />
            <Drawer.Screen name="Tarifka" component={TarifkaRouter} />
        </Drawer.Navigator>
    )
}

export default SecondDrawer;