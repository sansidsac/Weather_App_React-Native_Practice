import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '@/utilities/weatherType'
import moment from 'moment'

type WeatherCondition = keyof typeof weatherType;

interface ItemProps {
  dt_txt: string;
  min: number;
  max: number;
  condition: WeatherCondition;
}

const styles=StyleSheet.create({
    temp:{
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: 'bold',
      },
      date:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#02003a'
      },
      item:{
        backgroundColor: '#4682B4',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5, 
      },
      dateTextWrapper:{
        flexDirection: 'column',
        alignItems: 'flex-start'
      }
})




const {temp, date, item, dateTextWrapper}=styles

const ListItem = (props: ItemProps) => {
    const {dt_txt, min, max, condition}=props
    return(
      <View style={item}>
        <Feather name={weatherType[condition]?.icon as keyof typeof Feather.glyphMap} size={50} color='#ffffff' />
        <View style={dateTextWrapper}>
          <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
          <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
        </View>
        <Text style={temp}>{`${Math.round(min)}° / ${Math.round(max)}°`}</Text>
      </View>
    )
}

export default ListItem