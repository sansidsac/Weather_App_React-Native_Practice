import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'red'
    },
    errorMessage:{
        color: 'white',
        fontSize: 30,
        marginHorizontal: 10,
        textAlign: 'center'
    }
})

const ErrorItem = () => {

    const { container, errorMessage } = styles

  return (
    <View style={container}>
        <Text style={errorMessage}>Sorry something went wrong</Text>
        <Feather name="frown" size={100} color="white" />
    </View>
  )
}

export default ErrorItem