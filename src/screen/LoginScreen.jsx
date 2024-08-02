import { StyleSheet, Text, View, ImageBackground,SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather, AntDesign,Ionicons } from '@expo/vector-icons';
import { useState } from 'react'

function LoginScreen({navigation,value,onChangeText}) {
    const[secureTextEntry,setSecureTextEntry]= useState(true);

    const toggleSecureEntry=()=>{
      setSecureTextEntry(!secureTextEntry);
    };

    const[checked,setChecked] = useState(false);
    const toggleIcon =()=>{
      setChecked(!checked)
    };

  return (
    <SafeAreaView style={styles.Main}>
        {/* main screen */}
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.MotherView}>
              <Image source={require('../../assets/Flatpay.png')} style={styles.LogoView}/>
              <Text style={styles.LoginText}>Login</Text>
              <Text style={styles.WelcomeText}>Welcome back to the app</Text>

              {/* the Email and password entry phase */}
              <Text style={styles.EmailText}>Email/Phone No</Text>

              <View style={styles.InputView}>
              <TextInput placeholder='Email/Phone No' placeholderTextColor={'white'} cursorColor={'white'} style={styles.TextInput}/>
              </View>

              <View style={styles.PassView}>
                <Text style={styles.PassText}>Password</Text>
                  <TouchableOpacity onPress={() => navigation.navigate ()}>
                  <Text style={styles.ForgotText}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.InputView}>
                <TextInput
                style={styles.TextInput}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                keyboardType='white'
                placeholderTextColor={'white'}
                placeholder="Enter Password"/>

                <TouchableOpacity onPress={toggleSecureEntry} style={{padding:5}}>
                <Feather name={secureTextEntry ? 'eye' : 'eye-off'} size={20} color="white" />
                </TouchableOpacity>
              </View>

                {/* keep me logged in */}

                <View style={styles.MainCheck}>
                  <TouchableOpacity onPress={toggleIcon}>
                  {checked ? (<AntDesign name="checksquare" size={20} color="white" />)
                  :(<AntDesign name="checksquareo" size={20} color="white" />)}

                  </TouchableOpacity>
                  <Text style={{color:'white', fontFamily:'gilroy-regular',marginLeft:10}}>Keep me signed in</Text>
                  
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={styles.LoginView}>
                  <Text style={styles.LoginText1}>Login</Text>
                </TouchableOpacity>

                <Text style={{fontFamily:'gilroy-regular',alignSelf:'center',fontSize:15,color:'white', marginTop:25}}>or sign in with</Text>

                <View style={styles.GoogleLogo}>
                <Image source={require('../../assets/LogoGoogle.png')} style={styles.GoogleView}/>
                <TouchableOpacity onPress={() => navigation.navigate ()}>
                <Text style={styles.GoogleText}>Continue with Google</Text>
                </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate ()}>
                <Text style={{fontFamily:'gilroy-bold',fontSize:15,color:'white',alignSelf:'center', alignItems:'center', marginTop:50}}>Create an account</Text>
                </TouchableOpacity>

              


            </View>

        </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    Main:{
        backgroundColor:'#08003F',
        flex:1
    },

    MotherView:{
      marginHorizontal:18,
      backgroundColor:'#08003F',
    },

    LogoView:{
      width:70,
      height:70,
      alignSelf:'flex-end',
      marginTop:15
    },
    
    LoginText:{
      fontFamily:'gilroy-bold',
      fontSize:30,
      marginTop:30,
      color:'white'
    },

    WelcomeText:{
      fontSize:15,
      fontFamily:'gilroy-regular',
      marginTop:10,
      color:'white'
    },

    EmailText:{
      fontFamily:'gilroy-bold',
      fontSize:16,
      marginTop:45,
      color:'white'
    },

    InputView:{
      borderRadius:10,
      borderColor:'white',
      borderWidth:0.5,
      width:'100%',
      height:45,
      justifyContent:'space-between',
      paddingHorizontal:15,
      marginTop:8,
      flexDirection:'row',
      alignItems:'center'
    },

    TextInput:{
      color:'white'
    },

    PassView:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginTop:45
  
    },

    PassText:{
      fontFamily:'gilroy-bold',
      fontSize:16,
      marginBottom:5,
      color:'white'
    },

    ForgotText:{
      fontSize:12,
      fontFamily:'gilroy-bold',
      flexDirection:'row',
      alignItems:'center',
      color:'white'
    },

    MainCheck:{
      alignItems:'center',
      flexDirection:'row',
      marginTop:45
    },

    LoginView:{
      borderRadius:30,
      backgroundColor:'white',
      marginTop:45,
      width:'100%',
      height:45,
      justifyContent:'center'
    },

    LoginText1:{
      fontFamily:'gilroy-bold',
      fontSize:18,
      alignSelf:'center'
    },

    GoogleLogo:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      marginTop:25,
      alignSelf:'center'

    },

    GoogleView:{
      width:30,
      height:30
    },

    GoogleText:{
      fontFamily:'gilroy-regular',
      fontSize:12,
      color:'white'
    }

})

export default LoginScreen