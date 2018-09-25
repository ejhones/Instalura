import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Dimensions, Button, Text } from 'react-native';

const width = Dimensions.get('screen').width;

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: "",
            senha: ""
        }
    }

    efetuaLogin = () => {
        const uri = 'https://instalura-api.herokuapp.com/api/public/login';

        const requestInfo = {
            method: 'POST', 
            body: JSON.stringify({
                login: this.state.usuario,
                senha: this.state.senha
            }),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        };

        fetch(uri, requestInfo)
            .then(response => {
                if (response.ok) {
                    return response.text();
                }

                throw new Error('Não foi possível efetuar login');
            })
            .then(token => console.warn(token));
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Instalura</Text>
                <View style={styles.form}>
                    <TextInput style={styles.input}
                        placeholder="usuário ..."
                        onChangeText={texto => this.setState({ usuario: texto })} />
                    <TextInput style={styles.input}
                        placeholder="senha ..."
                        onChangeText={texto => this.setState({ senha: texto })} />
                    <Button title="Login"
                        onPress={this.efetuaLogin} />
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    form: {
        width: width * 0.8
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 26
    }
});