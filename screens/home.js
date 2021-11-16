import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import AllProds from '../components/allprods';
import { NavigationContainer } from '@react-navigation/native';

export default function Home({navigation}) {

    const categories =[
        {text: 'All', key: '1'},
        {text: 'Adidas', key: '2'},
        {text: 'Puma', key: '3'},
        {text: 'Nike', key: '4'}
    ];

  return (
    <View style={styles.container}>
        <View style={styles.NK}>
            <TouchableOpacity>    
            <AntDesign name="arrowleft" size={24} color="black" style={styles.arrow} />
            </TouchableOpacity>
            <Text style={styles.YS}>YEBS SNEAKERS</Text>
            <TouchableOpacity onPress={()=> (navigation.navigate('Cart'))}>
            <Feather name="shopping-bag" size={24} color="black" style={styles.bag} />
            </TouchableOpacity>
        </View>
        <View style= {styles.searchBar}>

            <AntDesign name="search1" size={29} color="black" style={{paddingHorizontal: 10}} />
            <TextInput style={styles.searchBox} placeholder='Search...'/>
        </View>


        <ScrollView showsVerticalScrollIndicator={false}>
            <Text style= {styles.textCategories}> Categories </Text>
            <View> 
                <FlatList 
                    data={categories}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <View style= {styles.catView}>
                                <Text style= {styles.catItem} > {item.text} </Text>
                            </View>
                        </TouchableOpacity>
                    )} 
                    style= {styles.catList}
                />
            </View>

            <AllProds />
            
        </ScrollView>
      
        <View style={styles.bottomBar}>
            <TouchableOpacity>    
                <AntDesign name="home" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign name="search1" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign name="heart" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="person" size={24} color="white" />
            </TouchableOpacity>
            
        </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    },
  NK:{
      paddingTop:60,
      paddingBottom:10,
      backgroundColor:'#fffafa',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      
    },
  bottomBar:{
        paddingBottom:20,
        paddingTop:20,
        backgroundColor:'#232B2B',
        marginBottom:30,
        marginLeft:20,
        marginRight:20,
        borderRadius:15,
        flexDirection:'row',
        justifyContent:'space-evenly',
    },
arrow:{
    marginLeft:5,
    
},
bag:{
    marginRight:5,
    
},
YS:{
    fontSize:25,
    
},
textCategories: {
    marginTop: 20,
    marginLeft: -4,
    fontSize: 30,
    fontWeight: 'bold',
},

catList: {
    marginTop: 20,
},

catView: {
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 20,
    padding: 5,
    paddingLeft: 10,
    marginRight: 25,
    alignItems:'center',

},

catItem: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
},
searchBar: {
    // flex: 1,
    flexDirection: 'row',
    // alignContent: 'center',
    alignItems: 'center',
    // marginVertical: 10,
    width: '100%',
    backgroundColor: '#9ca3af', 
    paddingHorizontal: 10,
    height: '5%',
    marginRight: 10

},
searchBox: {
    fontSize: 20,
    color : 'black'
}

});