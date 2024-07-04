import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Alert, Modal} from 'react-native';
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { auth, db } from '../config/FirebaseConfig';

export default function RegistrarMed() {
    const [Medica, setMedica] = useState('');
    const [Dosis, setDosis] = useState('');
    const [time, setTime] = useState(new Date());
    const [CporD, setCporD] = useState('');
    const [Frecuencia, setFrecuencia] = useState('');
    const [showHour, setShowHour] = useState(false);
  
  const navigation = useNavigation();


  function onTimeChange(event, selectedTime) {
    const currentTime = selectedTime || time;
    setShowHour(false);
    setTime(currentTime);
  }

  async function handleRegister() {
    if (!Medica === '' || !Dosis === '' || !time || !CporD === '' || !Frecuencia === '' || !CporD === '') {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    try {
      const user = auth.currentUser;
      if (user) {
        await db.collection('Usuarios').doc(user.uid).collection('Medicamentos').add({
          Medicamentos: Medica,
          Dosis,
          CantidadPdia: CporD,
          Hora: time.toTimeString().split(' ')[0],
          Frecuencia: Frecuencia,
        });
        Alert.alert('Éxito', 'Medicamento registrada correctamente');
        navigation.navigate('MenuMedica');
      } else {
        Alert.alert('Error', 'No se pudo encontrar al usuario');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../assets/LVidaSanaBL.png')} resizeMode="contain" />
        <TouchableOpacity style={styles.settingsIcon}>
        <Image source={require('../assets/ConfigIcon.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
      <View style={styles.ContainerTitle}>
      <View style={styles.ContainerButton}>
      <View style={styles.ContainerIcon}>
      <Image style={styles.cardIcon} source={require('../assets/GestionMed.png')} />
      </View>
      <View style={styles.card}>
        <Text  style={styles.cardText}>Gestion de Medicamentos</Text>
        <Ionicons name="chevron-down-outline" size={24} color="#000" />
      </View>
      </View>
      </View>
      <Text  style={styles.TextInput}>Nombre del Medicamento</Text>
        <View style={styles.dropdownContainer}>
        <Image source={require('../assets/MedicaIcon.png')} style={styles.icon2} />
          <TextInput
            style={styles.input}
            placeholder="Ingrese el nombre"
            placeholderTextColor="#666"
            value={Medica}
            onChangeText={setMedica}
          />
        </View>
        <Text  style={styles.TextInput}>Dosis</Text>
        <View style={styles.dropdownContainer}>
        <Image source={require('../assets/DosisIcon.png')} style={styles.icon2} />
          <TextInput
            style={styles.input}
            placeholder="Ingrese la dosis"
            placeholderTextColor="#666"
            value={Dosis}
            onChangeText={setDosis}
          />
        </View>
        <Text  style={styles.TextInput}>Cantidad de veces por día</Text>
        <View style={styles.dropdownContainer}>
          <Ionicons name="timer-outline" size={24} color="#000" />
          <TextInput
            style={styles.input}
            placeholder="Ingrese la cantidad"
            placeholderTextColor="#666"
            value={CporD}
            onChangeText={setCporD}
          />
        </View>
        <Text style={styles.TextInput}>Hora de inicio de dosis</Text>
        <View style={styles.inputFecha}>
          <Ionicons name="time-outline" size={24} color="#000" />
          <TouchableOpacity onPress={() => setShowHour(true)}>
            <TextInput
              style={styles.input}
              placeholder="HH:MM"
              placeholderTextColor="#666"
              editable={false}
              value={time.toTimeString().split(' ')[0]}
            />
          </TouchableOpacity>
          {showHour && (
            <DateTimePicker
              value={time}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={onTimeChange}
            />
          )}
        </View>
        
        <Text  style={styles.TextInput}>Frecuencia</Text>
        <View style={styles.inputContainer}>
        <Ionicons name="timer-sharp" size={24} color="#000" />
          <TextInput
            style={styles.input}
            placeholder="Ingrese la frecuencia"
            placeholderTextColor="#666"
            value={Frecuencia}
            onChangeText={setFrecuencia}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('MenuMedica')} style={styles.backButton}>
            <Ionicons name="arrow-back-outline" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRegister} style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A8DAE0',
  },
  header: {
    width: '100%',
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor:'#105963'
  },
  logo: {
    height: 60,
    width: 120,
  },
  icon: {
    height: 24,
    width: 24,
  },
  formContainer: {
    flex: 1,
    padding: 20,
    
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 17,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  picker: {
    flex: 1,
  },

  IconInput:{

    width: 25,
    height: 25

  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 17,
    paddingHorizontal: 15,
    marginBottom: 20,
  },

  inputFecha: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 17,
    paddingHorizontal: 15,
    paddingVertical: 13,
    marginBottom: 20,
  },

  TextInput:{
    paddingLeft: 20
  },
  
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    paddingLeft: 15
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20%',
    
  },
  backButton: {
    backgroundColor: '#fff',
    padding: 15,
    width: '20%',
    position: 'relative',
    right: 18,
    borderTopRightRadius: 25,
    borderBottomRightRadius:25
  },
  registerButton: {
    backgroundColor: '#fff',
    padding: 15,
    width: '26%',
    position: 'relative',
    left: 18,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius:25
  },
  registerButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  ContainerButton:{
    backgroundColor: '#ffffff',
    width: '90%',
    borderRadius: 35,
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },

  ContainerIcon:{
    backgroundColor: '#A8DAE0',
    height: 60,
    justifyContent: 'center',
    borderRadius: 50
  },

  cardIcon: {
    height: 40,
    width: 40,
    margin: 10,
  },
  cardText: {
    flex: 1,
    fontSize: 16,
  },

  card: {
    alignItems: 'center',
    width: '85%',
    marginLeft: 10,
    marginRight: 20,
    flexDirection: 'row',
  },

  ContainerTitle:{
    alignItems: 'center',
    marginBottom: 70
  },

  arrowIcon: {
    height: 24,
    width: 24,
  },

  icon2: {
    height: 30,
    width: 29,
},
});