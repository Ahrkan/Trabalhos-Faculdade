import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Carregamento from './src/pages/Carregamento/index.js';
import Login from './src/pages/Login/index.js';
import Home from './src/pages/Home/index.js';
import Menu from './src/components/Menu/index.js'
import Menuprincipal from './src/pages/Menuprincipal/index.js'
import ErradicacaoPobreza from './src/pages/ErradicacaoPobreza/index.js';
import Fomezero from './src/pages/Fomezero/index.js';
import Saudebemestar from './src/pages/Saudebemestar/index.js';
import Educacaoqualidade from './src/pages/Educacaoqualidade/index.js';
import Igualdadegenero from './src/pages/Igualdadegenero/index.js';
import Aguapotavel from './src/pages/Aguapotavel/index.js';
import Energialimpa from './src/pages/Energialimpa/index.js';
import Trabalhodecente from './src/pages/Trabalhodecente/index.js';
import Industria from './src/pages/Industria/index.js';
import Reducaodesigualdade from './src/pages/Reducaodesigualdade/index.js';
import Cidadecomunidade from './src/pages/Cidadecomunidade/index.js';
import Consumo from './src/pages/Consumo/index.js';
import Climatica from './src/pages/Climatica/index.js';
import Vida from './src/pages/Vida/index.js';
import Terra from './src/pages/Terra/index.js';
import Paz from './src/pages/Paz/index.js';
import Parcerias from './src/pages/Parcerias/index.js';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Carregamento'>
        <Stack.Screen
          name='Carregamento' component={Carregamento} />
        
        <Stack.Screen
          name='Login' component={Login} />

        <Stack.Screen
          name='Home' component={Home} />

        <Stack.Screen
          name='Menuprincipal' component={Menuprincipal} />

        <Stack.Screen
          name='Menu' component={Menu} />

          <Stack.Screen
            name='ErradicacaoPobreza' component={ErradicacaoPobreza} />

          <Stack.Screen
            name='Fomezero' component={Fomezero} />

          <Stack.Screen
            name='Saudebemestar' component={Saudebemestar} />

          <Stack.Screen
            name='Educacaoqualidade' component={Educacaoqualidade} />

          <Stack.Screen
            name='Igualdadegenero' component={Igualdadegenero} />

          <Stack.Screen
            name='Aguapotavel' component={Aguapotavel} />  

          <Stack.Screen
            name='Energialimpa' component={Energialimpa} />

          <Stack.Screen
            name='Trabalhodecente' component={Trabalhodecente} />

          <Stack.Screen
            name='Industria' component={Industria} />

          <Stack.Screen
            name='Reducaodesigualdade' component={Reducaodesigualdade} />

          <Stack.Screen
            name='Cidadecomunidade' component={Cidadecomunidade} />

          <Stack.Screen
            name='Consumo' component={Consumo} />

          <Stack.Screen
            name='Climatica' component={Climatica} />

          <Stack.Screen
            name='Vida' component={Vida} />

          <Stack.Screen
            name='Terra' component={Terra} />

          <Stack.Screen
            name='Paz' component={Paz} />

          <Stack.Screen
            name='Parcerias' component={Parcerias} />

        </Stack.Navigator>      
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  //container: {
  //flex: 1,
  //backgroundColor: '#fff',
  //alignItems: 'center',
  //justifyContent: 'center',
  //},
});
