import CurrentWeather from "@/screens/CurrentWeather";
import City from "@/screens/City";
import { UpcominWeather } from "@/screens/UpcominWeather";
import {View, StyleSheet} from "react-native";

const styles=StyleSheet.create({
  container:{
    flex:1,
  }
})

export default function Index() {
  return (
    <>
      <View style={styles.container}>
        <CurrentWeather />
      </View>
    </>
  );
}


