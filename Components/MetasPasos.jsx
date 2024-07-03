import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { db,auth } from '../config/FirebaseConfig';

export default function MetasPasos() {

    const [selectedPTime, setselectedPTime] = useState('');
    const [CPasos, setCpasos] = useState('');

    const navigation = useNavigation();

    async function RegisterMetaT() {
        if (selectedPTime === '' || CPasos === '') {
          Alert.alert('Error', 'Todos los campos son obligatorios');
          return;
        }
    
        try {
          const user = auth.currentUser;
          if (user) {
            await db.collection('Usuarios').doc(user.uid).collection('Metas').add({
              TipoMeta: 'Pasos',
              CantidadPasos: CPasos,
              Periodo: selectedPTime,
            });
            Alert.alert('Éxito', 'Meta registrada correctamente');
            setselectedPTime('');
            setCpasos('');
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
                <TouchableOpacity>
                    <Image source={require('../assets/ConfigIcon.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>
            
            <View style={styles.ContainerButton}>
                <View style={styles.ContainerIcon}>
                    <Image style={styles.cardIcon} source={require('../assets/Runingico.png')} />
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Actividad física</Text>
                    <Ionicons name="chevron-down-outline" size={24} color="#000" />
                </View>
            </View>
            <View style={styles.dropdownContainer}>
            <Image style={styles.cardIcon1} source={require('../assets/MetasHechas.png')} />
               <Text>Meta de Pasos</Text>
            </View>
            <View style={styles.formContainer}>
        <Text  style={styles.TextInput}>Cantidad de pasos</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="footsteps-sharp" size={24} color="#000" />
          <TextInput
            style={styles.input}
            placeholder="Ingresar cantidad de pasos"
            placeholderTextColor="#666"
            value={CPasos}
            onChangeText={setCpasos}
          />
        </View>
        <Text  style={styles.TextInput}>Perido de tiempo</Text>
        <View style={styles.dropdownContainer1}>
          <Ionicons name="timer-outline" size={24} color="#000" />
          <Picker
            selectedValue={selectedPTime}
            style={styles.picker}
            onValueChange={(itemValue) => setselectedPTime(itemValue)}
          >
            <Picker.Item label="Seleccionar" value="" />
            <Picker.Item label="Diario" value="Diario" />
            <Picker.Item label="Semanal" value="Semanal" />
            <Picker.Item label="Mensual" value="Mensual" />
          </Picker>
        </View>
        </View>
        <View style={styles.ContainerBtn}>
            <TouchableOpacity onPress={() => navigation.navigate('MenuMeta')} style={styles.backButton}>
                <Ionicons name="arrow-back-outline" size={30} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity onPress={RegisterMetaT} style={styles.ButtonRegistrar}>
                <Text style={styles.registerButtonText}>Guardar</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A8DAE0',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        paddingTop: 20,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
        backgroundColor: '#105963',
    },
    logo: {
        height: 60,
        width: 120,
    },
    icon: {
        height: 24,
        width: 24,
    },

    icon1: {
        height: 20,
        width: 29,
    },

    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 15,
        marginBottom: 20,
        width: '90%',
        marginTop: 20,
    },
    picker: {
        flex: 1,
        height: 50,
    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 30,
    },
    optionButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 50,
        width: 100,
        height: 100,
        margin: 10,
    },

    ImgButton: {
        width: 60,
        height: 70
    },

    ImgButton1: {
        width: 70,
        height: 70
    },

    optionText: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        color: '#105963'
    },
    ContainerBtn:{
        marginTop: '62%',
        width:'100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    backButton: {
        backgroundColor: '#fff',
        padding: 15,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        width: '25%',
        alignItems: 'center'
    },

    ButtonRegistrar:{
        backgroundColor: '#fff',
        padding: 15,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        width: '25%',
        alignItems: 'center'
    },

    registerButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
      },

    ContainerButton: {
        marginTop: 50,
        backgroundColor: '#ffffff',
        width: '90%',
        borderRadius: 35,
        marginBottom: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },

    ContainerIcon: {
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

    cardIcon1: {
        height: 40,
        width: 30,
        marginRight: 70
    },

    cardText: {
        flex: 1,
        fontSize: 16,
    },
    arrowIcon: {
        height: 24,
        width: 24,
        transform: [{ rotate: '90deg' }],
    },

    card: {
        alignItems: 'center',
        width: '85%',
        marginLeft: 10,
        marginRight: 20,
        flexDirection: 'row',
    },

    dropdownContainer: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 17,
        paddingHorizontal: 15,
        marginBottom: 40,
        width: '85%'
      },

      dropdownContainer1: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 17,
        paddingHorizontal: 15,
        marginBottom: 20,
        width: '85%'
      },
    picker: {
        flex: 1,
      },
      ContainerOptions:{
        
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#32909C',
        borderRadius: 17,
        paddingHorizontal: 15,
        marginBottom: 40,
        width: '85%',
        height: 55,
      },
      TextOptionR:{
        marginLeft: 70
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
        height: 40,
      },

      TextInput:{
        paddingLeft: 20,
        marginBottom: 4,
      },

      input: {
        height: 50,
        fontSize: 16,
        paddingLeft: 15
      },
});