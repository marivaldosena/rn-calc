import React from 'react';
import { View, StyleSheet } from 'react-native';

import Numero from './Numero';

const Entrada = () => {
  const { principal } = estilos;

  return (
    <View style={principal}>
      <Numero />
      <Numero />
    </View>
  );
};

const estilos = StyleSheet.create({
  principal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Entrada;
