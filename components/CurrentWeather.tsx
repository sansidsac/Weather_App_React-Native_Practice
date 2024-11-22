import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import {Feather} from '@expo/vector-icons';

const styles=StyleSheet.create({
  container:{
    backgroundColor:"pink",
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  wrapper:{
    flex:1,
    backgroundColor:"lightblue",
  },
  temp:{
    color:"black",
    fontSize:48
  },
  feels:{
    color:"black",
    fontSize:30
  },
  highLow:{
    color:"black",
    fontSize: 20
  },
  highLowWrapper:{
    flexDirection:"row",
  },
  bodyWrapper:{
    justifyContent:"flex-end",
    alignItems:"flex-start",
    paddingLeft:25,
    marginBottom:40
  },
  description:{
    fontSize:48
  },
  message:{
    fontSize:30
  }
})

export default function CurrentWeather() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={50} color="yellow" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8</Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It's Sunny</Text>
        <Text style={styles.message}>It's Perfect T-Shirt Weather</Text>
      </View>
    </SafeAreaView>
  );
}
