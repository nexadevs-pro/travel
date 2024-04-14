import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import destinationCategores from '../lib/constants'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const CategoryButton = () => {
    const scrollRef = useRef(null);
  const itemRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectCategory = (index) => {
    const selected = itemRef.current[index];
    setActiveIndex(index);

    selected?.measure((x) => {
      scrollRef.current?.scrollTo({ x: x, y: 0, animated: true });
    });

  };
  return (
    <View>
    <ScrollView ref={scrollRef} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
        gap: 10,
        paddingBottom: 10,
        paddingVertical: 10,
    }}>
        {destinationCategores.map((item, index) => (
            <TouchableOpacity key={index} className={`flex-row items-center bg-white py-3 px-6 rounded-lg shadow-md ${activeIndex == index ? "bg-indigo-600" : ""} `  } ref={(el) => (itemRef.current[index] = el)} onPress={() => handleSelectCategory(index)}>
                <MaterialCommunityIcons color={activeIndex == index ? "white" : "black"} name={item.iconName} size={20}  />
                <Text className={`ml-2 ${activeIndex == index ? "text-white" : ""}`}>{item.title}</Text>
            </TouchableOpacity>
        ))}
    </ScrollView>
    </View>
  )
}

export default CategoryButton