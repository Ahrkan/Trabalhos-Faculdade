import react from "react";
import { Text, Dimensions, View, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuNavigation from "../../components/Menu";

function Industria () {

    return(

        <ScrollView style={style.container}>
            <Image source={require('./img/industria.png')} 
            style={style.backgroundTitle}
            />
            <Image source={require('./img/perfil.png')} 
            style={style.imgPerfil}
            />
            <Text style={style.textInfo}>Informativo ODS</Text>
            <Text style={style.titleInfo}>Info</Text>
            <Text style={style.linhaHorizontal1}></Text>
            <Text style={style.linhaHorizontal2}></Text>


            <Text style={style.titleText}>Indústria, Inovação e Infraestrutura</Text>

            <Text style={style.textPrincipal}>
            O investimento em infraestrutura e inovação é motor essencial para o crescimento e o desenvolvimento econômico. Com mais da metade da população mundial vivendo agora nas cidades, o transporte de massa e as energias renováveis estão se tornando cada vez mais importantes, assim como o crescimento de novas indústrias e tecnologias de informação e comunicação.
            </Text>

            <Text style={style.textPrincipal}>
            O progresso tecnológico também é fundamental para encontrar soluções duradouras para os desafios econômicos e ambientais, como a criação de novos empregos e a promoção da eficiência energética. Promover indústrias sustentáveis e investir em pesquisa científica e inovação são formas importantes de facilitar o desenvolvimento sustentável
            </Text>

            <Text style={style.textPrincipal}>
            Mais de 4 bilhões de pessoas ainda não têm acesso à Internet e 90% delas estão em países em desenvolvimento. Reduzir esse abismo digital é crucial para garantir a igualdade de acesso à informação e ao conhecimento, bem como fomentar a inovação e o empreendedorismo.
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

export default Industria;