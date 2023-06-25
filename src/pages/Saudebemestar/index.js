import react from "react";
import { Text, Dimensions, View, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuNavigation from "../../components/Menu";

function Saudebemestar () {

    return(

        <ScrollView style={style.container}>
            <Image source={require('./img/saudebemestar.png')} 
            style={style.backgroundTitle}
            />
            <Image source={require('./img/perfil.png')} 
            style={style.imgPerfil}
            />
            <Text style={style.textInfo}>Informativo ODS</Text>
            <Text style={style.titleInfo}>Info</Text>
            <Text style={style.linhaHorizontal1}></Text>
            <Text style={style.linhaHorizontal2}></Text>


            <Text style={style.titleText}>Saúde e Bem Estar</Text>

            <Text style={style.textPrincipal}>
            Houve importante progresso em relação às principais causas de mortes e doenças no mundo. A expectativa de vida aumentou dramaticamente; as taxas de mortalidade infantil e materna diminuíram, viramos a maré em relação ao HIV e as mortes por malária caíram pela metade.
            </Text>

            <Text style={style.textPrincipal}>
            A boa saúde é essencial para o desenvolvimento sustentável, e a Agenda 2030 reflete essa interconectividade. Leva em conta o aumento das desigualdades econômicas e sociais, a rápida urbanização, as ameaças ao clima e ao meio ambiente, a resposta contínua ao HIV e a outras doenças infecciosas e aos desafios emergentes, como doenças não transmissíveis. A cobertura universal de saúde será essencial para alcançar o ODS 3, acabar com a pobreza e reduzir as desigualdades. Outras prioridades emergentes de saúde global não explicitamente incluídas nos ODS, incluindo resistência antimicrobiana, também exigem ação.
            </Text>

            <Text style={style.textPrincipal}>
            Mas o mundo está fora do caminho para alcançar os ODS relacionados à saúde. O progresso tem sido desigual, tanto entre os países como dentro deles. Há uma diferença de 31 anos entre nações com as expectativas de vida mais curtas e mais longas. E, enquanto algumas tiveram ganhos impressionantes, as médias nacionais escondem que muitos estão sendo deixados para trás. Abordagens multissetoriais, baseadas em direitos e sensíveis a gênero, são essenciais para enfrentar as desigualdades e construir uma boa saúde para todos.
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

export default Saudebemestar;