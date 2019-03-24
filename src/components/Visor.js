import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Visor = () => {
  const { principal } = estilos;
  
  return (
    <View>
      <TextInput
        style={principal}
        placeholder='Resultado'
        editable={false}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  principal: {
    height: 100,
    fontSize: 30,
  },
});

export default Visor;
