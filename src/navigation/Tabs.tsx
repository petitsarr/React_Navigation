import { StyleSheet, Text, View } from 'react-native' 
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs" 
import {BottomTabNavigatorParamList} from "./types"  
import FeedScreen from '../screens/FeedScreen' 
import SettingsScreen from '../screens/SettingsScreen'  
import { AntDesign } from '@expo/vector-icons';   
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 


import HomeStackNavigator from './HomeStack' 
import React from 'react'


const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>()

const BottomTabs = () => { 
  return (  
    <Tab.Navigator   
    screenOptions={({ route }) => ({
      tabBarIcon: () => {
      
        if (route.name === 'Home') {
          return <Entypo name="home" size={24} color="black" />
            
        } else if (route.name === 'Settings') {
          return <Ionicons name="settings" size={24} color="black" />
        } 
      
        else if (route.name === 'Feed') {
        return  <FontAwesome name="feed" size={24} color="black" />
        } 
        
      },
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'gray',
    })}
    >  

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

