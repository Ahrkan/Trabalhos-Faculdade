import react from "react";
import { Text, TextInput, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Buttons = () => {
    const navigation = useNavigation();

        //Função a ser executado quando o botão for pressionado
        const pressionado = () => {
            navigation.navigate('Home');

        };

        return (
            <View>
                <TouchableOpacity onPress={pressionado} style={style.Buttons}>
                    <Text style={style.textButtons}>Acessar</Text>
                </TouchableOpacity>
            </View>
        );

    };


const style = StyleSheet.create({
    Buttons:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#00BFFF',
        width: 320,
        height: 45,
        marginTop: 300,
        textAlign: 'center',
        padding: 10,
        borderRadius: 1,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
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

    textButtons:{
        color: '#FFFFFF',
        fontSize: 15,
    },



});

export default Buttons;