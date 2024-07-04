import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { db, auth } from '../config/FirebaseConfig';


export default function HistMetas() {

    const [metas, setMetas] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        async function fetchMetas () {
            const user = auth.currentUser;
            if (user) {
                const metasRef = db.collection('Usuarios').doc(user.uid).collection('Metas');
                const snapshot = await metasRef.get();
                if (!snapshot.empty) {
                    const fetchedMetas = snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setMetas(fetchedMetas);
                }
            }
        };

        fetchMetas();
    }, []);

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
            <Ionicons style={styles.cardIcon1} name="document-text-outline" size={30} color="#000" />
               <Text style={styles.TextCard}>Metas Registradas</Text>
            </View>
            <ScrollView style={styles.tableContainer}>
            <LinearGradient colors={['#93D5DD', '#32909C']} style={styles.table}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCellHeader}>Tipo de Meta</Text>
                        <Text style={styles.tableCellHeader}>Distancia</Text>
                        <Text style={styles.tableCellHeader}>Tiempo</Text>
                        <Text style={styles.tableCellHeader}>Pasos</Text>
                        <Text style={styles.tableCellHeader}>Actividad</Text>
                    </View>
                    {metas.map(meta => (
                        <View key={meta.id} style={styles.tableRow}>
                            <Text style={styles.tableCell}>{meta.TipoMeta}</Text>
                            <Text style={styles.tableCell}>{meta.Distancia}</Text>
                            <Text style={styles.tableCell}>{meta.Tiempo}</Text>
                            <Text style={styles.tableCell}>{meta.CantidadPasos}</Text>
                            <Text style={styles.tableCell}>{meta.Categoria}</Text>
                        </View>
                    ))}
                </LinearGradient>
        </ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('MenuHistorial')} style={styles.backButton}>
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

    ContainerBtn:{
        marginTop: 90,
        width:'100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    backButton: {
        marginBottom:'10%',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 25,
        width: '30%',
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
        marginBottom: 70,
        width: '85%',
      },

      tableContainer: {
        width: '90%',
        marginBottom:'46%',
      },
   
      table: {
    
        borderRadius: 10,
      },
      tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 10,
      },
      tableCellHeader: {
        flex: 1,
        fontWeight: 'bold',
      },
      tableCell: {
        flex: 1,
      },

      editButton: {
        backgroundColor: '#00A86B',
        borderRadius: 15,
        padding: 5,
        marginBottom: 5,
        alignItems: 'center',
        backgroundColor: '#fff'
      },
      deleteButton: {
        alignItems: 'center',
        backgroundColor: '#FF6347',
        borderRadius: 15,
        padding: 5,
        backgroundColor: '#fff'
      },
      buttonText: {
        color: '#000',
        fontWeight: 'bold',
      },

});