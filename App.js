/*
  Ejemplo de comunicación entre componentes (padre->hijo, hijo->padre)
 */
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Nif from './components/Nif'; // Importamos el componente NIF desde la ruta indicada

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dni: undefined,
      letra: undefined,
    };
  }
  // Esta función define al componente padre,
  // y es la que utiliza el componente hijo
  // para pasarle datos al componente padre.
  getNifYLetra = ({ dni, letra }) => {
    // El componente hijo le pasa el dni y la letra al componente padre.
    console.log('Estoy en el componente Padre!');
    console.log(dni + '-' + letra);
    this.setState({ dni: dni, letra: letra }); // El componente padre guarda en su estado el dni y la letra que le ha pasado el componente hijo
  };

  render() {
    return (
      <View style={{ borderColor: 'green', borderWidth: 4 }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>
          Formulario Datos Usuario:
        </Text>
        <Nif devuelveNif={this.getNifYLetra} color="white">
          {' '}
        </Nif>
        <Text style={styles.footer}>
          {/* Mostramos en el componente padre, los datos recibidos del componente hijo */}
          He recibido del componente hijo:{' '}
          {this.state.dni !== undefined ? this.state.dni + '-' + this.state.letra : '-'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    padding: 4,
  },
});
