import { StyleSheet, Text, View, ImageBackground, SafeAreaView, ScrollView, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import { useState } from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';



function Dashboard({navigation, value, onChangeText, }) {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
  
    const toggleSecureEntry = () => {
      setSecureTextEntry(!secureTextEntry);
    };

    const [checked, setChecked] = useState(false);

    const toggleIcon = () => {
      setChecked(!checked);
    };
  return (
    <SafeAreaView style={styles.Main}>
        <ScrollView showsVerticalScrollIndicator={false}>

            {/* the top screen of the dashboard  */}
            <View style={styles.MotherView}>
                <View style={styles.TopView}>
                <TouchableOpacity onPress={() => navigation.navigate ()}>
                <AntDesign name="profile" size={25} color="white" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate()}>
                <AntDesign name="customerservice" size={25} color="white"  style={{marginLeft:275}}/>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigation.navigate()}>
                <Ionicons name="notifications-outline" size={25} color="white" style={{justifyContent:'space-between',marginLeft:6}}/>

                </TouchableOpacity>
                </View>

                {/* Dashboard View */}

                <View style={{marginTop:20}}>
                    <Text style={{fontFamily:'gilroy-bold', fontSize:15,color:'white'}}>Hi, Nseabasi</Text>

                </View>

                <View style={styles.DashboardView}>
                 
    <Text allowFontScaling={false} style={styles.BalanceText}>Available Balance:</Text>
    <TouchableOpacity onPress={toggleSecureEntry} style={{ flexDirection: 'row', alignItems: 'center' }}>
    <FontAwesome6 name="naira-sign" size={20} color="black" style={{marginLeft:15,left:10}}/>
    <Text allowFontScaling={false} style={{ fontSize: 25, fontFamily: 'gilroy-bold', marginLeft: 15, marginTop:4}}>
            {secureTextEntry ? '******' : '15000.00'} {/* Placeholder for actual balance */}
        </Text>
        <Feather name={secureTextEntry ? 'eye-off' : 'eye'} size={20} color="black" style={{marginLeft:165}} />
    </TouchableOpacity>
</View>


                {/* Options View on the screen after the dashboard */}
                <View style={styles.OptionView}>
                    <View style={styles.ListView}>

                        <TouchableOpacity onPress={() => navigation.navigate ()}>
                            <Image source={require('../../assets/Deposit.png')} style={styles.ScrollView}/>
                            <Text style={{fontFamily:'gilroy-regular', fontSize:12}}>Deposit</Text>
                        </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate ()}>
                            <Image source={require('../../assets/Withdraw.png')} style={styles.ScrollView}/>
                            <Text style={{fontFamily:'gilroy-regular', fontSize:12}}>Withdraw</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate ()}>
                            <Image source={require('../../assets/ATMcard.png')} style={styles.ScrollView}/>
                            <Text style={{fontFamily:'gilroy-regular', fontSize:12}}>ATM Card</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate ()}>
                            <Image source={require('../../assets/Loan.png')} style={styles.ScrollView}/>
                            <Text style={{fontFamily:'gilroy-regular', fontSize:12}}>Loan</Text>
                            </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.OptionView1}>

                    <View style={styles.ListView1}>
                        <TouchableOpacity onPress={() => navigation.navigate ('Airtime')}>
                            <Image source={require('../../assets/Airtime.png')} style={styles.ScrollView}/>
                            <Text style={{fontFamily:'gilroy-regular', fontSize:12}}>Airtime</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate ()}>
                            <Image source={require('../../assets/Data.png')} style={styles.ScrollView}/>
                            <Text style={{fontFamily:'gilroy-regular', fontSize:12}}>Data</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate ()}>
                            <Image source={require('../../assets/Betting.png')} style={styles.ScrollView}/>
                            <Text style={{fontFamily:'gilroy-regular', fontSize:12}}>Betting</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate ()}>
                            <Image source={require('../../assets/Invest.png')} style={styles.ScrollView}/>
                            <Text allowFontScaling={false} style={{fontFamily:'gilroy-regular', fontSize:12}}>Invest</Text>

                        </TouchableOpacity>
                    </View>

                    <View style={styles.ListView2}>
                        <TouchableOpacity onPress={() => navigation.navigate ()}>
                            <Image source={require('../../assets/Transportation.png')} style={styles.ScrollView}/>
                            <Text allowFontScaling={false} style={{fontFamily:'gilroy-regular', fontSize:12}}>Transport</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate ()}>
                            <Image source={require('../../assets/TV.png')} style={styles.ScrollView}/>
                            <Text allowFontScaling={false} style={{fontFamily:'gilroy-regular', fontSize:12,marginLeft:5}}>TV</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate ()}>
                            <Image source={require('../../assets/Electricity.png')} style={styles.ScrollView}/>
                            <Text allowFontScaling={false} style={{fontFamily:'gilroy-regular', fontSize:12}}>Electricity</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate ()}>
                            <Image source={require('../../assets/More.png')} style={styles.ScrollView}/>
                            <Text allowFontScaling={false} style={{fontFamily:'gilroy-regular', fontSize:12}}>More</Text>

                        </TouchableOpacity>
                    </View>
                </View>
                    <View style={styles.LogoView}>
                    <Image source={require('../../assets/Flatpay.png')} style={styles.FlatplayView}/>
                    <Text style={styles.LogoText}>We've got you covered.</Text>
                    </View>

                



            </View>
        </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    Main:{
        backgroundColor:'#08003F',
        flex:1,
    },
    
    MotherView:{
        backgroundColor:'#08003F',
        justifyContent:'center',
        alignSelf:'center'
    },

    TopView:{
        flexDirection:'row',
        marginTop:10,
        alignItems:'center'

    },

    DashboardView:{
        borderRadius:20,
        backgroundColor:'white',
        marginTop:35,
        width:350,
        height:125

    },

    BalanceText:{
        fontFamily:'gilroy-bold',
        fontSize:17,
        marginTop:30,
        marginStart:15,
        marginBottom:5
    },

    OptionView:{
        backgroundColor:'white',
        borderRadius:10,
        marginTop: 50,
        width:350,
        height:75,
        padding:20

    },

    ListView:{
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row'

    },

    ListView1:{
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        marginEnd:10,
        marginStart:10,
        marginBottom:25,

    },

    ListView2:{
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        marginEnd:10,
        marginStart:10,

        
    },

    ScrollView:{
        width:25,
        height:25,
        justifyContent:'center',
        alignSelf:'center'
    },

    OptionView1:{
        borderRadius:20,
        backgroundColor:'white',
        marginTop:50,
        padding:20,
        justifyContent:'space-between',
        width:350,
        height:140
    },

    LogoView:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        alignSelf:'center',
        marginTop:60
    },

    FlatplayView:{
        width:75,
        height:75
    },

    LogoText:{
        fontFamily:'gilroy-regular',
        color:'white',
        right:8
    }
    

})
export default Dashboard