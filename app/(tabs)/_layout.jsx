import { Image, Text, View } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants';

const TabIcon = ({ icon, color, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image source={icon} resizeMode="contain" tintColor={color} className="w-6 h-6" />
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#6120F8',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
          borderTopWidth: 1,
          height: 65,
        }
      }}>
        <Tabs.Screen 
          name='home'
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            )
          }}
        />
      
        <Tabs.Screen 
          name='search'
          options={{
            title: "Search",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.search}
                color={color}
                name="Search"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen 
          name='profile'
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            )
          }}
        />
        </Tabs>
    </>
  )
}

export default TabsLayout
