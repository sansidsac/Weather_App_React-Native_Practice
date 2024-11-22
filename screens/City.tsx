import React from 'react'
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View } from 'react-native'
import IconText from '@/components/IconText'

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0,
    },
    imageLayout:{
        flex:1,
        resizeMode: "cover",
    },
    cityName:{
        fontSize: 40,
    },
    countryName:{
        fontSize: 30,
        color: 'black'
    },
    cityText:{
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white',
        padding: 10
    },
    popWrapper:{
        justifyContent: 'center',
        marginTop: 30
    },
    popText:{
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
    },
    riseSetWrapper:{
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText:{
        fontSize: 20,
        color: 'white',
    },
    rowLayout:{
        flexDirection: 'row',
        alignItems: 'center',
    }
})
const City = () => {

    const {container, imageLayout, cityName, countryName, cityText, popWrapper, popText, riseSetWrapper, riseSetText, rowLayout}=styles

  return (
    <SafeAreaView style={container}>
        <ImageBackground source={require('../assets/images/city-bg.jpg')} style={imageLayout}>
            <Text style={[cityName, cityText]}>London</Text>
            <Text style={[cityText, countryName ]}>UK</Text>
            <View style={[popWrapper, rowLayout]}>
                <IconText iconName={'user'} iconColor={'red'} bodyText={'8000'} bodyTextStyles={popText}/>
            </View>
            <View style={[riseSetWrapper, rowLayout]}>
                <IconText iconName={'sunrise'} iconColor={'white'} bodyText={'10:45:58am'} bodyTextStyles={riseSetText}/>
                <IconText iconName={'sunset'} iconColor={'white'} bodyText={'17:28:23pm'} bodyTextStyles={riseSetText}/>
            </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

export default City