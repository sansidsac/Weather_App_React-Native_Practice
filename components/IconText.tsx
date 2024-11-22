import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons'

const styles=StyleSheet.create({
    textTheme:{
        fontWeight: 'bold',
    },
    container:{
        alignItems: 'center',
    }
})

interface IconTextProps {
    iconName: keyof typeof Feather.glyphMap;
    iconColor: string;
    bodyText: string;
    bodyTextStyles?: object;
}

const IconText = (props: IconTextProps) => {
    const {iconName, iconColor, bodyText, bodyTextStyles}=props
    const {textTheme, container}=styles
    return (
        <View style={container}>
            <Feather name={iconName} size={50} color={iconColor}/>
            <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
        </View>
    )
}

export default IconText