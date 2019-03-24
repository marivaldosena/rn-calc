import React from 'react';
import { Picker, StyleSheet } from 'react-native';

const Operacao = () => {
  const { principal } = estilos;

  return (
    <Picker style={principal}>
      <Picker.Item label='Soma' value='soma' />
      <Picker.Item label='Subtração' value='subtracao' />
      <Picker.Item label='Multiplicação' value='multiplicacao' />
      <Picker.Item label='Divisão' value='divisao' />
    </Picker>
  );
};

const estilos = StyleSheet.create({
  principal: {
    marginTop: 15,
    marginBottom: 15,
  }, 
});

export default Operacao;
