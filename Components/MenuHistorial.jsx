import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function MenuHistorial() {


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
                    <Text style={styles.cardText}>Actividad física</Text>
                    <Ionicons name="chevron-down-outline" size={24} color="#000" />
                </View>
            </View>
            <View style={styles.dropdownContainer}>
            <Image style={styles.cardIcon1} source={require('../assets/Historial.png')} />
               <Text style={styles.TextCard}>Historial</Text>
            </View>
            
            
        <View style={styles.inputContainer}>
        <Image source={require('../assets/ActRealizada.png')} style={styles.icon1} />
          <TouchableOpacity onPress={() => navigation.navigate('TablaDist')} style={styles.card1}>
            <Text style={styles.TextCard} >Actividades realizadas</Text>
            <Ionicons name="chevron-down-outline" size={24} color="#000" />
        </TouchableOpacity>
        </View>
            
        <View style={styles.inputContainer}>
        <Image source={require('../assets/EstAnimo.png')} style={styles.icon2} />
        <TouchableOpacity onPress={() => navigation.navigate('TablaTiemp')} style={styles.card1}>
            <Text style={styles.TextCard}>Estados de animo</Text>
            <Ionicons name="chevron-down-outline" size={24} color="#000" />
        </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
        <Image source={require('../assets/Metas.png')} style={styles.icon1} />
        <TouchableOpacity onPress={() => navigation.navigate('TablaPasos')} style={styles.card1}>
            <Text style={styles.TextCard}>Metas</Text>
            <Ionicons name="chevron-down-outline" size={24} color="#000" />
        </TouchableOpacity>
        </View>
        
            <TouchableOpacity onPress={() => navigation.navigate('MenuActividadF')} style={styles.backButton}>
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
        marginTop: 90,
        width:'100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    backButton: {
        marginTop: '35%',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 25,
        width: '30%',
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

    TextCard:{

        fontSize: 15
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
        width: 35,
        marginRight: 100
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

    card1: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 15,
        width: '95%',
        justifyContent: 'space-between'
    },

    dropdownContainer: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 17,
        paddingHorizontal: 15,
        marginBottom: 70,
        width: '85%',
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
        borderRadius: 25,
        paddingHorizontal: 15,
        marginBottom: 40,
        height: 50,
        width: '85%'
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

      icon1: {
        height: 30,
        width: 25,
    },

    icon2: {
        height: 30,
        width: 29,
    },
});