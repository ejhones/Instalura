import React, {Component} from 'react';
import {Text, View, Dimensions, Image, ScrollView} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Feed extends Component {
    render(){
        const fotos = [
            {id: 1, usuaraio: 'rafael'},
            {id: 2, usuaraio: 'alberto'},
            {id: 3, usuaraio: 'vitor'},
        ];

        return(
            <ScrollView>
                {fotos.map(foto => 
                    <View key={foto.id}>
                        <Text>{foto.usuaraio}</Text>
                        <Image source={require('../../resources/img/alura.png')}
                        style={{width: width, height: width}} />
                    </View>
                )}
            </ScrollView>
        );
    }
}