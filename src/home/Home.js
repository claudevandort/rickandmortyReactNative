import React from 'react'
import { View, FlatList, Text } from 'react-native'
import homeData from './homeData'
import Item from '../common/components/Item'

const Home = () => (
    <View>
        <FlatList 
            data={homeData} 
            ListEmptyComponent={() => <Text style={{padding: 20}}>Home :)</Text>}
            ItemSeparatorComponent={() => <View style={{borderTopWidth: 1, borderColor: '#eaeaea'}}></View>}
            keyExtractor={item => item.id} 
            renderItem={ ({item}) => (
            <Item id={item.id} title={item.title} />
        ) } />
    </View>
)

export default Home