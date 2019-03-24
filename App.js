import React from 'react';
import { StyleSheet, View } from 'react-native';

import {
  Topo,
  Resultado,
  Painel
} from './src/components';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Topo />
        <Resultado />
        <Painel />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
