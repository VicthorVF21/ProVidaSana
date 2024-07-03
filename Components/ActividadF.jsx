import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Calendar } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { auth, db } from '../config/FirebaseConfig';

export default function RegistrarActividad() {
  const [selectedIntensity, setSelectedIntensity] = useState('');
  const [date, setDate] = useState('');
  const [activity, setActivity] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);

  const navigation = useNavigation();

  function onDayPress(day){
    setDate(day.dateString);
    setShowCalendar(false);
  };

  async function handleRegister() {
    if (activity === '' || date === '' || selectedIntensity === '') {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    try {
      const user = auth.currentUser;
      if (user) {
        await db.collection('Usuarios').doc(user.uid).collection('ActividadR').add({
          actividad: activity,
          fecha: date,
          intensidad: selectedIntensity,
          timestamp: new Date(),
        });
        Alert.alert('Éxito', 'Actividad registrada correctamente');
        navigation.navigate('MenuActividadF');
      } else {
        Alert.alert('Error', 'No se pudo encontrar al usuario');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

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
      <Image style={styles.cardIcon} source={require('../assets/Runingico.png')} />
      </View>
      <View style={styles.card}>
        <Text  style={styles.cardText}>Actividad física</Text>
        <Ionicons name="chevron-down-outline" size={24} color="#000" />
      </View>
      </View>
      </View>
      <Text  style={styles.TextInput}>Actividad Realizada</Text>
        <View style={styles.inputContainer}>
        <Image style={styles.IconInput} source={require('../assets/ArtMarcial.png')} />
          <TextInput
            style={styles.input}
            placeholder="Escriba la actividad"
            placeholderTextColor="#666"
            value={activity}
            onChangeText={setActivity}
          />
        </View>
        <Text  style={styles.TextInput}>Fecha</Text>
        <View style={styles.inputFecha}>
          <Ionicons name="calendar-outline" size={24} color="#000" />
          <TouchableOpacity onPress={() => setShowCalendar(true)}>
            <TextInput
              style={styles.input}
              placeholder="dd/mm/aa"
              placeholderTextColor="#666"
              editable={false}
              value={date}
            />
          </TouchableOpacity>
          {showCalendar && (
            <Calendar
              onDayPress={onDayPress}
              markedDates={{
                [date]: { selected: true, marked: true, selectedColor: 'blue' }
              }}
            />
          )}
        </View>
        <Text  style={styles.TextInput}>Nivel de intensidad</Text>
        <View style={styles.dropdownContainer}>
          <Ionicons name="trending-up-outline" size={24} color="#000" />
          <Picker
            selectedValue={selectedIntensity}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedIntensity(itemValue)}
          >
            <Picker.Item label="Seleccionar" value="" />
            <Picker.Item label="Baja" value="baja" />
            <Picker.Item label="Media" value="media" />
            <Picker.Item label="Alta" value="alta" />
          </Picker>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('MenuActividadF')} style={styles.backButton}>
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
    marginTop: '60%',
    
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
});