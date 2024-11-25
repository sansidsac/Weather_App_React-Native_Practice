import React from 'react'
import {View, Text} from 'react-native'

interface RowTextProps {
  messageOne: string;
  messageTwo: string;
  containerStyles?: object;
  messageOneStyles?: object;
  messageTwoStyles?: object;
}

const RowText: React.FC<RowTextProps> = (props) => {
    const {messageOne, messageTwo, containerStyles, messageOneStyles, messageTwoStyles} = props
  return (
        <View style={containerStyles}>
          <Text style={messageOneStyles}>{messageOne}</Text>
          <Text style={messageTwoStyles}>{messageTwo}</Text>
        </View>
  )
}

export default RowText