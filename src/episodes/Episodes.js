import React from 'react'
import { View, FlatList, Text } from 'react-native' 
import Item from '../common/components/Item'
import { connect } from 'react-redux'

const Episodes = ({ episodes }) => (
    <View>
        <FlatList 
            data={episodes} 
            ListEmptyComponent={() => <Text style={{padding: 20}}>Loading ...</Text>}
            ItemSeparatorComponent={() => <View style={{borderTopWidth: 1, borderColor: '#eaeaea'}}></View>}
            keyExtractor={item => item.id.toString()} 
            renderItem={ ({item}) => (
            <Item id={item.id} title={`${item.episode}: ${item.name}`} />
        ) } />
    </View>
)

const mapStateToProps = state => {
    return {
        episodes: state.episodes
    }
}

export default connect(mapStateToProps, null)(Episodes)