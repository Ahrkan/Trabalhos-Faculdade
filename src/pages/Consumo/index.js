import react from "react";
import { Text, Dimensions, View, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuNavigation from "../../components/Menu";

function Consumo () {

    return(

        <ScrollView style={style.container}>
            <Image source={require('./img/consumo.png')} 
            style={style.backgroundTitle}
            />
            <Image source={require('./img/perfil.png')} 
            style={style.imgPerfil}
            />
            <Text style={style.textInfo}>Informativo ODS</Text>
            <Text style={style.titleInfo}>Info</Text>
            <Text style={style.linhaHorizontal1}></Text>
            <Text style={style.linhaHorizontal2}></Text>


            <Text style={style.titleText}>Consumo e Produção Responsável</Text>

            <Text style={style.textPrincipal}>
            Alcançar o crescimento econômico e o desenvolvimento sustentável exige que reduzamos urgentemente nossa pegada ecológica, mudando a maneira como produzimos e consumimos bens e recursos. A agricultura é a maior consumidora de água em todo o mundo, e a irrigação agora exige cerca de 70% de toda a água doce para uso humano.
            </Text>

            <Text style={style.textPrincipal}>
            A gestão mais eficiente de nossos recursos naturais compartilhados e do descarte de resíduos tóxicos e poluentes é importante para atingir esse objetivo. Incentivar indústrias, empresas e consumidores a reciclar e reduzir o desperdício é igualmente importante, assim como apoiar os países em desenvolvimento a adotar padrões de consumo mais sustentáveis até 2030.
            </Text>

            <Text style={style.textPrincipal}>
            Uma grande parte da população mundial ainda está consumindo muito pouco para atender suas necessidades básicas. Nesse contexto, é preciso reduzir pela metade o desperdício global de alimentos per capita nos níveis de varejo e consumo para criar cadeias de produção e de fornecimento mais eficientes. Isso pode ajudar na segurança alimentar e contribuir para uma economia que use os recursos de forma eficiente.
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

export default Consumo;