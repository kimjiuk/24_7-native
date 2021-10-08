import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Squat() {
  return (
    <View style={styles.container}>
      <Text>Squat Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});