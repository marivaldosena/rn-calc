import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cabecalho = () => {
  const { principal, texto } = estilos;

  return (
    <View style={principal}>
      <Text style={texto}>Calculadora 1.0</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  principal: {
    backgroundColor: '#2196f3',
    padding: 10,
    alignItems: 'center',
  },
  texto: {
    fontSize: 25,
    color: '#fff',
  }
});

export default Cabecalho;

