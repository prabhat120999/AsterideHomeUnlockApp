import React, { useState } from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

const UnlockButton = ({ isWithinRange, onUnlock }) => {
  const [loading, setLoading] = useState(false);

  const handlePress = async () => {
    setLoading(true);
    try {
      await onUnlock();
      Alert.alert('Success', 'Home has been unlocked!');
    } catch (error) {
      Alert.alert('Error', 'Failed to unlock the home.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title={loading ? "Unlocking..." : "Unlock"}
        onPress={handlePress}
        disabled={!isWithinRange || loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default UnlockButton;
