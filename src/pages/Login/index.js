import react from "react";
import {Text, StyleSheet, View, Dimensions} from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Inputs from "../../components/Inputs";
import Buttons from "../../components/Buttons";

function Login () {

    return(
        <View style={style.container}>
            <Image style={style.imagenODS} source={require('./img/ods.png')} />  
            <Text style={style.titleLogin}>Login</Text>

            <Text style={style.inputLogin}>
                <Inputs placeHolder="Entre com seu E-mail"></Inputs>
                <Inputs placeHolder="Entre com sua Senha"></Inputs>
                <Text style={style.esqueciSenha}>Esqueci Minha Senha</Text>
            </Text>

            <Text style={style.buttonAcessar}>
                <Buttons></Buttons>
            </Text>

        </View>
    );
};


const windowWidth = Dimensions.get('window').width

const style = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth * 1, //100% da largura da tela
    },

    imagenODS:{
        width: 100,
        height: 100,
        marginTop: -350,
        marginLeft: -190,
        marginBottom: 35,
    },

    titleLogin:{
        fontSize: 55,
        fontWeight: 600,
        marginLeft: 80,
        marginTop: -130,
        marginBottom: 35,
        color: '#00BFFF',
    },

    inputLogin:{
        marginTop: 0,
        alignItems: 'center',
        position: 'absolute',
        width: windowWidth * 0.8, //80% da largura da tela
    },

    esqueciSenha:{
        flex: 1,
        color: '#00BFFF',
        fontSize: 12,
        position: 'absolute',
        marginBottom: 30,
    },

    buttonAcessar:{
        position: 'absolute',
        marginBottom: 30,
        marginTop: 120,
        
    }

});

export default Login;