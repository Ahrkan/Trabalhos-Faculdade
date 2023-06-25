import react from "react";
import { Text, Dimensions, View, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuNavigation from "../../components/Menu";

function Terra () {

    return(

        <ScrollView style={style.container}>
            <Image source={require('./img/terra.png')} 
            style={style.backgroundTitle}
            />
            <Image source={require('./img/perfil.png')} 
            style={style.imgPerfil}
            />
            <Text style={style.textInfo}>Informativo ODS</Text>
            <Text style={style.titleInfo}>Info</Text>
            <Text style={style.linhaHorizontal1}></Text>
            <Text style={style.linhaHorizontal2}></Text>


            <Text style={style.titleText}>Vida Terrestre</Text>

            <Text style={style.textPrincipal}>
            A vida humana depende da terra tanto quanto do oceano para seu sustento e subsistência. A vida vegetal fornece 80% da dieta humana, e contamos com a agricultura como um importante recurso econômico. As florestas cobrem 30% da superfície da Terra, fornecem habitats vitais para milhões de espécies e fontes importantes de ar e água limpos, além de serem cruciais para combater a mudança global do clima.
            </Text>

            <Text style={style.textPrincipal}>
            Todos os anos, 13 milhões de hectares de florestas são perdidos, enquanto a persistente degradação das terras áridas levou à desertificação de 3,6 bilhões de hectares, afetando desproporcionalmente as comunidades pobres.
            </Text>

            <Text style={style.textPrincipal}>
            Embora 15% da terra esteja protegida, a biodiversidade ainda está em risco. Quase 7 mil espécies de animais e plantas foram comercializadas ilegalmente. O tráfico de vida selvagem não apenas corrói a biodiversidade, mas cria insegurança, alimenta conflitos e a corrupção.
            </Text>

            <Text style={style.textPrincipal}>
            Ações urgentes devem ser tomadas para reduzir a perda de habitats naturais e biodiversidade que fazem parte de nosso patrimônio comum e apoiar a segurança global de alimentos e água, mitigação e adaptação à mudança global do clima e impulsionar a paz e a segurança.
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

export default Terra;