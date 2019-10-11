import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import style from './itemStyles'

export default Item = ({ title }) => (
    <TouchableOpacity onPress={() => {}}>
        <Text style={style.item}>{title}</Text>
    </TouchableOpacity>
)