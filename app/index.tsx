import CurrentWeather from "@/components/CurrentWeather";
import { UpcominWeather } from "@/components/UpcominWeather";
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
        <UpcominWeather />
      </View>
    </>
  );
}


