import react from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuNavigation from "../../components/Menu";

const Menuprincipal = () => {
    const navigation = useNavigation();
        //Função a ser executada quando o botão for pressionado
        const pressRDP = () => {
            navigation.navigate('ErradicacaoPobreza')
        }

        const pressFomeZero = () => {
            navigation.navigate('Fomezero')
        }

        const pressSaudeBemEstar = () => {
            navigation.navigate('Saudebemestar')
        }

        const pressEducacaoqualidade = () => {
            navigation.navigate('Educacaoqualidade')
        }

        const pressIgualdadegenero = () => {
            navigation.navigate('Igualdadegenero')
        }

        const pressAguapotavel = () => {
            navigation.navigate('Aguapotavel')
        }

        const pressEnergialimpa = () => {
            navigation.navigate('Energialimpa')
        }

        const pressTrabalhodecente = () => {
            navigation.navigate('Trabalhodecente')
        }

        const pressIndustria = () => {
            navigation.navigate('Industria')
        }

        const pressReducaodesigualdade = () => {
            navigation.navigate('Reducaodesigualdade')
        }

        const pressCidadecomunidade = () => {
            navigation.navigate('Cidadecomunidade')
        }

        const pressConsumo = () => {
            navigation.navigate('Consumo')
        }

        const pressClimatica = () => {
            navigation.navigate('Climatica')
        }

        const pressVida = () => {
            navigation.navigate('Vida')
        }

        const pressTerra = () => {
            navigation.navigate('Terra')
        }

        const pressPaz = () => {
            navigation.navigate('Paz')
        }

        const pressParcerias = () => {
            navigation.navigate('Parcerias')
        }

    return(
        <View style={style.container}>
            <Image source={require('./img/perfil.png')} 
            style={style.imgPerfil}
            />
            <Text style={style.textMenu}>Informativo ODS</Text>
            <Text style={style.titleMenu}>Menu</Text>
            <Text style={style.linhaHorizontal1}></Text>
            <Text style={style.linhaHorizontal2}></Text>

            <View style={style.table}>

            <TouchableOpacity onPress={pressRDP} style={style.menuPrincipalButton1}>
                <Text style={style.textMenuPrincipal}>Erradicação da Pobreza</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={pressFomeZero} style={style.menuPrincipalButton2}>
                <Text style={style.textMenuPrincipal}>Fome Zero</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={pressSaudeBemEstar} style={style.menuPrincipalButton3}>
                <Text style={style.textMenuPrincipal}>Saúde e Bem-Estar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={pressEducacaoqualidade} style={style.menuPrincipalButton4}>
                <Text style={style.textMenuPrincipal}>Educação e Qualidade</Text>
            </TouchableOpacity>

            </View>

            <View style={style.table}>

            <TouchableOpacity onPress={pressIgualdadegenero} style={style.menuPrincipalButton5}>
                <Text style={style.textMenuPrincipal}>Igualdade de Genêro</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={pressAguapotavel} style={style.menuPrincipalButton6}>
                <Text style={style.textMenuPrincipal}>Água Potávem e Saneamento</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={pressEnergialimpa} style={style.menuPrincipalButton7}>
                <Text style={style.textMenuPrincipal}>Energia Limpa e Acessível</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={pressTrabalhodecente} style={style.menuPrincipalButton8}>
                <Text style={style.textMenuPrincipal}>Trabalho Decente e Cre...</Text>
            </TouchableOpacity>

            </View>

            <View style={style.table}>

            <TouchableOpacity onPress={pressIndustria} style={style.menuPrincipalButton9}>
                <Text style={style.textMenuPrincipal}>Indústria Inovação Infraestrutura</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={pressReducaodesigualdade} style={style.menuPrincipalButton10}>
                <Text style={style.textMenuPrincipal}>Redução das Desigualdade</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={pressCidadecomunidade} style={style.menuPrincipalButton11}>
                <Text style={style.textMenuPrincipal}>Cidades Comunidades Suatentáveis</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={pressConsumo} style={style.menuPrincipalButton12}>
                <Text style={style.textMenuPrincipal}>Consumo e Produção  Sustentável</Text>
            </TouchableOpacity>

            </View>

            <View style={style.table}>

            <TouchableOpacity onPress={pressClimatica} style={style.menuPrincipalButton13}>
                <Text style={style.textMenuPrincipal}>Ação Climática</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={pressVida} style={style.menuPrincipalButton14}>
                <Text style={style.textMenuPrincipal}>Vida na Água</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={pressTerra} style={style.menuPrincipalButton15}>
                <Text style={style.textMenuPrincipal}>Vida Terrestre</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={pressPaz} style={style.menuPrincipalButton16}>
                <Text style={style.textMenuPrincipal}>Paz Justiça Instituição Eficazes</Text>
            </TouchableOpacity>

            </View>

            <View style={style.table}>

            <TouchableOpacity onPress={pressParcerias} style={style.menuPrincipalButton17}>
                <Text style={style.textMenuPrincipal}>Parcerias e Meios de Implementação</Text>
            </TouchableOpacity>

            </View>

            <Text style={style.MenuNavigation}>
                <MenuNavigation></MenuNavigation>
            </Text>
        </View>
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

    textMenu:{
        position: 'absolute',
        marginLeft: 68,
        marginTop: 58,
        color: '#777777',
        fontSize: 15,
    },

    linhaHorizontal1:{
        borderBottomColor: '#777777',
        borderBottomWidth: 1,
        marginVertical: 10,
        width: 164,
        margin: 10,
        marginTop: 120,
        position: 'absolute',
    },

    titleMenu:{
        color: '#777777',
        marginLeft: 183,
        marginTop: 128,
    },

    linhaHorizontal2:{
        borderBottomColor: '#777777',
        borderBottomWidth: 1,
        marginVertical: 10,
        width: 164,
        margin: 232,
        marginTop: 120,
        position: 'absolute',
    },

    MenuNavigation:{
        marginTop: 680,
        position: 'absolute',
    },

    table:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        paddingHorizontal: 13,
        width: windowWidth * 1, //100% da largura da tela
    },

    menuPrincipalButton1:{
        marginRight: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 1,
        borderWidth: 1,
        height: 70,
        width: 90,
        alignItems: 'center',
        paddingTop: 18,
        borderColor: '#E5243B',
        borderTopLeftRadius: 7,
        borderBottomRightRadius: 7,
        paddingHorizontal: 1,
    },
    
    menuPrincipalButton2:{
        marginRight: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 1,
        borderWidth: 1,
        height: 70,
        width: 90,
        alignItems: 'center',
        paddingTop: 18,
        borderColor: '#DDA63A',
        borderTopLeftRadius: 7,
        borderBottomRightRadius: 7,
        paddingHorizontal: 1,
    },

    menuPrincipalButton3:{
        marginRight: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 1,
        borderWidth: 1,
        height: 70,
        width: 90,
        alignItems: 'center',
        paddingTop: 18,
        borderColor: '#4C9F38',
        borderTopLeftRadius: 7,
        borderBottomRightRadius: 7,
        paddingHorizontal: 1,
    },

    menuPrincipalButton4:{
        marginRight: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 1,
        borderWidth: 1,
        height: 70,
        width: 90,
        alignItems: 'center',
        paddingTop: 18,
        borderColor: '#C5192D',
        borderTopLeftRadius: 7,
        borderBottomRightRadius: 7,
        paddingHorizontal: 1,
    },

    menuPrincipalButton5:{
        marginRight: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 1,
        borderWidth: 1,
        height: 70,
        width: 90,
        alignItems: 'center',
        paddingTop: 18,
        borderColor: '#FF3A21',
        borderTopLeftRadius: 7,
        borderBottomRightRadius: 7,
        paddingHorizontal: 1,
    },
    
    menuPrincipalButton6:{
        marginRight: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 1,
        borderWidth: 1,
        height: 70,
        width: 90,
        alignItems: 'center',
        paddingTop: 18,
        borderColor: '#26BDE2',
        borderTopLeftRadius: 7,
        borderBottomRightRadius: 7,
        paddingHorizontal: 1,
    },

    menuPrincipalButton7:{
        marginRight: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 1,
        borderWidth: 1,
        height: 70,
        width: 90,
        alignItems: 'center',
        paddingTop: 18,
        borderColor: '#FCC30B',
        borderTopLeftRadius: 7,
        borderBottomRightRadius: 7,
        paddingHorizontal: 1,
    },

    menuPrincipalButton8:{
        marginRight: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 1,
        borderWidth: 1,
        height: 70,
        width: 90,
        alignItems: 'center',
        paddingTop: 18,
        borderColor: '#A21942',
        borderTopLeftRadius: 7,
        borderBottomRightRadius: 7,
        paddingHorizontal: 1,
    },

    menuPrincipalButton9:{
        marginRight: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 1,
        borderWidth: 1,
        height: 70,
        width: 90,
        alignItems: 'center',
        paddingTop: 18,
        borderColor: '#FD6925',
        borderTopLeftRadius: 7,
        borderBottomRightRadius: 7,
        paddingHorizontal: 1,
    },

    menuPrincipalButton10:{
        marginRight: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 1,
        borderWidth: 1,
        height: 70,
        width: 90,
        alignItems: 'center',
        paddingTop: 18,
        borderColor: '#DD1367',
        borderTopLeftRadius: 7,
        borderBottomRightRadius: 7,
        paddingHorizontal: 1,
    },

    menuPrincipalButton11:{
        marginRight: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 1,
        borderWidth: 1,
        height: 70,
        width: 90,
        alignItems: 'center',
        paddingTop: 18,
        borderColor: '#FD9D24',
        borderTopLeftRadius: 7,
        borderBottomRightRadius: 7,
        paddingHorizontal: 1,
    },

    menuPrincipalButton12:{
        marginRight: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 1,
        borderWidth: 1,
        height: 70,
        width: 90,
        alignItems: 'center',
        paddingTop: 18,
        borderColor: '#BF8B2E',
        borderTopLeftRadius: 7,
        borderBottomRightRadius: 7,
        paddingHorizontal: 1,
    },

    menuPrincipalButton13:{
        marginRight: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 1,
        borderWidth: 1,
        height: 70,
        width: 90,
        alignItems: 'center',
        paddingTop: 18,
        borderColor: '#3F7E44',
        borderTopLeftRadius: 7,
        borderBottomRightRadius: 7,
        paddingHorizontal: 1,
    },

    menuPrincipalButton14:{
        marginRight: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 1,
        borderWidth: 1,
        height: 70,
        width: 90,
        alignItems: 'center',
        paddingTop: 18,
        borderColor: '#0A97D9',
        borderTopLeftRadius: 7,
        borderBottomRightRadius: 7,
        paddingHorizontal: 1,
    },

    menuPrincipalButton15:{
        marginRight: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 1,
        borderWidth: 1,
        height: 70,
        width: 90,
        alignItems: 'center',
        paddingTop: 18,
        borderColor: '#56C02B',
        borderTopLeftRadius: 7,
        borderBottomRightRadius: 7,
        paddingHorizontal: 1,
    },

    menuPrincipalButton16:{
        marginRight: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 1,
        borderWidth: 1,
        height: 70,
        width: 90,
        alignItems: 'center',
        paddingTop: 18,
        borderColor: '#00689D',
        borderTopLeftRadius: 7,
        borderBottomRightRadius: 7,
        paddingHorizontal: 1,
    },

    menuPrincipalButton17:{
        marginRight: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 1,
        borderWidth: 1,
        height: 70,
        width: 379,
        alignItems: 'center',
        paddingTop: 18,
        borderColor: '#00689D',
        borderTopLeftRadius: 7,
        borderBottomRightRadius: 7,
        paddingHorizontal: 1,
    },

    textMenuPrincipal:{
        fontSize: 10,
        color: '#777777',
        textAlign: 'center',
    },


});

export default Menuprincipal;