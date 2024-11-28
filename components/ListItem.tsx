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
        fontSize: 15,
        color: 'white'
      },
      date:{
        fontSize: 12,
        color: 'black'
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
      dateTextWrapper:{
        flexDirection: 'column',
      }
})




const {temp, date, item, dateTextWrapper}=styles

const ListItem = (props: ItemProps) => {
    const {dt_txt, min, max, condition}=props
    return(
      <View style={item}>
        <Feather name={weatherType[condition]?.icon as keyof typeof Feather.glyphMap} size={50} color="black" />
        <View style={dateTextWrapper}>
          <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
          <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
        </View>
        <Text style={temp}>{`${Math.round(min)}° / ${Math.round(max)}°`}</Text>
      </View>
    )
}

export default ListItem