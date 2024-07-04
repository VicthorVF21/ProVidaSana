import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Alert, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function InfoSalud() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  const navigation = useNavigation();

  async function fetchProducts() {
    try {
      const response = await fetch('https://www.fruityvice.com/api/fruit/all');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      Alert.alert('Error', 'No se pudieron obtener los productos');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  function handleSearch(text) {
    setSearch(text);
  };

  function renderProduct({ item }) {
    return (
      <View style={styles.productContainer}>
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productFamily}>Familia: {item.family}</Text>
          <Text style={styles.productNutritional}>Calorías: {item.nutritions.calories}</Text>
          <Text style={styles.productNutritional}>Carbohidratos: {item.nutritions.carbohydrates}</Text>
          <Text style={styles.productNutritional}>Grasa: {item.nutritions.fat}</Text>
          <Text style={styles.productNutritional}>Proteína: {item.nutritions.protein}</Text>
          <Text style={styles.productNutritional}>Azúcar: {item.nutritions.sugar}</Text>
        </View>
      </View>
    );
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar producto..."
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList
      style={styles.container1}
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={item => item.name}
        initialNumToRender={3} 
        maxToRenderPerBatch={3} 
      />
      <View style={styles.ContainerButton}>
      <TouchableOpacity onPress={() => navigation.navigate('MenuActividadF')} style={styles.backButton}>
                <Ionicons name="arrow-back-outline" size={30} color="#000" />
            </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#A8DAE0',
  },

  container1: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },

  searchInput: {
    backgroundColor: '#fff',
    height: 40,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin:10,
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    backgroundColor:'#105963',
    borderRadius: 20,
  },
  productInfo: {
    
    flex: 1,
  },
  productName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  productFamily: {
    color: '#fff',
    fontSize: 16,
  },
  productNutritional: {
    color: '#fff',
    fontSize: 14,
  },

  ContainerButton:{
    marginTop: '20%',
    width: '100%',
    alignItems: 'center',
    marginBottom: '5%'
  },

  backButton: {
    
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 25,
    width: '30%',
    alignItems: 'center'
},
});