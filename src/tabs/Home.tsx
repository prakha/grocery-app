import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((json: Product[]) => setProducts(json));
  };
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../Images/images/menu.png')}
        rightIcon={require('../Images/images/cart.png')}
        title={'Grocery App'}
        onClickLeftIcon={() => {
          navigation.openDrawer();
        }}
        isCart={true}
      />
      <FlatList
        data={products}
        renderItem={({item}) => (
          <View style={styles.productItem}>
            <Image source={{uri: item.image}} style={styles.itemImage} />
            <View>
              <Text style={styles.name}>
                {item.title.length > 25
                  ? item.title.substring(0, 25) + '...'
                  : item.title}
              </Text>
              <Text style={styles.desc}>
                {item.description.length > 30
                  ? item.description.substring(0, 30) + '...'
                  : item.description}
              </Text>
              <Text style={styles.price}>{'$' + item.price}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productItem: {
    width: Dimensions.get('window').width,
    height: 100,
    marginTop: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
  },
  desc: {
    marginLeft: 20,
  },
  price: {
    color: 'green',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 5,
  },
});
