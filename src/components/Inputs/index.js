import react from "react";
import { SafeAreaView, TextInput, StyleSheet, Text  } from "react-native";

const Inputs = (props) => {

    return(
        <SafeAreaView>
            <TextInput style={style.input}
            placeholder={props.placeHolder}>
            </TextInput>
        </SafeAreaView>
    );

}

const style = StyleSheet.create({
    input:{
        width: 320,
        height: 58,
        backgroundColor: '#FFFFFF',
        color: '#777777',
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 45,
        borderRadius: 1,
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

export default Inputs;