import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import HomeCard from '../components/HomeCard';
import homesData from '../data/homes.json';

const HomeListScreen = ({ navigation }) => {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    setHomes(homesData);
  }, []);

  const renderItem = ({ item }) => (
    <HomeCard
      home={item}
      onPress={() => navigation.navigate('HomeDetail', { homeId: item.id })}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={homes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
    backgroundColor: '#f4f4f4',
  },
});

export default HomeListScreen;
