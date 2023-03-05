import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState, useEffect} from "react"


export const SearchButton = () => {
    const [isSearching, setIsSearching ] = useState (false)

    const handlClick = async () => {
        setIsSearching(true);
        setIsSearching(false);
    };
return (
    <Button
    disabled = {isSearching}
    onClick ={ handlClick()}
    className= {`button &{isSearching ? "searching" : ""`}
   > 
   
   <Text>{isSearching ? "Searching" : "Search" } </Text>


    </Button>
);
};


const styles = StyleSheet.create({
  button: {
  
    overflow: 'hidden',
    
    
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    height: 72,
    width: 200,
    border: 0,
    borderRadius: 10,
    backgroundColor: "blue"



  }
  });