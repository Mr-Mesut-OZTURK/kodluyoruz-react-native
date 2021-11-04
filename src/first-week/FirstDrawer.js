import React from 'react'
import { Text, View, Button } from 'react-native'

// Apps
import CardRouter from './lesson-1(basic-card)/CardRouter'
import NewsApp from "./newsapp/NewsApp"
import PatikaShop from "./patika-shop/PatikaShop"
import MusicApp from "./music-app/MusicApp"
import TodoApp from './todo-app/TodoApp'

// DRAWER
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

// Home page
const Home = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text>Merhaba</Text>
            <Button
                title="First Drawer"
            />

        </View>
    )
}


const FirstDrawer = () => {
    return (
        <>
            <Drawer.Navigator>
            
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="CardRouter" component={CardRouter} />
                <Drawer.Screen name="NewsApp" component={NewsApp} />
                <Drawer.Screen name="PatikaShop" component={PatikaShop} />
                <Drawer.Screen name="MusicApp" component={MusicApp} />
                <Drawer.Screen name="TodoApp" component={TodoApp} />

            </Drawer.Navigator>
        </>
    )
}

export default FirstDrawer
