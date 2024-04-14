import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';


const Tabs = ({items}) => {
  const [index, setIndex] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        {items.map((tab, i) => {
          const active = index === i;
          return (
            <TouchableOpacity
              key={i}
              onPress={() => setIndex(i)}
              style={styles.tab}>
              
              <Text style={active ? styles.activeTabText : styles.tabText}>
                {tab.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingBottom: 18,
  },
  tab: {
    marginLeft: 18,
  },
  tabText: {
    color: "#8b8989",
  },
  activeTabText: {
    color: "#070f18",
  },
  dot: {
    position: 'absolute',
    top: 5,
    left: -10,
    width: 6,
    height: 6,
    backgroundColor: "#070f18",
    borderRadius: 16,
  },
});

export default Tabs;