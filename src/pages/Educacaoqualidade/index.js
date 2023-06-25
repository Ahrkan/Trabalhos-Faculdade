import react from "react";
import { Text, Dimensions, View, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuNavigation from "../../components/Menu";

function Educacaoqualidade () {

    return(

        <ScrollView style={style.container}>
            <Image source={require('./img/educacaoqualidade.png')} 
            style={style.backgroundTitle}
            />
            <Image source={require('./img/perfil.png')} 
            style={style.imgPerfil}
            />
            <Text style={style.textInfo}>Informativo ODS</Text>
            <Text style={style.titleInfo}>Info</Text>
            <Text style={style.linhaHorizontal1}></Text>
            <Text style={style.linhaHorizontal2}></Text>


            <Text style={style.titleText}>Educação de Qualidade</Text>

            <Text style={style.textPrincipal}>
            Desde 2000, houve um enorme progresso no cumprimento da meta da educação primária universal. A taxa total de matrículas nas regiões em desenvolvimento atingiu 91% em 2015, e o número mundial de crianças fora da escola caiu quase pela metade. Também houve um aumento dramático nas taxas de alfabetização, e muito mais meninas estão na escola. Trata-se de um sucesso notável.
            </Text>

            <Text style={style.textPrincipal}>
            Mas o progresso tem sido difícil em algumas regiões em desenvolvimento com altos níveis de pobreza, conflitos armados e outras emergências. Na Ásia Ocidental e no Norte da África, o conflito armado em curso provocou um aumento no número de crianças fora da escola. Esta é uma tendência preocupante. Embora a África Subsaariana tenha feito o maior progresso nas matrículas no ensino primário entre todas as regiões em desenvolvimento – de 52% em 1990 para 78% em 2012 – ainda permanecem grandes disparidades. As crianças das famílias mais pobres têm até quatro vezes mais probabilidade de não frequentar a escola do que as das famílias mais ricas. As disparidades entre as áreas rurais e urbanas também permanecem altas.
            </Text>

            <Text style={style.textPrincipal}>
            Alcançar uma educação inclusiva e de qualidade para todos reafirma a crença de que a educação é um dos veículos mais poderosos e comprovados para o desenvolvimento sustentável. Esse objetivo garante que todas as meninas e meninos concluam o ensino fundamental e médio gratuito até 2030. Também visa fornecer acesso igual ao treinamento vocacional acessível, eliminar as disparidades de gênero e riqueza e alcançar o acesso universal a um ensino superior de qualidade.
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

export default Educacaoqualidade;