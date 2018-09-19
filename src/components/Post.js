import React, { Component } from 'react';
import { Text, View, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';


const width = Dimensions.get('screen').width;

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foto: this.props.foto
        }
    }
    render() {
        const { foto } = this.state;

        return (
            <View>
                <View style={styles.cabecalho}>
                    <Image source={{ uri: this.props.foto.urlPerfil }}
                        style={styles.fotoDePerfil} />
                    <Text>{this.props.foto.loginUsuario}</Text>
                </View>
                <Image source={{ uri: this.props.foto.urlFoto }}
                    style={styles.foto} />
                <View style={styles.rodape}>
                    <TouchableOpacity onPress={()=> alert("Touchable Opacity funciando")}>                      
                        <Image style={styles.botaoLike}
                            source={require('../../resources/img/s2.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cabecalho: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    fotoDePerfil: {
        marginRight: 10,
        borderRadius: 20,
        width: 40,
        height: 40
    },
    foto: {
        width: width,
        height: width
    },
    rodape: {
        margin: 10
    },
    botaoLike: {
        height: 40,
        width: 40
    }
});