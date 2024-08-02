import { StyleSheet, Text, View, ScrollView,SafeAreaView,TouchableOpacity,Image,TextInput} from 'react-native'
import React from 'react'
import { Modal } from 'react-native'
import { useState } from 'react'
import {Feather,FontAwesome6}from '@expo/vector-icons/Feather';

 function Me() {
  return (
    <SafeAreaView style={styles.Main}>
        <View style={styles.MotherView}>
            <ScrollView showsVerticalScrollIndicator={false}>

                {/* profile picture view */}
                <View style={styles.TopView}>
                <Image source={require('../../assets/User.png')} style={styles.UserView}/>

                <Text allowFontScaling={false} style={styles.NameText}>Hi,Nseabasi</Text>

               <TouchableOpacity>
               <Feather name="settings" size={24} color="white" />
               </TouchableOpacity>
                
                </View>

                <Text allowFontScaling={false}style={styles.TotalText}>Total Balance</Text>

                <FontAwesome6 name="naira-sign" size={24} color="white" />
                



            </ScrollView>
        </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    Main:{
        flex:1,
        backgroundColor:'#08003F'
    },

    MotherView:{
        padding:15,
        justifyContent:'center'
    },

    TopView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'

    },

    UserView:{
        width:45,
        height:45
    },

    NameText:{
        fontFamily:'gilroy-bold',
        fontSize:15,
        color:'white',
        marginRight:180

    }






})

export default Me