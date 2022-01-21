/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import Nif from './components/Nif'; // Importamos el componente NIF desde la ruta indicada

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    // Esta función define al componente padre,
    // y es la que utiliza el componente hijo
    // para pasarle datos al componente padre.
    getNifYLetra = ({ dni, letra }) => {  // El componente hijo le pasa el dni y la letra al componente padre.
        console.log("Estoy en el componente Padre!")
        console.log(dni + "-" + letra);
        this.setState({ dni: dni, letra: letra }); // El componente padre guarda en su estado el dni y la letra que le ha pasado el componente hijo
    };

    render() {
        return (
            <View style={{ borderColor: 'green', borderWidth: 4, }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>Formulario Datos Usuario:</Text>
                <Nif devuelveNif={this.getNifYLetra} color='white'> </Nif>
                <Text>
                    {/* Mostramos en el componente padre, los datos recibidos del componente hijo */}
                    He recibido del componente hijo:{' '}
                    {this.state.dni !== undefined
                        ? this.state.dni + '-' + this.state.letra
                        : '-'}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});
