import React, { useState, useEffect} from 'react';
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
import MetasTiempo from './Components/MetasTiempo';
import MetasPasos from './Components/MetasPasos';
import FiltroMetas from './Components/FiltroRMetas';
import TablaDistancia from './Components/TablaDistancia';
import EditarMetaD from './Components/EditarMetaDist';
import TablaTiempo from './Components/TablaTiempo';
import EditarMetaT from './Components/EditarMetaTie';
import TablaPasos from './Components/TablaPasos';
import EditarMetaP from './Components/EditarMetaPas';
import MenuHistorial from './Components/MenuHistorial';
import HistActR from './Components/HistActRealizadas';
import HistEstA from './Components/HistEstAnimo';
import HistMetas from './Components/HistMetas';
import MenuCitas from './Components/MenuCitasM';
import RegistrarCita from './Components/AgregarCitas';
import HistCitas from './Components/HistCitas';
import MenuMedica from './Components/MenuMedica';
import RegistrarMed from './Components/AgregarMed';
import HistMedica from './Components/HistMedica';
import InfoSalud from './Components/InfoSalud';

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
      <Stack.Screen name="MetaTiempo" component={MetasTiempo} options={{ headerShown: false }} />
      <Stack.Screen name="MetaPasos" component={MetasPasos} options={{ headerShown: false }} />
      <Stack.Screen name="FiltroMeta" component={FiltroMetas} options={{ headerShown: false }} />
      <Stack.Screen name="TablaDist" component={TablaDistancia} options={{ headerShown: false }} />
      <Stack.Screen name="EditarMetaD" component={EditarMetaD} options={{ headerShown: false }} />
      <Stack.Screen name="TablaTiemp" component={TablaTiempo} options={{ headerShown: false }} />
      <Stack.Screen name="EditarMetaT" component={EditarMetaT} options={{ headerShown: false }} />
      <Stack.Screen name="TablaPasos" component={TablaPasos} options={{ headerShown: false }} />
      <Stack.Screen name="EditarMetaP" component={EditarMetaP} options={{ headerShown: false }} />
      <Stack.Screen name="MenuHistorial" component={MenuHistorial} options={{ headerShown: false }} />
      <Stack.Screen name="HistActR" component={HistActR} options={{ headerShown: false }} />
      <Stack.Screen name="HistEstA" component={HistEstA} options={{ headerShown: false }} />
      <Stack.Screen name="HistMetas" component={HistMetas} options={{ headerShown: false }} />
      <Stack.Screen name="MenuCitas" component={MenuCitas} options={{ headerShown: false }} />
      <Stack.Screen name="ReCitas" component={RegistrarCita} options={{ headerShown: false }} />
      <Stack.Screen name="HistCitas" component={HistCitas} options={{ headerShown: false }} />
      <Stack.Screen name="MenuMedica" component={MenuMedica} options={{ headerShown: false }} />
      <Stack.Screen name="ReMedica" component={RegistrarMed} options={{ headerShown: false }} />
      <Stack.Screen name="HistMedica" component={HistMedica} options={{ headerShown: false }} />
      <Stack.Screen name="InfoSalud" component={InfoSalud} options={{ headerShown: false }} />
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
