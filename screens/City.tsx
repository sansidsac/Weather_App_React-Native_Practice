import React from 'react'
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    popText:{
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
        fontWeight: 'bold'
    },
    riseSetWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
})
const City = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../assets/images/city-bg.jpg')} style={styles.imageLayout}>
            <Text style={[styles.cityName, styles.cityText]}>London</Text>
            <Text style={[styles.cityText, styles.countryName ]}>UK</Text>
            <View style={styles.popWrapper}>
                <Feather name={'user'} size={50} color={'red'}/>
                <Text style={styles.popText}>11000</Text>
            </View>
            <View style={styles.riseSetWrapper}>
                <Feather name={'sunrise'} size={50} color={'white'}/>
                <Text style={styles.riseSetText}>10:45:58am</Text>
                <Feather name={'sunset'} size={50} color={'white'}/>
                <Text style={styles.riseSetText}>17:28:23pm</Text>
            </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

export default City