import React, { Component } from 'react';
import { Picker, StyleSheet } from 'react-native';

class Operacao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operacao: '',
    };
  }

  render() {
    const { principal } = estilos;
  
    return (
      <Picker
        style={principal}
        selectedValue={this.state.operacao}
        onValuechange={operacao => this.setState({ operacao })}
      >
        <Picker.Item label='Soma' value='soma' />
        <Picker.Item label='Subtração' value='subtracao' />
        <Picker.Item label='Multiplicação' value='multiplicacao' />
        <Picker.Item label='Divisão' value='divisao' />
      </Picker>
    );
  }
}

const estilos = StyleSheet.create({
  principal: {
    marginTop: 15,
    marginBottom: 15,
  }, 
});

export default Operacao;
