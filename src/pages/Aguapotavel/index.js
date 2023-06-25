import react from "react";
import { Text, Dimensions, View, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuNavigation from "../../components/Menu";

function Aguapotavel () {

    return(

        <ScrollView style={style.container}>
            <Image source={require('./img/aguapotavel.png')} 
            style={style.backgroundTitle}
            />
            <Image source={require('./img/perfil.png')} 
            style={style.imgPerfil}
            />
            <Text style={style.textInfo}>Informativo ODS</Text>
            <Text style={style.titleInfo}>Info</Text>
            <Text style={style.linhaHorizontal1}></Text>
            <Text style={style.linhaHorizontal2}></Text>


            <Text style={style.titleText}>Água Potável e Saneamento</Text>

            <Text style={style.textPrincipal}>
            A escassez de água afeta mais de 40% das pessoas no mundo, um índice alarmante que deve subir à medida que as temperaturas globais aumentam. Embora 2,1 bilhões de pessoas tenham ampliado seu acesso a água e saneamento desde 1990, a redução do abastecimento de água potável está afetando todos os continentes.
            </Text>

            <Text style={style.textPrincipal}>
            Mais e mais países estão enfrentando estresse hídrico, e o aumento da seca e da desertificação já está piorando essas tendências. Até 2050, projeta-se que pelo menos uma em cada quatro pessoas sofrerá escassez recorrente de água.
            </Text>

            <Text style={style.textPrincipal}>
            Água potável segura e acessível para todos até 2030 exige investimentos em infraestrutura adequada, instalações sanitárias e incentivos à higiene. Proteger e restaurar os ecossistemas relacionados com a água também é essencial.
            </Text>

            <Text style={style.textPrincipal}>
            Garantir a água potável universal segura e acessível envolve alcançar mais de 800 milhões de pessoas que carecem de serviços básicos e melhorar a acessibilidade e a segurança dos serviços para mais de 2 bilhões de pessoas.
            </Text>

            <Text style={style.textPrincipal}>
            Em 2015, 4,5 bilhões de pessoas careciam de serviços de saneamento gerenciados com segurança (com excrementos adequadamente descartados ou tratados) e 2,3 bilhões careciam até mesmo de saneamento básico.
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

export default Aguapotavel;