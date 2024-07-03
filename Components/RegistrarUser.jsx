import React, {useState} from 'react';
import { View, Text, TextInput,Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { auth, db }  from '../config/FirebaseConfig';

export default function RegistrarUser() {

  const [Nuser, setNuser] = useState('');
  const [password, setPassword] = useState('');
  const [Email, setEmail] = useState('');

  const navigation = useNavigation();

  async function handleRegister() {
    if (Nuser === '' || password === '' || Email === '') {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(Email, password);
      const uid = userCredential.user.uid;

      await db.collection('Usuarios').doc(uid).set({
        username: Nuser,
        email: Email,
      });

      Alert.alert('Éxito', 'Usuario registrado correctamente');
      navigation.navigate('DatosPer'); 
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <LinearGradient
    colors={['#CAF8FE','#FE9A62']} style={estilos.contenedor} >
      <Image style={estilos.imagenCirculos} source={require('../assets/CirculoNSuperior.png')}/>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={estilos.loginButton}>
          <Text style={estilos.loginText}>Iniciar Sesion</Text>
        </TouchableOpacity>
      <View style={estilos.VTitulo}>
      <Text style={estilos.subtitulo}>Registrar Cuenta</Text>
      </View>
      <TextInput
        style={estilos.input1}
        placeholder="Nombre de usuario"
        placeholderTextColor="#666"
        value={Nuser}
        onChangeText={setNuser}
      />
      <TextInput
        style={estilos.input1}
        placeholder="Contraseña"
        placeholderTextColor="#666"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
            <TextInput
        style={estilos.input2}
        placeholder="Correo Electronico"
        placeholderTextColor="#666"
        value={Email}
        onChangeText={setEmail}
      />
      
      <View style={estilos.VButtons}>
      <TouchableOpacity style={estilos.boton}>
        <Text onPress={handleRegister} style={estilos.textoBoton}>Registrarse</Text>
      </TouchableOpacity>
      </View >
      <Image style={estilos.imagenCirculosI} source={require('../assets/CirculoNInferior.png')}/>
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

  loginButton: {
    position: 'absolute',
    top: 40,
    right: 0,
    backgroundColor: '#fff',
    paddingLeft: 30,
    paddingRight: 20,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
   
  },
  loginText: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Amiri-Bold',
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
    marginBottom: 50,
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