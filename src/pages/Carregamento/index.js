import react, { useEffect } from "react";
import {Text, StyleSheet, View, Dimensions} from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";


//Todo componente no react-native é uma função ou uma classe

function Carregamento () {

    const navigation = useNavigation();

        useEffect(() => {
            const timer = setTimeout(() => {
                navigation.navigate('Login');
            }, 4000); //Tempo de 4 segundo na tela de carregamento

            return () => clearTimeout(timer); //Limpa o temporizador
        }, []);

    return (
        <View style={style.container}>
            <Image style={style.imagenODS} source={require('./img/ods.png')} />  
            <Text style={style.Kakarototext}><Image style={style.imagenKAKAROTO} source={require('./img/kakaroto.gif')} /> KakarotoSOFTWARE</Text>
        </View>
    );

}

const windowWidth = Dimensions.get('window').width;

const style = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        width: windowWidth * 1, // 100% da largura da tela
    },

    imagenODS:{
        width: 280,
        height: 280,
        marginTop:0,
        
    },

    Kakarototext:{
       marginTop: 200,
       fontSize: 18,
       fontWeight: 800,       
    },

    imagenKAKAROTO:{
        width: 80,
        height: 80,
    },

});

export default Carregamento;