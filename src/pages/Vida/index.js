import react from "react";
import { Text, Dimensions, View, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuNavigation from "../../components/Menu";

function Vida () {

    return(

        <ScrollView style={style.container}>
            <Image source={require('./img/vida.png')} 
            style={style.backgroundTitle}
            />
            <Image source={require('./img/perfil.png')} 
            style={style.imgPerfil}
            />
            <Text style={style.textInfo}>Informativo ODS</Text>
            <Text style={style.titleInfo}>Info</Text>
            <Text style={style.linhaHorizontal1}></Text>
            <Text style={style.linhaHorizontal2}></Text>


            <Text style={style.titleText}>Vida Na Água</Text>

            <Text style={style.textPrincipal}>
            Os oceanos do mundo – sua temperatura, química, correntes e vida – impulsionam sistemas globais que tornam a Terra habitável para a humanidade. A forma como gerimos este recurso vital é essencial para a humanidade como um todo e para contrabalançar os efeitos da mudança global do clima.
            </Text>

            <Text style={style.textPrincipal}>
            Mais de 3 bilhões de pessoas dependem da biodiversidade marinha e costeira para sua subsistência. No entanto, hoje 30% dos estoques de peixes do mundo estão sendo sobre-explorados, chegando abaixo do nível em que podem produzir rendimentos sustentáveis.
            </Text>

            <Text style={style.textPrincipal}>
            Os oceanos também absorvem cerca de 30% do dióxido de carbono produzido pelos humanos, e estamos vendo um aumento de 26% na acidificação dos oceanos desde o início da Revolução Industrial. A poluição marinha, cuja esmagadora maioria vem de fontes terrestres, está atingindo níveis alarmantes, com uma média de 13 mil pedaços de lixo plástico sendo encontrados em cada quilômetro quadrado de oceano.
            </Text>

            <Text style={style.textPrincipal}>
            Os ODS visam gerir e proteger de forma sustentável os ecossistemas marinhos e costeiros da poluição, bem como abordar os impactos da acidificação dos oceanos. Aprimorar a conservação e o uso sustentável dos recursos oceânicos por meio do direito internacional também ajudará a mitigar alguns dos desafios enfrentados pelos nossos oceanos.
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

export default Vida;