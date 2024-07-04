import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function MenuMedica() {

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
                    <Image style={styles.cardIcon} source={require('../assets/GestionMed.png')} />
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Gestion de Medicamentos</Text>
                    <Ionicons name="chevron-down-outline" size={24} color="#000" />
                </View>
            </View>
            <View style={styles.ContainerOptions}>
            <Ionicons name="calendar-number-outline" size={24} color="#000" />
            <TouchableOpacity onPress={() => navigation.navigate('ReMedica')} style={styles.TextOptionR}>
                    <Text>Registrar Medicamento</Text>
                </TouchableOpacity>
                <Ionicons name="menu-sharp" marginLeft={65} size={24} color="#000" />
            </View>
            <View style={styles.ContainerOptions}>
                <Ionicons name="notifications-sharp" marginRight={14} size={24} color="#000" />
                <TouchableOpacity>
                    <Text>Activar notificaciones de recordatorio </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.ContainerOptions}>
                <Ionicons name="document-text-outline" marginRight={14} size={24} color="#000" />
                <TouchableOpacity onPress={() => navigation.navigate('HistMedica')} style={styles.TextOptionR1}>
                    <Text>Registro de Medicamentos</Text>
                </TouchableOpacity>
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
    backButton: {
        marginTop: '45%',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 25,
        width: '30%',
        alignItems: 'center'
    },

    ContainerButton: {
        marginTop: 50,
        backgroundColor: '#ffffff',
        width: '90%',
        borderRadius: 35,
        marginBottom: 90,
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
        
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#32909C',
        borderRadius: 17,
        paddingHorizontal: 15,
        marginBottom: 40,
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
        marginLeft: 60,
        
      },

      TextOptionR1:{

        marginLeft: 40,

      }
});