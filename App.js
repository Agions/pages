/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Home from './src/Home';
const App: () => React$Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.item}>
        <Text>Hello World!</Text>
        <Home msg={'Hello'} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
  },
});
export default App;
