import { StyleSheet, Text, View } from 'react-native' 
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs" 
import {BottomTabNavigatorParamList} from "./types"  
import FeedScreen from '../screens/FeedScreen' 
import SettingsScreen from '../screens/SettingsScreen'  
import HomeStackNavigator from './HomeStack' 
import React from 'react'


const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>()

const BottomTabs = () => { 
  return (  
    <Tab.Navigator>  

        <Tab.Screen 
        name='Home' 
         component = {HomeStackNavigator}  
         options = {{headerShown : false}}
          /> 
        <Tab.Screen name = "Feed"  component ={FeedScreen} /> 
        <Tab.Screen name ="Settings" component = {SettingsScreen} />
    </Tab.Navigator>

  )
}

export default BottomTabs ;

