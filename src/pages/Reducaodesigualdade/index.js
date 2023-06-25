import react from "react";
import { Text, Dimensions, View, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuNavigation from "../../components/Menu";

function Reducaodesigualdade () {

    return(

        <ScrollView style={style.container}>
            <Image source={require('./img/desigualdade.png')} 
            style={style.backgroundTitle}
            />
            <Image source={require('./img/perfil.png')} 
            style={style.imgPerfil}
            />
            <Text style={style.textInfo}>Informativo ODS</Text>
            <Text style={style.titleInfo}>Info</Text>
            <Text style={style.linhaHorizontal1}></Text>
            <Text style={style.linhaHorizontal2}></Text>


            <Text style={style.titleText}>Rdução das Desigualdades</Text>

            <Text style={style.textPrincipal}>
            A desigualdade de renda está aumentando – os 10% mais ricos detêm até 40% da renda global, enquanto os 10% mais pobres ganham apenas entre 2% e 7%. Se levarmos em conta a desigualdade do crescimento populacional nos países em desenvolvimento, a desigualdade aumentou 11%.
            </Text>

            <Text style={style.textPrincipal}>
            A desigualdade de renda aumentou em quase todos os lugares nas últimas décadas, mas em velocidades diferentes. O aumento foi menor na Europa e maior no Oriente Médio.
            </Text>

            <Text style={style.textPrincipal}>
            Essas disparidades cada vez maiores exigem políticas sólidas para capacitar as pessoas de baixa renda e promover a inclusão econômica de todos, independentemente de sexo, raça ou etnia.
            </Text>

            <Text style={style.textPrincipal}>
            A desigualdade de renda requer soluções globais. Isso envolve melhorar a regulação e o monitoramento dos mercados e instituições financeiras, incentivando a assistência ao desenvolvimento e o investimento estrangeiro direto nas regiões onde há maior necessidade. Facilitar a migração segura e a mobilidade das pessoas também é fundamental para reduzir o fosso que se torna cada vez maior.
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

export default Reducaodesigualdade;