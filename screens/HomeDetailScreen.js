import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';
import * as Notifications from 'expo-notifications';
import UnlockButton from '../components/UnlockButton';
import homesData from '../data/homes.json';

const HomeDetailScreen = ({ route }) => {
  const { homeId } = route.params;
  const [home, setHome] = useState(null);
  const [isWithinRange, setIsWithinRange] = useState(false);

  useEffect(() => {
    const fetchHome = async () => {
      const selectedHome = homesData.find((h) => h.id === homeId);
      setHome(selectedHome);
    };

    fetchHome();
  }, [homeId]);

  useEffect(() => {
    const checkLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }

      const { coords } = await Location.getCurrentPositionAsync({});
      const distance = Location.distanceBetween(
        coords.latitude,
        coords.longitude,
        home.latitude,
        home.longitude
      );

      console.log('User coordinates:', coords);
      console.log('Home coordinates:', { latitude: home.latitude, longitude: home.longitude });
      console.log('Calculated distance:', distance);

      setIsWithinRange(distance <= 30);

      if (distance <= 30) {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: 'User Near Home',
            body: `User is within 30m of ${home.address}.`,
          },
          trigger: null,
        });
      }
    };

    if (home) {
      checkLocation();
    }
  }, [home]);

  const handleUnlock = async () => {
    return new Promise((resolve) => {
      setTimeout(async () => {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: 'Home Unlocked',
            body: `The home at ${home.address} has been successfully unlocked.`,
          },
          trigger: null,
        });
        resolve();
      }, 1000);
    });
  };

  if (!home) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/home1.jpg')} style={styles.image} />
      <Text style={styles.address}>{home.address}</Text>
      <Text style={styles.description}>{home.description}</Text>
      <UnlockButton isWithinRange={isWithinRange} onUnlock={handleUnlock} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 8,
  },
  address: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default HomeDetailScreen;
