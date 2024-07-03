import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function MenuActF() {
  const navigation = useNavigation();

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
        <Text  style={styles.cardText}>Actividad física</Text>
        <Ionicons name="chevron-down-outline" size={24} color="#000" />
      </View>
      </View>
      <View style={styles.optionsContainer}>
        <View>
        <TouchableOpacity onPress={() => navigation.navigate('ActividadF')} style={styles.optionButton}>
        <Image style={styles.ImgButton} source={require('../assets/ActRealizada.png')} />
        </TouchableOpacity>
        <Text style={styles.optionText}>Actividad realizada</Text>
        </View>
        <View>
        <TouchableOpacity onPress={() => navigation.navigate('EstadoAnimo')} style={styles.optionButton}>
        <Image style={styles.ImgButton1} source={require('../assets/EstAnimo.png')} />
        </TouchableOpacity>
        <Text style={styles.optionText}>Estado de ánimo</Text>
        </View>
      </View>
      <View style={styles.optionsContainer}>
        <View>
        <TouchableOpacity onPress={() => navigation.navigate('MenuMeta')} style={styles.optionButton}>
        <Image style={styles.ImgButton1} source={require('../assets/Metas.png')} />
        </TouchableOpacity>
        <Text style={styles.optionText}>Metas</Text>
        </View>
        <View>
        <TouchableOpacity onPress={() => navigation.navigate('MenuHistorial')} style={styles.optionButton}>
        <Image style={styles.ImgButton} source={require('../assets/Historial.png')} />
        </TouchableOpacity>
        <Text style={styles.optionText}>Historial</Text>
        </View>
      </View>
      
      <TouchableOpacity onPress={() => navigation.navigate('Inicio')} style={styles.backButton}>
        <Ionicons name="arrow-back-outline" size={30} color="#000" />
      </TouchableOpacity>
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

  ImgButton:{
    width: 60,
    height: 70
  },

  ImgButton1:{
    width: 70,
    height: 70
  },

  optionText: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#105963'
  },
  backButton: {
    marginTop: '45%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 25,
    width: '30%',
    alignItems: 'center'
  },

  ContainerButton:{
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
});