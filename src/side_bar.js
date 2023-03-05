import React, {useState} from "react"
import { StyleSheet, Text, View } from 'react-native';

export const SideBar  = () => {

    const [isPressed, setIsPressed] = useState(false)

    return(
    <Text  >{isPressed ?"Noah": "Me" } </Text>
    )
}

const styles = StyleSheet.create({
    Text: {
      marginTop: 50,
      flexDirection: "row",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });