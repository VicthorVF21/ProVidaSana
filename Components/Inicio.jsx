import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function PantallaInicio() {

  const router = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../assets/LVidaSanaBL.png')} resizeMode="contain" />
        <TouchableOpacity style={styles.settingsIcon}>
          <Image source={require('../assets/ConfigIcon.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.userInfo}>
        <View style={styles.userIconContainer}>
        <Image style={styles.userIcon} source={require('../assets/PicUser.png')} />
        </View>
        <Text style={styles.userName}>Usuario</Text>
      </View>
      <View style={styles.ContainerButton}>
      <View style={styles.ContainerIcon}>
      <Image style={styles.cardIcon} source={require('../assets/Runingico.png')} />
      </View>
      <TouchableOpacity style={styles.card} onPress={() => router.navigate('MenuActividadF')}>
        <Text  style={styles.cardText}>Actividad física</Text>
        <Ionicons name="chevron-forward-outline" size={24} color="#000" />
      </TouchableOpacity>
      </View>
      <View style={styles.ContainerButton}>
      <View style={styles.ContainerIcon}>
      <Image style={styles.cardIcon} source={require('../assets/CalendarMed.png')} />
      </View>
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>Actividad física</Text>
        <Ionicons name="chevron-forward-outline" size={24} color="#000" />
      </TouchableOpacity>
      </View>
      <View style={styles.ContainerButton}>
      <View style={styles.ContainerIcon}>
      <Image style={styles.cardIcon} source={require('../assets/GestionMed.png')} />
      </View>
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>Actividad física</Text>
        <Ionicons name="chevron-forward-outline" size={24} color="#000" />
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
    backgroundColor:'#105963'

  },
  logo: {
    height: 60,
    width: 120,
  },
  settingsIcon: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  icon: {
    height: 24,
    width: 24,
  },
  userInfo: {
    position: 'relative',
    bottom: 40,
    alignItems: 'center',
    marginVertical: 20,
  },

  userIconContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
    marginBottom: 10,
    borderRadius: 40,
    height: 90,
    width: 90
  },
  userIcon: {
    height: 60,
    width: 60,
   
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    alignItems: 'center',
    width: '85%',
    marginLeft: 10,
    marginRight: 20,
    flexDirection: 'row',
  },

  ContainerButton:{
    backgroundColor: '#ffffff',
    width: '90%',
    borderRadius: 35,
    marginBottom: 60,
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
  },
});