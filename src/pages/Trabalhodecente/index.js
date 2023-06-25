import react from "react";
import { Text, Dimensions, View, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuNavigation from "../../components/Menu";

function Trabalhodecente () {

    return(

        <ScrollView style={style.container}>
            <Image source={require('./img/trabalhodecente.png')} 
            style={style.backgroundTitle}
            />
            <Image source={require('./img/perfil.png')} 
            style={style.imgPerfil}
            />
            <Text style={style.textInfo}>Informativo ODS</Text>
            <Text style={style.titleInfo}>Info</Text>
            <Text style={style.linhaHorizontal1}></Text>
            <Text style={style.linhaHorizontal2}></Text>


            <Text style={style.titleText}>Trabalho Decente e Crescimento Econômico</Text>

            <Text style={style.textPrincipal}>
            Nos últimos 25 anos, o número de trabalhadores que vivem em extrema pobreza diminuiu drasticamente, apesar do impacto duradouro da crise econômica de 2008 e da recessão global. Nos países em desenvolvimento, a classe média agora representa mais de 34% do emprego total – um número que quase triplicou entre 1991 e 2015.
            </Text>

            <Text style={style.textPrincipal}>
            No entanto, à medida que a economia global continua a se recuperar, vemos um crescimento mais lento, desigualdades cada vez maiores e empregos insuficientes para acompanhar uma força de trabalho crescente. Segundo a Organização Internacional do Trabalho (OIT), mais de 204 milhões de pessoas estavam desempregadas em 2015.
            </Text>

            <Text style={style.textPrincipal}>
            Os ODS promovem o crescimento econômico sustentado, maiores níveis de produtividade e inovação tecnológica. Incentivar o empreendedorismo e a criação de empregos são fundamentais para isso, assim como medidas eficazes para erradicar o trabalho forçado, a escravidão e o tráfico de pessoas. Com essas metas em mente, o objetivo é alcançar emprego pleno e produtivo e trabalho decente para todas as mulheres e homens até 2030.
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

export default Trabalhodecente;