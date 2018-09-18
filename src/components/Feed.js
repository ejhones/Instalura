import {Components} from 'react';
import {View, Text, Image} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Feed extends Comment{
    render(){
        return(
            <View>
                <Text>Rafael</Text>
                <Image source={require('./sources/img/alura.png')}
                style={{width: width, height: width}}/>
            </View>
        );
    }
}