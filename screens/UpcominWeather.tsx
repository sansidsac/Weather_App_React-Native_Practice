import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, StatusBar, ImageBackground } from 'react-native'
import ListItem from '../components/ListItem'

const styles=StyleSheet.create({
  container:{
    flex:1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue'
  },
  heading:{
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    padding: 10
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
    <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />
  )

  const { container, heading, image } = styles

  return (
    <SafeAreaView style={container}>
        <ImageBackground source={require('../assets/images/clouds.jpg')} style={image}>
        <Text style={heading}>Upcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item)=>item.dt_txt}
        />
        </ImageBackground>
    </SafeAreaView>
  )
}
