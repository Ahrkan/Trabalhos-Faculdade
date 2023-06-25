import react from "react";
import {Text, TextInput, StyleSheet, View, Dimensions, ImageBackground} from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { WebView } from "react-native-webview";
import Inputs from "../../components/Inputs";
import MenuNavigation from "../../components/Menu";

function Home () {

    return(

        <View style={style.container}>
            <ImageBackground source={require('./img/fundo_home.png')} 
            style={style.backgroundImage}
            />
            <Image source={require('./img/perfil.png')} 
            style={style.imgPerfil}
            />

            <Text style={style.inputPesquisa}>
            <Inputs placeHolder="Buscar o que Procura"></Inputs>
            </Text>

            <Image source={require('./img/noticia.png')} 
            style={style.imgNoticias}
            />
            <Text style={style.textNoticias}>Vídeo</Text>

            <WebView
                source={{ uri: 'https://www.youtube.com/embed/VU7OZApVkDY'}}
                style={style.iframeUm}
            />
           
           <Text>
                <MenuNavigation></MenuNavigation>
           </Text>

        </View>

    );

};

const windowWidth = Dimensions.get('window').width

const style = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFFFFF',
        width: windowWidth * 1, //100% da largura da tela
    },

    backgroundImage:{
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },

    imgPerfil:{
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: '#D9D9D9',
        marginTop: 50,
        marginLeft: 20,
        padding: 0,
    },

    inputPesquisa:{
        marginTop: 130,
        alignItems: 'center',
        margin: 40,
        position: 'absolute',
        width: windowWidth * 1, //100% da largura da tela 
    },

    imgNoticias:{
        width: 45,
        height: 45,
        marginTop: 340,
        marginLeft: 20,
        position: 'absolute',
    },

    textNoticias:{
        fontSize: 16,
        marginTop: 358,
        marginLeft: 63,
        position: 'absolute',

    },

    iframeUm:{ 
        width: 350,
        height: 210,
        margin: 30,
        marginTop: 300,
        position: 'absolute',
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
        paddingHorizontal: 1,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },

        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5,
    },
    

});

export default Home;