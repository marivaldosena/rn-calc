import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Numero = () => (
  <TextInput style={estilos.principal} />
);

const estilos = StyleSheet.create({
  principal: {
    width: 140,
    height: 80,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Numero;
