import Tabs from "@/components/Tabs";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { useGetWeather } from "@/hooks/useGetWeather";
import ErrorItem from "@/components/ErrorItem";

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

  if(weather && weather.list && !loading){
    return (
      <Tabs weather={weather}/>
    );
  }


  return(
    <View style={container}>
      {error? (
        <ErrorItem/>
      ):(
        <ActivityIndicator size="large" color="blue"/>
      )}
    </View>
  )



}


