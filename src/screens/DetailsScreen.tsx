import { StyleSheet, Text, View } from 'react-native'
import React from 'react' 
import {useRoute} from "@react-navigation/native"

const DetailsScreen = () => {    

//Notez que le route.params 
//est utilisé pour lire les paramètres transmis depuis le HomeScreen.

    const route = useRoute() 
    const {name,birth_year} = route.params 
  return (
  
    <View style={{ flex: 1, paddingTop: 12, paddingHorizontal: 10 }}>
    <Text style={{ fontSize: 18, paddingBottom: 12 }}>Name: {name}</Text>
    <Text style={{ fontSize: 18 }}>Birth Year: {birth_year}</Text>
  </View>
  )
} 



export default DetailsScreen

