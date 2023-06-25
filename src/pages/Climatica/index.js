import react from "react";
import { Text, Dimensions, View, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuNavigation from "../../components/Menu";

function Climatica () {

    return(

        <ScrollView style={style.container}>
            <Image source={require('./img/climatica.png')} 
            style={style.backgroundTitle}
            />
            <Image source={require('./img/perfil.png')} 
            style={style.imgPerfil}
            />
            <Text style={style.textInfo}>Informativo ODS</Text>
            <Text style={style.titleInfo}>Info</Text>
            <Text style={style.linhaHorizontal1}></Text>
            <Text style={style.linhaHorizontal2}></Text>


            <Text style={style.titleText}>Ação Climática</Text>

            <Text style={style.textPrincipal}>
            Não há país que não esteja experimentando os efeitos drásticos da mudança global do clima. As emissões de gases de efeito estufa subiram 50% na comparação com 1990. O aquecimento global está causando mudanças duradouras em nosso sistema climático, o que trará consequências irreversíveis em caso de inação.
            </Text>

            <Text style={style.textPrincipal}>
            As perdas econômicas médias anuais de desastres relacionados ao clima estão na casa das centenas de bilhões de dólares. Isso sem mencionar o impacto humano dos desastres geofísicos, que são 91% relacionados ao clima e que, entre 1998 e 2017, mataram 1,3 milhão de pessoas e deixaram 4,4 bilhões de feridos. O ODS visa mobilizar US$ 100 bilhões anualmente até 2020 para atender às necessidades dos países em desenvolvimento para se adaptar à mudança global do clima e investir no desenvolvimento de baixo carbono.
            </Text>

            <Text style={style.textPrincipal}>
            Apoiar regiões vulneráveis contribuirá diretamente não apenas para o ODS 13, mas também para os demais ODS. Essas ações também devem ser acompanhadas de esforços para integrar medidas de risco de desastres, gestão sustentável de recursos naturais e segurança humana nas estratégias nacionais de desenvolvimento. Ainda é possível, com forte vontade política, ampliar o investimento e o uso das tecnologias existentes, limitar o aumento da temperatura média global a 2°C acima dos níveis pré-industriais, visando 1,5°C, mas isso requer uma ação coletiva urgente e ambiciosa.
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

export default Climatica;