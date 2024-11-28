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


interface WeatherItem {
  dt_txt: string;
  main: {
    temp_max: number;
    temp_min: number;
  };
  weather: {
    main: 'Thunderstorm' | 'Drizzle' | 'Rain' | 'Snow' | 'Clear' | 'Clouds' | 'Haze' | 'Mist';
  }[];
}

interface UpcominWeatherProps {
  weatherData: WeatherItem[];
}

export const UpcominWeather = ({ weatherData }: UpcominWeatherProps) => {

  const renderItem = ({ item }: { item: WeatherItem }) => (
    <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />
  )

  const { container, heading, image } = styles

  return (
    <SafeAreaView style={container}>
        <ImageBackground source={require('../assets/images/clouds.jpg')} style={image}>
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item)=>item.dt_txt}
        />
        </ImageBackground>
    </SafeAreaView>
  )
}
