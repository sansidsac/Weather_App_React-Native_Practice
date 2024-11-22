import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, View, StatusBar, ImageBackground } from 'react-native'
import { Feather } from '@expo/vector-icons'

const styles=StyleSheet.create({
  container:{
    flex:1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue'
  },
  item:{
    backgroundColor: 'pink',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5
  },
  temp:{
    fontSize: 15,
    color: 'white'
  },
  date:{
    fontSize: 12,
    color: 'black'
  },
  image:{
    flex: 1,
  }
})

const DATA=[
  {
    "dt_txt": "2022-08-30 15:00:00",
    "main": {
      "temp_max": 297.87,
      "temp_min": 296.76,
    },
    "weather": [
      {
        "main": "Rain",
      }
    ],
  },
  {
    "dt_txt": "2022-08-30 16:00:00",
    "main": {
      "temp_max": 297.87,
      "temp_min": 296.76,
    },
    "weather": [
      {
        "main": "Rain",
      }
    ],    
  },
  {
    "dt_txt": "2022-08-30 17:00:00",
    "main": {
      "temp_max": 297.87,
      "temp_min": 296.76,
    },
    "weather": [
      {
        "main": "Rain",
      }
    ],
  }
]

interface ItemProps {
  dt_txt: string;
  min: number;
  max: number;
  condition: string;
}

const Item = (props: ItemProps) => {
  const {dt_txt, min, max, condition}=props
  return(
    <View style={styles.item}>
      <Feather name="cloud" size={50} color="black" />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  )
}

export const UpcominWeather = () => {

  interface WeatherItem {
    dt_txt: string;
    main: {
      temp_max: number;
      temp_min: number;
    };
    weather: {
      main: string;
    }[];
  }

  const renderItem = ({ item }: { item: WeatherItem }) => (
    <Item condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />
  )

  return (
    <SafeAreaView style={styles.container}>
        <Text>Upcoming Weather</Text>
        <ImageBackground source={require('../assets/images/clouds.jpg')} style={styles.image}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item)=>item.dt_txt}
        />
        </ImageBackground>
    </SafeAreaView>
  )
}
