import React, {useState} from 'react';
import { View, Text, TextInput,Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from '@react-native-picker/picker';
import { Calendar } from 'react-native-calendars';
import { db, auth } from '../config/FirebaseConfig';
import { useNavigation } from '@react-navigation/native';


 function PantallaDatosPer(){

  const [selectSex, setSelectSex] = useState('');
  const [Date, setDate] = useState('');
  const [Name, setName] = useState('');
  const [Altura, setAltura] = useState('');
  const [Peso, setPeso] = useState('');
  const [show, setShow] = useState(false);

  const navigation = useNavigation();

  async function handleSave() {
    if (!Name || !Date || !selectSex || !Altura || !Peso) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    try {
      const user = auth.currentUser;
      if (user) {
        await db.collection('Usuarios').doc(user.uid).update({
          Nombre: Name,
          FechaNacimiento: Date,
          sexo: selectSex,
          Altura: Altura,
          Peso: Peso
        });
        Alert.alert('Éxito', 'Datos guardados correctamente');
        navigation.navigate('Login');
      } else {
        Alert.alert('Error', 'No se pudo encontrar al usuario');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  function onDayPress(day){
    setDate(day.dateString);
    setShow(false);
  };

  function showCalendar(){
    setShow(true);
  };


  return (
    <View style={estilos.container}>
      <LinearGradient colors={['#E0F7FA', '#3A909B']} style={estilos.gradient}>
        <View style={estilos.header}>
        <Image style={estilos.title} source={require('../assets/LVidaSanaBL.png')} resizeMode="contain"/>
        </View>
        <View style={estilos.Continfo}>
        <Text style={estilos.infoText}>
          Para tener un mejor seguimiento de tu salud necesitamos que nos brindes la siguiente información
        </Text>
        </View>
        <View style={estilos.inputContainer}>
          <Text style={estilos.Labelinput}>Nombre</Text>
          <TextInput value={Name} onChangeText={setName} style={estilos.input} placeholder="Completar" placeholderTextColor="#666" />
          <Text style={estilos.Labelinput}>Fecha de nacimiento</Text>
          <TouchableOpacity onPress={showCalendar}>
            <TextInput
              style={estilos.input}
              placeholder="dd/mm/aa"
              placeholderTextColor="#666"
              editable={false}
              value={Date}
            />
          </TouchableOpacity>
          {show && (
            <Calendar
              onDayPress={onDayPress}
              markedDates={{
                [Date]: { selected: true, marked: true, selectedColor: 'blue' }
              }}
            />
          )}
          <Text style={estilos.Labelinput}>Sexo</Text>
          <View style={estilos.inputSelect}> 
          <Picker
            selectedValue={selectSex}
            onValueChange={(itemValue) => setSelectSex(itemValue)}
          >
            <Picker.Item label="Seleccionar" value="" />
            <Picker.Item label="Masculino" value="masculino" />
            <Picker.Item label="Femenino" value="femenino" />
          </Picker>
          </View>
          <Text style={estilos.Labelinput}>Altura</Text>
          <TextInput value={Altura} onChangeText={setAltura} style={estilos.input} placeholder="Ingresar" placeholderTextColor="#666" />
          <Text style={estilos.Labelinput}>Peso</Text>
          <TextInput value={Peso} onChangeText={setPeso} style={estilos.input} placeholder="Ingresar" placeholderTextColor="#666" />
          <View style={estilos.buttonContainer}>
          <TouchableOpacity onPress={handleSave} style={estilos.button}>
            <Text style={estilos.buttonText}>Guardar</Text>
          </TouchableOpacity>
          </View>
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

  buttonContainer:{
    alignItems: 'center'
  },

  button: {
    width:'30%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
});

export default PantallaDatosPer;