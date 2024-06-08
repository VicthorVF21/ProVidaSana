import React from 'react';
import { View, Text, TextInput,Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from '@react-native-picker/picker';

 function PantallaDatosPer(){

  const [selectedSex, setSelectedSex] = React.useState('');

  return (
    <View style={estilos.container}>
      <LinearGradient colors={['#E0F7FA', '#3A909B']} style={estilos.gradient}>
        <View style={estilos.header}>
        <Image style={estilos.title} source={require('../assets/LVidaSanaBL.png')} resizeMode="contain"/>
          {/* <Image source={require('../assets/user-icon.png')} style={estilos.icon} /> */}
        </View>
        <View style={estilos.Continfo}>
        <Text style={estilos.infoText}>
          Para tener un mejor seguimiento de tu salud necesitamos que nos brindes la siguiente información
        </Text>
        </View>
        <View style={estilos.inputContainer}>
          <Text style={estilos.Labelinput}>Nombre</Text>
          <TextInput style={estilos.input} placeholder="Completar" placeholderTextColor="#666" />
          <Text style={estilos.Labelinput}>Fecha de nacimiento</Text>
          <TextInput style={estilos.input} placeholder="dd/mm/aa" placeholderTextColor="#666" />
          <Text style={estilos.Labelinput}>Sexo</Text>
          <View style={estilos.inputSelect}> 
          <Picker
            selectedValue={selectedSex}
            onValueChange={(itemValue) => setSelectedSex(itemValue)}
          >
            <Picker.Item label="Seleccionar" value="" />
            <Picker.Item label="Masculino" value="masculino" />
            <Picker.Item label="Femenino" value="femenino" />
          </Picker>
          </View>
          <Text style={estilos.Labelinput}>Altura</Text>
          <TextInput style={estilos.input} placeholder="Ingresar" placeholderTextColor="#666" />
          <Text style={estilos.Labelinput}>Peso</Text>
          <TextInput style={estilos.input} placeholder="Ingresar" placeholderTextColor="#666" />
          <TouchableOpacity style={estilos.button}>
            <Text style={estilos.buttonText}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor:'#105963',
  },
  title: {
    height: 70,
    width: 150,
  },
  icon: {
    width: 30,
    height: 30,
  },
  infoText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginVertical: 20,
    padding: 5,
  },

  Continfo:{
    backgroundColor:'#FFFFFF78',
    marginBottom: 30,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 10,
  },

  inputContainer: {
    width: '90%',
  },

  Labelinput:{
    marginLeft: 10,
    fontSize: 20,
    
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 10,
    marginBottom: 15,
   fontSize: 17,
  },

  inputSelect:{
    backgroundColor: '#fff',
    borderRadius: 30,
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default PantallaDatosPer;