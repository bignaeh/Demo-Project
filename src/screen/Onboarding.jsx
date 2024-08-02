import { StyleSheet, Text, View, SafeAreaView,ScrollView,Image, TouchableOpacity } from 'react-native'
import React from 'react'

function Onboarding ({navigation}) {
  return (
    <SafeAreaView style={styles.Main}>
        <View style={styles.MotherView}>
            <View style={styles.LogoTextView}>
            <Image source={require('../../assets/Flatpay.png')} style={styles.LogoView}/>
            <Text allowFontScaling={false} style={styles.FlatpayText}>Flatpay</Text>
            </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate ('LoginScreen')} style={styles.LoginView}>
                <Text style={styles.LoginText}>Login</Text>

        </TouchableOpacity>
       

    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    Main:{
        backgroundColor:'#08003F',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding:20
    },
    MotherView: {
        alignItems: 'center',
        backgroundColor:'#08003F',
        padding:10

          
    },
    LogoTextView: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom:20,
            marginTop:235
          
          
    },
    LogoView: {
            width: 110,
            height: 110,
            resizeMode:'contain'
    },
    FlatpayText: {
            fontSize: 18,
            fontFamily: 'gilroy-bold',
            color: 'white',
            marginBottom:10,
            right:18
    },

    LoginView:{
        borderRadius:100,
        backgroundColor:'white',
        paddingVertical:15,
        paddingHorizontal:100,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        marginTop:225
    },

    LoginText:{
        fontSize:15,
        fontFamily:'gilroy-bold',
        alignSelf:'center'
    }
});

export default Onboarding