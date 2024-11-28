import React from 'react'
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View } from 'react-native'
import IconText from '@/components/IconText'
import moment from 'moment'

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingTop: 10,
        backgroundColor: '#1E90FF',
    },
    imageLayout:{
        flex:1,
        resizeMode: "cover",
        justifyContent: 'center',
    },
    cityName:{
        fontSize: 40,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    countryName:{
        fontSize: 30,
        color: '#FFFFFF',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    cityText:{
        marginVertical: 10,
    },
    popWrapper:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    popText:{
        fontSize: 20,
        color: '#FFFFFF',
        marginLeft: 10,
    },
    riseSetWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    riseSetText:{
        fontSize: 20,
        color: '#FFFFFF',
    },
    rowLayout:{
        flexDirection: 'row',
        alignItems: 'center',
    }
})
interface WeatherData {
    name: string;
    country: string;
    population: number;
    sunrise: number;
    sunset: number;
}

const City: React.FC<{ weatherData: WeatherData }> = ({ weatherData }) => {

    const {container, imageLayout, cityName, countryName, cityText, popWrapper, popText, riseSetWrapper, riseSetText, rowLayout}=styles

    const {name, country, population, sunrise, sunset}=weatherData

  return (
    // <ImageBackground source={require('../assets/images/city-bg.jpg')} style={imageLayout}>
        <SafeAreaView style={container}>
            <Text style={[cityName, cityText]}>{name}</Text>
            <Text style={[cityText, countryName ]}>{country}</Text>
            <View style={[popWrapper, rowLayout]}>
                <IconText iconName={'user'} iconColor={'red'} bodyText={`Population: ${population}`} bodyTextStyles={popText}/>
            </View>
            <View style={[riseSetWrapper, rowLayout]}>
                <IconText iconName={'sunrise'} iconColor={'orange'} bodyText={moment(sunrise).format('h:mm:ss a')} bodyTextStyles={riseSetText}/>
                <IconText iconName={'sunset'} iconColor={'orange'} bodyText={moment(sunset).format('h:mm:ss a')} bodyTextStyles={riseSetText}/>
            </View>
        </SafeAreaView>
    // </ImageBackground>
  )
}

export default City