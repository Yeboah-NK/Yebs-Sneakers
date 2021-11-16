import React from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { CurrentRenderContext } from '@react-navigation/core';


export default function LogIn({ navigation }) {

    return (
        <View style={{flex:1,marginTop: '18%',}}>
        
            
                <Text style={{fontSize:25,color:'black', alignSelf:'center', marginTop:30, fontSize:40, fontWeight:'500'}} > Login </Text>
                
            <View style={{marginTop: '30%',alignItems: 'center',}}>

                <TextInput spellCheck={false}  style={{borderWidth: 1,borderColor:'black',borderRadius: 20,width: '88%',fontSize: 20,padding: 10,color: 'Blue',}} placeholder='Email*' />
                <TextInput  secureTextEntry={true}   style={{marginTop: '10%',borderWidth: 1,borderColor:'black',borderRadius: 20,width: '88%',fontSize: 20, padding: 10, color:'blue'}} placeholder='Password*' />
                <View style={{marginRight: '-37%',marginTop: '3%',}}>
                    <Button title='Forgot your password?' color='#9c988f' />
                </View>

                <TouchableOpacity onPress={()=> (navigation.navigate('Home'))}>
                    <View style={{marginTop: '20%',borderWidth: 2,borderColor: 25,width: 200,alignItems: 'center',padding: 5,}}>
                        <Text style={{fontSize: 25, color: 'black',}}> Login </Text>
                    </View>
                </TouchableOpacity>
                
                <Text> Or Login with</Text>

                <View style={{flexDirection:'row', marginTop:20}}>
                    <View>
                    <AntDesign name="google" size={24} color="black" />
                    </View>

                    <View style={{paddingHorizontal: 20}}>
                    <AntDesign name="apple1" size={24} color="black" />
                    </View>

                    <View>
                    <FontAwesome name="facebook" size={24} color="black" />
                    </View>
                </View>

                


            </View>
            
        </View>
        
    );
}