import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { icons } from '../constants'
import { TextInput } from 'react-native'
import { Image } from 'react-native'
import { useState } from 'react'

const FormField = ({ title,
    value,
    placeholder,
    handleChangeText,
    otherStyles,
    ...props }) => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-600 font-pmedium">{title}</Text>

      <View className="w-full h-16 px-4 bg-white rounded-2xl border-2 border-gray-700 focus:border-secondary flex flex-row items-center">
        <TextInput
          className="flex-1 text-gray-700 font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField