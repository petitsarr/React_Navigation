import { StyleSheet, Text, View ,FlatList ,Pressable, ListRenderItem } from 'react-native' 
import {useNavigation} from "@react-navigation/native"  

import {HomeScreenNavigationProp} from "../navigation/types"
import React from 'react'

const DATA = [
    {
      id: 1,
      name: 'Luke Skywalker',
      birth_year: '19BBY',
    },
    {
      id: 2,
      name: 'C-3PO',
      birth_year: '112BBY',
    },
    {
      id: 3,
      name: 'R2-D2',
      birth_year: '33BBY',
    },
    {
      id: 4,
      name: 'Darth Vader',
      birth_year: '41.9BBY',
    },
    {
      id: 5,
      name: 'Leia Organa',
      birth_year: '19BBY',
    },
  ];  

   


const HomeScreen = () => {  

// la prop onPress sur le composant Pressable est utilisé pour 
//transmettre le name et birthYear  à l'ecran DetailsScreen en tant que paramètres de route .

// Utilisation de HomeScreenNavigationProp pour annoter le hook useNavigation
    const navigation = useNavigation<HomeScreenNavigationProp>() 

    const renderItem : ListRenderItem<{
        id: number;
        name: string;
        birth_year: string;
}>  =   ({ item }) => {
    return (
        <Pressable onPress={()=>{
            navigation.navigate("Details",{
                name:item.name,
                birth_year:item.birth_year,
            })
        }}>
           
    
                    <Text style ={styles.styleName} >{item.name}</Text>
                    <View
                        style={{
                            borderWidth: StyleSheet.hairlineWidth,
                            borderColor: '#ccc',
                        }}
    />
        </Pressable>
    );
};

  return (
    <View style= {styles.container}> 
        <Pressable
              onPress={() => navigation.navigate('Feed')}
              style={{
                padding: 8,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: 'dodgerblue',
                margin: 20,
                alignItems: 'center',
              }}
            >
             <Text style={{ fontSize: 16, fontWeight: '600' }}>Go to Feed screen</Text>
      </Pressable>
      <FlatList   

      data={DATA}  

      renderItem= {renderItem}  


      />
    </View>
  )
}  

const styles = StyleSheet.create({
    container : {
        flex : 1, 
        paddingTop : 10
    } ,
    styleName : {
        fontSize : 18  ,
        paddingHorizontal : 12  ,
        paddingVertical : 12

    }
})

export default HomeScreen

