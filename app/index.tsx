import Tabs from "@/components/Tabs";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import * as Location from "expo-location";

const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})

export default function Index() {
  
  useEffect(()=>{
    (async()=>{
      let { status }=await Location.requestForegroundPermissionsAsync ()
      if(status !== "granted"){
        setError("Permission to access location was denied")
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })()
  },[])

  const [loading, setLoading] = useState(true);

  const [location, setLocation] = useState<Location.LocationObject | null>(null);

  const[error, setError]=useState<string | null>(null);

  const { container } = styles;

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


