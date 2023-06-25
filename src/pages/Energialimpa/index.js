import react from "react";
import { Text, Dimensions, View, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuNavigation from "../../components/Menu";

function Energialimpa () {

    return(

        <ScrollView style={style.container}>
            <Image source={require('./img/energialimpa.png')} 
            style={style.backgroundTitle}
            />
            <Image source={require('./img/perfil.png')} 
            style={style.imgPerfil}
            />
            <Text style={style.textInfo}>Informativo ODS</Text>
            <Text style={style.titleInfo}>Info</Text>
            <Text style={style.linhaHorizontal1}></Text>
            <Text style={style.linhaHorizontal2}></Text>


            <Text style={style.titleText}>Enregia Limpa e Acessível</Text>

            <Text style={style.textPrincipal}>
            Entre 2000 e 2018, o índice de pessoas com acesso à eletricidade aumentou de 78% para 90% no mundo, e o número de pessoas sem acesso à energia elétrica caiu para 789 milhões.
            </Text>

            <Text style={style.textPrincipal}>
            No entanto, à medida que a população continua a crescer, o mesmo acontece com a demanda por energia barata, e uma economia dependente de combustíveis fósseis está criando mudanças drásticas em nosso clima.
            </Text>

            <Text style={style.textPrincipal}>
            Investir em energia solar, eólica e térmica, melhorar a produtividade energética e garantir energia para todos é vital para alcançarmos o ODS 7 até 2030.
            </Text>

            <Text style={style.textPrincipal}>
            A expansão da infraestrutura e a atualização da tecnologia para fornecer energia limpa e mais eficiente em todos os países incentivará o crescimento e ajudará o meio ambiente.
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
        marginTop: 75,       
    },

});

export default Energialimpa;