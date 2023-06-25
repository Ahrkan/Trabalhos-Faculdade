import react from "react";
import { Text, Dimensions, View, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuNavigation from "../../components/Menu";

function Fomezero () {

    return(

        <ScrollView style={style.container}>
            <Image source={require('./img/fomezero.png')} 
            style={style.backgroundTitle}
            />
            <Image source={require('./img/perfil.png')} 
            style={style.imgPerfil}
            />
            <Text style={style.textInfo}>Informativo ODS</Text>
            <Text style={style.titleInfo}>Info</Text>
            <Text style={style.linhaHorizontal1}></Text>
            <Text style={style.linhaHorizontal2}></Text>


            <Text style={style.titleText}>Fome Zero</Text>

            <Text style={style.textPrincipal}>
            O número de pessoas desnutridas caiu quase pela metade nas últimas duas décadas devido ao rápido crescimento econômico e ao aumento da produtividade agrícola. Muitos países em desenvolvimento que costumavam apresentar altos índices de fome agora podem satisfazer as necessidades nutricionais de suas populações. A Ásia Central e Oriental, a América Latina e o Caribe fizeram grandes progressos na erradicação da fome.
            </Text>

            <Text style={style.textPrincipal}>
            Infelizmente, a fome e a desnutrição continuam sendo uma enorme barreira ao desenvolvimento em muitos países. Estima-se que 821 milhões de pessoas estavam cronicamente desnutridas em 2017, muitas vezes como consequência direta de degradação ambiental, seca e perda de biodiversidade. Mais de 90 milhões de crianças com menos de 5 anos estavam perigosamente abaixo do peso. A desnutrição e a grave insegurança alimentar parecem estar aumentando em quase todas as regiões da África, bem como da América do Sul.
            </Text>

            <Text style={style.textPrincipal}>
            Os ODS visam acabar com todas as formas de fome e desnutrição até 2030, garantindo que todas as pessoas – especialmente crianças – tenham alimentos suficientes e nutritivos durante todo o ano. Isso envolve a promoção da agricultura sustentável, o apoio aos pequenos agricultores e a igualdade de acesso à terra, às tecnologias e aos mercados. Também requer cooperação internacional para garantir investimentos em infraestrutura e tecnologia para melhorar a produtividade agrícola.
            </Text>

            
            <Text style={style.MenuNavigation}>
                <MenuNavigation></MenuNavigation>
            </Text>

           
        </ScrollView>

    );
};

const windowWidth = Dimensions.get('window').width

const style = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFFFFF',
        width: windowWidth * 1, //100% da largura da tela
        
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
        position: 'absolute',
    },

    textInfo:{
        position: 'absolute',
        marginLeft: 68,
        marginTop: 58,
        color: '#FFFFFF',
        fontSize: 15,
    },

    linhaHorizontal1:{
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1,
        marginVertical: 10,
        width: 164,
        margin: 10,
        marginTop: 120,
        position: 'absolute',
    },

    titleInfo:{
        color: '#FFFFFF',
        marginLeft: 190,
        marginTop: 128,
    },

    linhaHorizontal2:{
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1,
        marginVertical: 10,
        width: 164,
        margin: 232,
        marginTop: 120,
        position: 'absolute',
    },

    backgroundTitle:{
        position: 'absolute',
        height: 190,
    },

    titleText:{
        marginLeft: 10,
        marginTop: 90,
        fontSize: 16,
    },

    textPrincipal:{
        marginLeft: 10,
        marginTop: 15,
    },

    MenuNavigation:{
        flex: 1,
        paddingTop: 0,        
    },

});

export default Fomezero;