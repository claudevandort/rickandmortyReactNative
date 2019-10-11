import React from 'react'
import { TouchableNativeFeedback, View, Text } from 'react-native'
import style from './itemStyles'

export default Item = ({ title }) => (
    <TouchableNativeFeedback onPress={() => {}}>
      <View>
        <Text style={style.item}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
)