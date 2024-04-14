import { useState } from "react";
import { router, usePathname } from "expo-router";
import { View, TouchableOpacity, Image, TextInput, Alert } from "react-native";

import { Ionicons } from '@expo/vector-icons'
import { icons } from "../constants";

const SearchInput = ({ initialQuery }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");

  return (
    <View className="flex flex-row items-center space-x-4 w-full h-16 px-4  rounded-2xl border-2 border-gray-500 focus:border-secondary">
      <TextInput
        className="text-base mt-0.5 text-primary flex-1 font-pregular"
        value={query}
        placeholder="Search"
        placeholderTextColor="#B0B0B4"
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {
          if (query === "")
            return Alert.alert(
              "Missing Query",
              "Please input something to search results across database"
            );

          if (pathname.startsWith("/search")) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
      <Ionicons name="search" size={24} color="#B0B0B4" />

        <View className="w-full ">

        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;