import { View, Text, FlatList, InputAccessoryView } from 'react-native'
import React from 'react'

const Trending = ({ posts }) => {
  return (
    <FlatList 
    data={posts} 
    keyExtractor={(item) => item.$id}
    renderItem={({ item }) => (
        <Text className='text-3xl text-primary'>
            {item.id}
        </Text>
    )} />
  )
}

export default Trending