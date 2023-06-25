import react from "react";
import { Text, Dimensions, View, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuNavigation from "../../components/Menu";

function Igualdadegenero () {

    return(

        <ScrollView style={style.container}>
            <Image source={require('./img/igualdadegenero.png')} 
            style={style.backgroundTitle}
            />
            <Image source={require('./img/perfil.png')} 
            style={style.imgPerfil}
            />
            <Text style={style.textInfo}>Informativo ODS</Text>
            <Text style={style.titleInfo}>Info</Text>
            <Text style={style.linhaHorizontal1}></Text>
            <Text style={style.linhaHorizontal2}></Text>


            <Text style={style.titleText}>Igualdade de Gênero</Text>

            <Text style={style.textPrincipal}>
            Acabar com a discriminação contra mulheres e meninas não é apenas garantir um direito humano básico, é crucial para um futuro sustentável; está provado que o empoderamento de mulheres e meninas ajuda no crescimento e no desenvolvimento econômico.
            </Text>

            <Text style={style.textPrincipal}>
            O PNUD colocou a igualdade de gênero no centro de seu trabalho e verificou um progresso notável nos últimos 20 anos. Há mais meninas na escola agora em comparação com 15 anos atrás, e a maioria das regiões alcançou a paridade de gênero no ensino fundamental.
            </Text>

            <Text style={style.textPrincipal}>
            Mas, embora haja mais mulheres do que nunca no mercado de trabalho, ainda há grandes desigualdades em algumas regiões, com as mulheres tendo seus direitos trabalhistas sistematicamente negados. A violência e a exploração sexual, a divisão desigual de cuidados não remunerados e de trabalho doméstico e a discriminação em cargos públicos continuam sendo enormes barreiras. A mudança global do clima e os desastres continuam a ter um efeito desproporcional sobre mulheres e crianças, assim como conflitos e migrações.
            </Text>

            <Text style={style.textPrincipal}>
            É vital dar às mulheres direitos iguais à terra e à propriedade, à saúde sexual e reprodutiva, à tecnologia e à internet. Hoje, há mais mulheres em cargos públicos do que nunca, mas encorajar mais mulheres líderes ajudará a alcançar maior igualdade de gênero.
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

export default Igualdadegenero;