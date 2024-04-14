import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../../components/SearchInput'
import Tabs from '../../components/Tabs'

const tabs = [
  {
    title: "All",
    contents: 
    () => ( 
    <View>
      <Text>All</Text>
    </View>)
  },
  {
    title: "Places",
    contents: () => ( <View><Text>Places</Text></View>)
  },
  {
    title: "Hotels",
    contents: () => ( <View><Text>Contents</Text></View>)
  }
]

const Search = () => {
  return (
    <SafeAreaView className="bg-white h-full">
        <ScrollView contentContainerStyle={{ height: '100%'}}>
          <View className="w-full flex mt-20  items-center h-full px-4">
            <SearchInput />
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
  
})