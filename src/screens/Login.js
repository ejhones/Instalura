import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Dimensions, Button, Text, AsyncStorage } from 'react-native';

const width = Dimensions.get('screen').width;

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: 'Rafael',
            senha: '123456',
            mensagem: ''
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
            .then(token =>{
                AsyncStorage.setItem('token', token);
                AsyncStorage.setItem('usuario', this.state.usuario);
                const getToken = AsyncStorage.getItem('token');
                alert(getToken);
            })
            .catch(error => this.setState({mensagem : error.mensagem}));
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Instalura</Text>
                <View style={styles.form}>
                    <TextInput style={styles.input}
                        placeholder="usuário ..."
                        defaultValue='Rafael'
                        onChangeText={texto => this.setState({ usuario: texto })} />
                    <TextInput style={styles.input}
                        placeholder="senha ..."
                        defaultValue='123456'
                        secureTextEntry={true}
                        onChangeText={texto => this.setState({ senha: texto })} />
                    <Button title="Login"
                        onPress={this.efetuaLogin} />
                </View>
                <Text style={styles.mensagem}>{this.state.mensagem}</Text>
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
    }, 
    mensagem: {
        marginTop: 15,
        color:'#e74c3c'
    }
});