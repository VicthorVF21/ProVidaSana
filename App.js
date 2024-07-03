import React, { useState, useEffect, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import PantallaLogin from './Components/Login';
import PantallaDatosPer from './Components/FormPerson';
import PantallaInicio from './Components/Inicio';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrarActividad from './Components/ActividadF';
import MenuActF from './Components/MenuActividadF';
import RegistrarUser from './Components/RegistrarUser';
import RegistrarEstAnimo from './Components/EstadoAni';
import MenuMetas from './Components/MenuMetas';
import MetasDistancia from './Components/MetaDistancia';

SplashScreen.preventAutoHideAsync();

const fetchFonts = async () => {
  await Font.loadAsync({
    'Amiri-Bold': require('./assets/fonts/Amiri-Bold.ttf'),
  });
};

export default function App() {

  const Stack = createStackNavigator();


  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await fetchFonts();
        setFontLoaded(true);
      } catch (e) {
        console.warn(e);
      } finally {
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={PantallaLogin} options={{ headerShown: false }} />
      <Stack.Screen name="DatosPer" component={PantallaDatosPer} options={{ headerShown: false }} />
      <Stack.Screen name="Inicio" component={PantallaInicio} options={{ headerShown: false }} />
      <Stack.Screen name="MenuActividadF" component={MenuActF} options={{ headerShown: false }} />
      <Stack.Screen name="ActividadF" component={RegistrarActividad} options={{ headerShown: false }} />
      <Stack.Screen name="RegistrarUser" component={RegistrarUser} options={{ headerShown: false }} />
      <Stack.Screen name="EstadoAnimo" component={RegistrarEstAnimo} options={{ headerShown: false }} />
      <Stack.Screen name="MenuMeta" component={MenuMetas} options={{ headerShown: false }} />
      <Stack.Screen name="MetaDistancia" component={MetasDistancia} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
 
   )
 
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
