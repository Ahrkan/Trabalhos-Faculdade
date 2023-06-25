import react from "react";
import {Text, StyleSheet, View, Dimensions, ImageBackground, ScrollView} from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MenuNavigation = () => {
    const navigation = useNavigation();
        // Função a ser executada quando o botão for pressionado
        const pressHome = () =>  {
            navigation.navigate('Home')
        }

        // Função a ser executada quando o botão for pressionado
        const pressMenu = () =>  {
            navigation.navigate('Menuprincipal')
        }

        const pressSair = () => {
            navigation.navigate('Login')
        }

    return(
        <View style={style.container}>
            <TouchableOpacity onPress={pressHome} style={style.buttonMenu}>
                <Text style={style.textMenu}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={pressMenu} style={style.buttonMenu}>
                <Text style={style.textMenu}>Menu</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.buttonMenu}>
                <Image style={style.imageMenu} source={require('./img/ods.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={style.buttonMenu}>
                <Text style={style.textMenu}>Comentar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={pressSair} style={style.buttonMenu}>
                <Text style={style.textMenu}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
};

const windowWidth = Dimensions.get('window').width

const style = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: windowWidth * 1, //100% da largura da tela
    },

    buttonMenu:{
        marginRight: 10,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#FFFFFF',
    },

    textMenu:{
        fontSize: 9,
        color: '#000000',
    },

    imageMenu:{
        marginRight: 10,
        paddingVertical: 8,
        paddingHorizontal: 18,
        backgroundColor: '#FFFFFF',
        width: 35,
        height: 35,
    },
  

}); 

export default MenuNavigation;

