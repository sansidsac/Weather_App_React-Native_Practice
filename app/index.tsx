import { Text, View, SafeAreaView, StyleSheet } from "react-native";

const styles=StyleSheet.create({
  container:{
    backgroundColor:"pink",
    flex:1,
    alignItems:"center",
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
    alignItems:"flex-start"
  },
  description:{
    fontSize:48
  },
  message:{
    fontSize:30
  }
})

export default function Index() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
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
