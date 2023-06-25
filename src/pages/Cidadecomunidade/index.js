import react from "react";
import { Text, Dimensions, View, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuNavigation from "../../components/Menu";

function Cidadecomunidade () {

    return(

        <ScrollView style={style.container}>
            <Image source={require('./img/cidade.png')} 
            style={style.backgroundTitle}
            />
            <Image source={require('./img/perfil.png')} 
            style={style.imgPerfil}
            />
            <Text style={style.textInfo}>Informativo ODS</Text>
            <Text style={style.titleInfo}>Info</Text>
            <Text style={style.linhaHorizontal1}></Text>
            <Text style={style.linhaHorizontal2}></Text>


            <Text style={style.titleText}>Cidade e Comunidade Sustentável</Text>

            <Text style={style.textPrincipal}>
            Mais da metade da população global vive nas cidades. Em 2050, dois terços de toda a humanidade – 6,5 bilhões de pessoas – viverão em contextos urbanos. O desenvolvimento sustentável não pode ser alcançado sem transformar significativamente a maneira como construímos e gerenciamos nossos espaços urbanos.
            </Text>

            <Text style={style.textPrincipal}>
            O rápido crescimento das cidades – resultado do aumento populacional e da migração crescente – levou a um boom nas megacidades, especialmente no mundo em desenvolvimento, e as favelas estão se tornando uma característica da vida urbana.
            </Text>

            <Text style={style.textPrincipal}>
            Tornar as cidades sustentáveis significa criar oportunidades de carreira e negócios, habitação segura e acessível e construir sociedades e economias resilientes. Envolve investimento em transporte público, criação de espaços públicos verdes e melhoria do planejamento e gestão urbana de forma participativa e inclusiva.
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
        marginTop: 50,        
    },

});

export default Cidadecomunidade;