import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { FlatList, TouchableOpacity, TouchableWithoutFeedback, Image, StyleSheet, Text, ScrollView, View } from 'react-native';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';



export default function AllProds(props) {

    const navigation = props.navigation;

    const categories =[
        {text: 'All', key: '1'},
        {text: 'Adidas', key: '2'},
        {text: 'Puma', key: '3'},
        {text: 'Nike', key: '4'}
    ];

const allP =[
    {img: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', price: 'GHC 200.00', title: 'White Airforce', key: '1',
        about:'The White Airforce is an Amazing sportswear for the rest of us.Its an affordable premium quality.The more you wear it thee more you will enjoy it.Our customers rated it top.Its also water & splash proof,making it the perfect companion on rain. '},
    {img: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c25lYWtlcnN8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', price: 'GHC 300.00', title: 'White nike airforce 1 low', key: '2',
        about:'The white nike Airforce 1 low delivers lightweight cushioning under every step for responsive comfort with foam support.'},
    {img: 'https://images.unsplash.com/photo-1550399865-ec7d23b18e8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c25lYWtlcnN8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', price: 'GHC 200.00', title: ' Black and white airmax 95',   key: '3',
        about:'The midsoles of these shoes are made with a maximum amount of dense material along the medial side of the shoe (under the arch) to help support the foot.'},
    {img: 'https://images.unsplash.com/photo-1621665421558-831f91fd0500?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNuZWFrZXJzfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', price: 'GHC 250.00', title: 'White and red athletic shoes ', key: '4' ,
        about:'The white and Red athletic shoes designed for a more curved foot with a higher arch and little to no pronation. Much of the weight is on the outside of the foot.'},
];
  return (
      <View>
       
            <View style= {styles.cardContainer}>
                <StatusBar style='auto' />
                <View>
                    <FlatList
                        data={allP}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                                        <TouchableWithoutFeedback onPress=
                                        {() => {navigation.navigate('ProdDetails', item)}}>
                                            <View style={styles.prodView}>
                                                <Image source={{uri: item.img}} style= {styles.prodImg} />
                                                <Text sty> {item.price} </Text>
                                                <Text> {item.title} </Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                        )}
                            
                    />
                </View>
            </View>
            
      
        </View>

    
  );
}


const styles = StyleSheet.create({
    
cardContainer: {
    marginTop: 25,
},

prodView: {
    borderRadius: 10,
    marginBottom: 25,
    marginTop: 20,
    width: 320,
    alignSelf: 'center',

},

prodImg: {
    width: 320,
    height: 320,
    marginBottom: 10,
    borderRadius: 5,
    resizeMode: 'cover',

},

prodPrice: {
    fontWeight:'bold',
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
},

prodTitle: {
    color: 'black',
    fontSize: 20,
    marginBottom: 10,
},
  
  
  
  });

