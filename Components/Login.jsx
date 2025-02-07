import React, {useState} from 'react';
import { View, Text, TextInput,Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { auth }  from '../config/FirebaseConfig';

export default function PantallaLogin() {

  const [Nuser, setNuser] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {
    if (Nuser === '' || password === '') {
      Alert.alert('Error', 'Por favor ingrese su nombre de usuario y contraseña');
      return;
    }

    auth.signInWithEmailAndPassword(Nuser, password)
      .then((userCredential) => {
        navigation.navigate('Inicio');
      })
      .catch((error) => {
        Alert.alert('Error', error.message);
      });
  };

  return (
    <LinearGradient
    colors={['#E0F7FA','#3A909B']} style={estilos.contenedor} >
      <Image style={estilos.imagenCirculos} source={require('../assets/FormaCirculos.png')}/>
      <View style={estilos.VTitulo}>
      <Image style={estilos.titulo} source={require('../assets/LVidaSanaNG.png')}/>
      <Text style={estilos.subtitulo}>Login</Text>
      </View>
      <TextInput
        style={estilos.input1}
        placeholder="Nombre de usuario"
        placeholderTextColor="#666"
        value={Nuser}
        onChangeText={setNuser}
      />
      <TextInput
        style={estilos.input2}
        placeholder="Contraseña"
        placeholderTextColor="#666"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity>
        <Text style={estilos.olvidoContraseña}>Olvidé mi contraseña</Text>
      </TouchableOpacity>
      <View style={estilos.VButtons}>
      <TouchableOpacity style={estilos.boton} onPress={handleLogin}>
        <Text style={estilos.textoBoton}>Iniciar sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('RegistrarUser')} style={estilos.boton}>
        <Text style={estilos.textoBoton}>Registrarse</Text>
      </TouchableOpacity>
      </View >
      <Image style={estilos.imagenCirculosI} source={require('../assets/FormaCirculosI.png')}/>
    </LinearGradient>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
     
  },
  VTitulo:{
   
    alignItems: 'center',
  },

  VButtons:{
    alignItems: 'center',
  },

  titulo: {
    height: 50, 
    width: 200,
    marginBottom: 50,
  },
  subtitulo: {
    fontSize: 35,
    color: '#000',
    marginBottom: 30,
    fontFamily: 'Amiri-Bold',
  },
  input1: {
    width: '80%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 30,
    backgroundColor: '#fff',
  },

  input2: {
    width: '80%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
  },

  olvidoContraseña: {
    color: '#666',
    marginBottom: 20,
    textAlign: 'right',
    marginRight: 50,
  },
  boton: {
    width: '40%',
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 30,
  },
  textoBoton: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },

  imagenCirculos: {
    position: 'absolute',
    top: 0,
    left: 0
  },

  imagenCirculosI: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },

  
});
