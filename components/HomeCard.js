import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const HomeCard = ({ home, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>

      <View style={styles.card}>
        <Image source={require('../assets/home1.jpg')} style={styles.image} />
        <Text style={styles.address}>{home.address}</Text>
        <Text style={styles.description}>{home.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    backgroundColor: '#fff',
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  address: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default HomeCard;
