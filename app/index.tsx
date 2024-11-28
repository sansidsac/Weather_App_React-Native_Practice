import Tabs from "@/components/Tabs";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import Constants from 'expo-constants';
import { useGetWeather } from "@/hooks/useGetWeather";

const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})

export default function Index() {

  const [loading, error, weather] = useGetWeather();

  const { container } = styles;

  if(weather){
    console.log(weather)
    console.log(error)
    console.log(loading)
  }

  if(loading){
    return(
      <View style={container}>
        <ActivityIndicator size="large" color="blue"/>
      </View>
    )

  }


  return (
    <Tabs/>
  );
}


