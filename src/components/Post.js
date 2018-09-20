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

    like = () => {
        const fotoAtualizada = {
            ...this.state.foto,
            likeada: !this.state.foto.likeada
        }
        this.setState({ foto: fotoAtualizada })
    }

    carregaIcone(likeada) {
        return likeada ? require('../../resources/img/s2-checked.png') :
            require('../../resources/img/s2.png');
    }

    exibeLikes(likers) {
        if (likers.length <= 0)
            return;

        return (
            <Text style={styles.likes}>
                {foto.likers.length}{foto.likers.length > 1 ? ' curtidas' : ' curtida'}
            </Text>
        );
    }

    exibeLegenda(foto) {
        if (foto.comentario === '')
            return;

        return (
            <View style={styles.comentario}>
                        <Text style={styles.tituloComentario}>{foto.loginUsuario}</Text>
                        <Text>{foto.comentario}</Text>
                    </View>
        );
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
                    <TouchableOpacity onPress={this.like}>
                        <Image style={styles.botaoLike}
                            source={this.carregaIcone(foto.likeada)} />
                    </TouchableOpacity>
                    {this.exibeLikes(foto.likers)}
                    {this.exibeLegenda(foto)}
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
    },
    likes: {
        fontWeight: 'bold'
    },
    comentario:{
        flexDirection: 'row'
    },
    tituloComentario:{
        fontWeight: 'bold',
        marginRight: 5
    }
});