import react from "react";
import { Text, Dimensions, View, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuNavigation from "../../components/Menu";

function ErradicacaoPobreza () {

    return(

        <ScrollView style={style.container}>
            <Image source={require('./img/erradicacaopobreza.png')} 
            style={style.backgroundTitle}
            />
            <Image source={require('./img/perfil.png')} 
            style={style.imgPerfil}
            />
            <Text style={style.textInfo}>Informativo ODS</Text>
            <Text style={style.titleInfo}>Info</Text>
            <Text style={style.linhaHorizontal1}></Text>
            <Text style={style.linhaHorizontal2}></Text>


            <Text style={style.titleText}>Erradicação da Pobreza</Text>

            <Text style={style.textPrincipal}>
                Erradicar a pobreza em todas as suas formas continua sendo um dos maiores desafios da humanidade. Embora o número de pessoas que vivem em extrema pobreza tenha caído para mais da metade entre 1990 e 2015, muitos ainda têm dificuldades para ter suas necessidades mais básicas atendidas.
            </Text>

            <Text style={style.textPrincipal}>
                Em 2015, cerca de 736 milhões de pessoas ainda viviam com menos de US$1,90 por dia; muitas careciam de comida, água potável e saneamento. O rápido crescimento econômico em países como China e Índia tirou milhões da pobreza, mas o progresso tem sido desigual. As mulheres são mais propensas a serem pobres do que os homens porque têm menos acesso a trabalho remunerado, educação e propriedades.
            </Text>

            <Text style={style.textPrincipal}>
                O progresso também foi limitado em outras regiões, como o Sul da Ásia e a África Subsaariana, que respondem por 80% das pessoas que vivem em extrema pobreza. Novas ameaças trazidas pela mudança global do clima, conflitos e insegurança alimentar significam que ainda mais trabalho é necessário para tirar as pessoas da pobreza.
            </Text>

            <Text style={style.textPrincipal}>
                Os ODS são um compromisso ousado para terminar o que começamos e acabar com a pobreza em todas as suas formas e dimensões até 2030. Isso inclui direcionar ações aos mais vulneráveis, aumentar o acesso aos recursos e serviços básicos e apoiar as comunidades afetadas por conflitos e desastres relacionados ao clima.
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

export default ErradicacaoPobreza;