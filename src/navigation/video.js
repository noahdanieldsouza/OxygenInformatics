import React from "react"
import { StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView } from "react-native"
import { Card } from "react-native-paper"

DATA = [

  //will be video imports
    {
        id: 0,
        name: "Video0"
    },
    {
        id: 1,
        name: "Video1"
    },
    {
        id: 2,
        name: "Video2"
    }
]
const Tutorial = () => {

    return(
        
        <>
        <SafeAreaView style={styles.container}>
       
   
    </SafeAreaView>
    <FlatList
        data={DATA}
        renderItem={({item}) => <Card>
            <Card.Title title = {item.name}/>
        </Card>}
        keyExtractor={item => item.id}
      />
     </>
    
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    
  
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  

export default Tutorial
