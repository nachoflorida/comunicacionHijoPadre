// Nif.js
import React, { Component } from 'react';
import { View, Text, TextInput, Keyboard, StyleSheet } from 'react-native';

const calculaLetraNif = (unDni) => {
  const arrayDeLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
  return arrayDeLetras[unDni % 23];
};

export default class Nif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elDNIintroducido: '',
      letraDNI: '',
    };
  }

  guardaDNI = (valor) => {
    if (valor.length === 8) {
      const letra = calculaLetraNif(valor);
      this.setState({ elDNIintroducido: valor, letraDNI: letra });
      Keyboard.dismiss();
      this.props.devuelveNif({ dni: valor, letra });
    } else {
      this.setState({ elDNIintroducido: '', letraDNI: '' });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>DNI:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe el DNI"
          placeholderTextColor="#ff0000"
          onChangeText={this.guardaDNI}
          maxLength={8}
          keyboardType="number-pad"
        />
        <Text style={styles.label}>Letra:</Text>
        <TextInput
          style={styles.letraInput}
          value={this.state.letraDNI}
          editable={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderColor: 'blue',
    borderWidth: 2,
  },
  label: {
    fontWeight: '600',
    marginHorizontal: 5,
    color: '#333',
  },
  input: {
    width: 120,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    marginHorizontal: 5,
  },
  letraInput: {
    width: 40,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    marginHorizontal: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
