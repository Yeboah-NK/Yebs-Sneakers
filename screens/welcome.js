import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Welcome({ navigation }) {
    const bgimage = {uri:'https://images.unsplash.com/photo-1585232004423-244e0e6904e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHNuZWFrZXJzfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60'};
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        
        <ImageBackground style={styles.img} source={bgimage} >
            <Text style={styles.YS}> Yebs Sneakers </Text>
            <TouchableOpacity onPress={()=> (navigation.navigate('LogIn'))}>
                <View style={styles.snview} >
                    <Text style={styles.NK}> Shop Now! </Text>
                </View>
            </TouchableOpacity>
            <View style= {styles.viewProject}>
                <Text style= {styles.viewNamT}> Already have an account? </Text>
                <Button title='Login In' color={'white'}onPress={()=> (navigation.navigate('LogIn'))}   />
            </View>

        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  inputs: {
    borderWidth: 1,
    borderColor: 'grey',
    width: 200,
  },

  img: {
    width: '100%',
    height:'100%',
    alignContent: 'center'

  },

  YS:{
      fontSize:50,
      color: 'white',
      marginTop: '160%',
      alignSelf: 'center',
  },

  NK:{
        fontSize:40,
        color:'black',
        marginTop:10,
        alignSelf: 'center',
        justifyContent: 'center'
  },

  snview: {
      borderWidth:1,
      backgroundColor: 'white',
      flexDirection: 'row',

      // justifyContent: 'center',
      // alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 25,
      padding: 5,
    },

    viewProject: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        position:'absolute',
        bottom: '5%',
        alignSelf:'center',
    },

    viewNamT: {
        fontSize: 20,
        color: 'white',
    },


  
});
