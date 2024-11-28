import React from 'react'
import { SafeAreaView, StyleSheet, FlatList, StatusBar, ImageBackground } from 'react-native'
import ListItem from '../components/ListItem'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

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

interface UpcomingWeatherProps {
  weatherData: WeatherItem[];
}

export const UpcomingWeather = ({ weatherData }: UpcomingWeatherProps) => {

  const renderItem = ({ item }: { item: WeatherItem }) => (
    <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />
  )

  const { container, image } = styles

  return (
    // <ImageBackground source={require('../assets/images/clouds.jpg')} style={image}>
      <SafeAreaView style={container}>
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item)=>item.dt_txt}
        />
      </SafeAreaView>
    // </ImageBackground>
  )
}
