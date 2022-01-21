import React, { Component } from 'react';
import { View, Text, TextInput, Keyboard } from 'react-native';

import calculaLetraNif from '../Utils';

export default class Nif extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elDNIintroducido: undefined,
            letraDNI: undefined,
        };
    }
    guardaDNI = valor => {
        if (valor.length === 8) {
            this.setState({ elDNIintroducido: valor });
            let laLetra = calculaLetraNif(valor);
            this.setState({ letraDNI: laLetra });
            Keyboard.dismiss();
            console.log("En el componente hijo, el dni es " + valor + " i la letra es " + laLetra);
            this.props.devuelveNif({ dni: valor, letra: laLetra }); // Nos comunicamos con el componente Padre
        }
    };

    render() {
        return (
            <View
                style={{
                    flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                    padding: 10, backgroundColor: this.props.color, borderColor: 'blue', borderWidth: 2,
                }}>
                <Text>DNI:</Text>
                <TextInput
                    style={{ fontSize: 15, fontWeight: "normal", width: 200 }}
                    placeholder="Escribe el dni"
                    placeholderTextColor="#FF0000"
                    onChangeText={this.guardaDNI}
                    maxLength={8}
                    keyboardType="number-pad"
                    underlineColorAndroid="blue"
                />

                <Text>Letra:</Text>
                <TextInput
                    style={{ fontWeight: 'bold', fontSize: 15 }}
                    placeholder=""
                    placeholderTextColor="#FF0000"
                    value={this.state.letraDNI}
                    editable={false}
                    underlineColorAndroid="blue"
                />
            </View>
        );
    }
}
