//  TABBOTTOM ROUTER
import React from "react";
import { Text, View, Button } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FirstDrawer from './src/first-week/FirstDrawer'
import SecondDrawer from './src/second-week/SecondDrawer'


const Tab = createBottomTabNavigator()


const Home = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text style={{paddingBottom:20,}}>Welcome to</Text>
      <Button
        title="My First Native Nav"
      />

    </View>
  )
}


function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>

        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="FirstDrawer" component={FirstDrawer} />
        <Tab.Screen name="SecondDrawer" component={SecondDrawer} />

      </Tab.Navigator>
    </NavigationContainer>
  )

}


export default App