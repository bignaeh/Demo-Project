import { StyleSheet, Text, View, ImageBackground, SafeAreaView, ScrollView, Imag } from 'react-native'
import React,{useState} from 'react'
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Header from '../../screen/dashboard/Header'
import Balancebox from '../../screen/dashboard/Balancebox';
import Paymentbox2 from '../../screen/dashboard/Paymentbox2';
import Paymentbox from '../../screen/dashboard/Paymentbox';
import Logo from '../../screen/dashboard/Logo'



function Dashboard({ navigation, value, onChangeText, }) {
    return (
        <SafeAreaView style={styles.Main}>
            <ScrollView showsVerticalScrollIndicator={false}>

                {/* the top screen of the dashboard  */}
                <View style={styles.MotherView}>
                    
                    <Header/>

                    {/* Dashboard View */}

                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontFamily: 'gilroy-bold', fontSize: 15, color: 'white' }}>Hi, Nseabasi</Text>

                    </View>

                     <Balancebox/>

                     <Paymentbox/>

                     <Paymentbox2/>

                     <Logo/>





                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    Main: {
        backgroundColor: '#08003F',
        flex: 1,
    },

    MotherView: {
        backgroundColor: '#08003F',
        justifyContent: 'center',
        alignSelf: 'center'
    },

    TopView: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'

    },

    DashboardView: {
        borderRadius: 20,
        backgroundColor: 'white',
        marginTop: 35,
        width: 350,
        height: 125

    },

    BalanceText: {
        fontFamily: 'gilroy-bold',
        fontSize: 17,
        marginTop: 30,
        marginStart: 15,
        marginBottom: 5
    },

    OptionView: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 50,
        width: 350,
        height: 75,
        padding: 20

    },

    ListView: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'

    },

    ListView1: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginEnd: 10,
        marginStart: 10,
        marginBottom: 25,

    },

    ListView2: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginEnd: 10,
        marginStart: 10,


    },

    ScrollView: {
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignSelf: 'center'
    },

    OptionView1: {
        borderRadius: 20,
        backgroundColor: 'white',
        marginTop: 50,
        padding: 20,
        justifyContent: 'space-between',
        width: 350,
        height: 140
    },

    LogoView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 60
    },

    FlatplayView: {
        width: 75,
        height: 75
    },

    LogoText: {
        fontFamily: 'gilroy-regular',
        color: 'white',
        right: 8
    }


})
export default Dashboard