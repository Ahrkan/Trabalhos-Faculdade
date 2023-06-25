import react from "react";
import { Text, Dimensions, View, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuNavigation from "../../components/Menu";

function Parcerias () {

    return(

        <ScrollView style={style.container}>
            <Image source={require('./img/parceria.png')} 
            style={style.backgroundTitle}
            />
            <Image source={require('./img/perfil.png')} 
            style={style.imgPerfil}
            />
            <Text style={style.textInfo}>Informativo ODS</Text>
            <Text style={style.titleInfo}>Info</Text>
            <Text style={style.linhaHorizontal1}></Text>
            <Text style={style.linhaHorizontal2}></Text>


            <Text style={style.titleText}>Parcerias e Meio de Implementação</Text>

            <Text style={style.textPrincipal}>
            Os ODS só podem ser alcançados com fortes parcerias e cooperação global. A assistência oficial ao desenvolvimento permaneceu estável, mas abaixo da meta, em US$147 bilhões em 2017. Enquanto isso, as crises humanitárias causadas por conflitos ou desastres naturais continuam exigindo mais recursos financeiros e ajuda. Muitos países também necessitam da assistência oficial ao desenvolvimento para estimular o crescimento e o comércio.
            </Text>

            <Text style={style.textPrincipal}>
            O mundo está mais interconectado do que nunca. Melhorar o acesso à tecnologia e ao conhecimento é uma forma importante de compartilhar ideias e fomentar a inovação. A coordenação de políticas para ajudar os países em desenvolvimento a administrar sua dívida, bem como promover o investimento para os menos desenvolvidos, é vital para o crescimento e o desenvolvimento sustentáveis.
            </Text>

            <Text style={style.textPrincipal}>
            Os ODS visam melhorar a cooperação Norte-Sul e Sul-Sul, apoiando os planos nacionais para atingir todas as metas. Promover o comércio internacional e ajudar os países em desenvolvimento a aumentar suas exportações faz parte do alcance de um sistema comercial universal baseado em regras e equitativo, justo e aberto, que beneficie a todos.
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

export default Parcerias;