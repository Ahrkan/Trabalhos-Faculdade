import react from "react";
import { Text, Dimensions, View, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuNavigation from "../../components/Menu";

function Paz () {

    return(

        <ScrollView style={style.container}>
            <Image source={require('./img/paz.png')} 
            style={style.backgroundTitle}
            />
            <Image source={require('./img/perfil.png')} 
            style={style.imgPerfil}
            />
            <Text style={style.textInfo}>Informativo ODS</Text>
            <Text style={style.titleInfo}>Info</Text>
            <Text style={style.linhaHorizontal1}></Text>
            <Text style={style.linhaHorizontal2}></Text>


            <Text style={style.titleText}>Paz, Justiça e Instituições Eficazes</Text>

            <Text style={style.textPrincipal}>
            Não podemos esperar um desenvolvimento sustentável sem paz, estabilidade, direitos humanos e governança efetiva, baseada no Estado de Direito. No entanto, nosso mundo está cada vez mais dividido. Algumas regiões desfrutam de paz, segurança e prosperidade, enquanto outras caem em ciclos aparentemente intermináveis de conflito e violência. Isso não é inevitável e deve ser enfrentado.
            </Text>

            <Text style={style.textPrincipal}>
            A violência armada e a insegurança têm um impacto destrutivo no desenvolvimento de um país, afetando o crescimento econômico e muitas vezes tendo consequências que duram gerações. Violência sexual, crime, exploração e tortura também prevalecem onde há conflito ou ausência de Estado de Direito, e os países devem tomar medidas para proteger aqueles que estão em maior risco.
            </Text>

            <Text style={style.textPrincipal}>
            Os ODS visam reduzir significativamente todas as formas de violência e trabalhar com governos e comunidades para acabar com conflitos e insegurança. A promoção do Estado de Direito e dos direitos humanos é fundamental para esse processo, assim como a redução do fluxo de armas ilícitas e o fortalecimento da participação dos países em desenvolvimento nas instituições de governança global.
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

export default Paz;