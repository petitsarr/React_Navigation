import { StyleSheet, Text, View } from 'react-native'
import React from 'react'  
import HomeScreen from '../screens/HomeScreen' ;
import DetailsScreen from '../screens/DetailsScreen';
import {createNativeStackNavigator} from "@react-navigation/native-stack"  

//Après avoir créé les mappages, 
 //vous devez en informer le navigateur de pile
 //Il est passé comme générique à la fonction createNativeStackNavigator
import {HomeStackNavigatorParamList} from "./types" 


const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>() 

//Le navigateur HomeStack attend un type HomeStackNavigatorParamList
// avec Home ou Details.
const HomeStackNavigator = () => { 

// Notez que la prop name sur le composant HomeStack.Screen 
// est utilisée pour définir le nom de la route 

// Par exemple, le nom de route DetailsScreen est défini comme Details  

/*
Chaque fois que vous naviguez sur l'écran Détails, 
le nom de la route est utilisé pour
 identifier l'écran dans la méthode 
 navigation.navigate()ou navigation.push().
*/

  return (
    <HomeStack.Navigator>
        <HomeStack.Screen name= "Home" component = {HomeScreen}/> 
        <HomeStack.Screen name= "Details" component = {DetailsScreen}/>
    </HomeStack.Navigator>
  )
} 

const styles = StyleSheet.create({})

export default HomeStackNavigator

