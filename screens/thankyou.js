import React from 'react';
import {  Text,   View,  ImageBackground, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';



export default function ThankYou() {

    return (
        <View style= {styles.tpContainer}>
            <StatusBar style='auto' />

            <ImageBackground resizeMode='contain' source={{uri:'https://media.istockphoto.com/photos/check-list-symbol-over-white-picture-id97759356?k=20&m=97759356&s=612x612&w=0&h=qdxZntOyE9DQEwk7zCYd94nrWFG_4wT5SPQI4-x_UGM='}} style={{  alignItems: 'center', flexDirection: 'column', width:'100%' }}>

                

                <Text style= {{ fontSize: 60, fontWeight: 'bold', color: '#aad', alignSelf: 'center', marginTop: 500,}}> Thank you!!</Text>

            </ImageBackground>

        </View>
    )
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
          color:'white',
          marginTop:10,
    },
  
    snview: {
        borderWidth:1,
        backgroundColor: 'black',
        alignItems: 'center',
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
  