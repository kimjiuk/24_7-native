import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function SitUp() {
  return (
    <View style={styles.container}>
      <Text>SitUp Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});