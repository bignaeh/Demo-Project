import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Octicons from '@expo/vector-icons/Octicons';

function ConfirmAirtime({ navigation,amount, selectedNumber, onClose }) {
    return (
        <SafeAreaView style={styles.Main}>

            {/* the top view of the screen */}
            <View style={{padding:15}}>
                

                <View style={{ padding: 10 }}>
                    <View>
                        <Text style={{ alignSelf: 'center', fontFamily: 'gilroy-regular', fontSize: 13, color: 'white' }}>To:</Text>
                        <Text style={{ alignSelf: 'center', fontFamily: 'gilroy-bold', fontSize: 25, color: 'white', marginTop: 10 }}>{selectedNumber}</Text>
                        <Text style={{ alignSelf: 'center', fontFamily: 'gilroy-regular', fontSize: 13, color: 'white', marginTop: 20 }}>Amount</Text>
                    </View>

                    <View style={styles.AmountView}>
                        <FontAwesome6 name="naira-sign" size={15} color="white" />
                        <Text style={styles.RechargeText}>{amount}</Text>
                    </View>

                    <View style={styles.TransView}>
                        <Text style={{ fontFamily: 'gilroy-regular', color: '#08003F', alignItems: 'center', paddingHorizontal: 8 }}>Transaction Fee:</Text>
                        <View style={{ flexDirection: 'row', marginHorizontal: 8, alignItems: 'center', fontFamily: 'gilroy-regular' }}>
                            <FontAwesome6 name="naira-sign" size={10} color="#08003F" style={{ marginTop: 3 }} />
                            <Text>0.0</Text>
                        </View>
                    </View>

                    <View style={styles.AirtimeView}>

                        <Text style={styles.DescriptionText}>Description:</Text>


                        <Text style={styles.AirtimeText}>Airtime</Text>


                    </View>

                    <View style={styles.AirtimeView}>

                        <Text style={styles.DescriptionText}>Network:</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../assets/MTN.png')} style={{ width: 22, height: 22, borderRadius: 10, marginTop: 15, marginRight: 4 }} />
                            <Text style={styles.AirtimeText}>MTN</Text>
                        </View>

                    </View>

                    <View style={styles.PinView}>
                        <FontAwesome name="lock" size={24} color="green" />
                        <Text style={styles.TapText}>Tap to enter your Transaction PIN</Text>
                    </View>



                    <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: 20 }}>
                        <Octicons name="dot-fill" size={24} color="black" style={{ marginRight: 10, color: 'white' }} />
                        <Octicons name="dot-fill" size={24} color="black" style={{ marginRight: 10, color: 'white' }} />
                        <Octicons name="dot-fill" size={24} color="black" style={{ color: 'white' }} />
                        <Octicons name="dot-fill" size={24} color="black" style={{ marginLeft: 10, color: 'white' }} />

                    </View>
                </View>
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Main: {
        flex: 1,
        backgroundColor: '#08003F',

    },

    TopView: {
        padding: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: '0.2',
        borderColor: 'black',
        marginBottom: 20

    },

    ConfirmText: {
        fontFamily: 'gilroy-bold',
        color: 'white',
        fontSize: 18,
        marginRight: 140
    },

    AmountView: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10
    },

    RechargeText: {
        color: 'white',
        fontFamily: 'gilroy-bold',
        fontSize: 20,
        marginTop: 2
    },

    TransView: {
        backgroundColor: 'white',
        width: 300,
        height: 60,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        paddingHorizontal: 25

    },
    DescriptionText: {
        fontFamily: 'gilroy-regular',
        fontSize: 13,
        color: 'white',
        marginTop: 20

    },

    AirtimeView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 35

    },

    AirtimeText: {
        fontFamily: 'gilroy-bold',
        color: 'white',
        marginTop: 20
    },

    PinView: {
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 100
    },

    TapText: {
        color: 'white',
        fontFamily: 'gilroy-regular',
        marginLeft: 5
    }


})

export default ConfirmAirtime