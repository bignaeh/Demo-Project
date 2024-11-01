import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { Feather, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

function Me() {

    const [isBalanceVisible, setIsBalanceVisible] = useState(true);

    const toggleVisibility = () => {
        setIsBalanceVisible(prevState => !prevState);
    };



    return (
        <SafeAreaView style={styles.Main}>
            <View style={styles.MotherView}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* profile picture view */}
                    <View style={styles.TopView}>
                        <FontAwesome6 name="user-circle" size={35} color="white" />

                        <Text allowFontScaling={false} style={styles.NameText}>Hi,Nseabasi</Text>

                        <TouchableOpacity>
                            <MaterialCommunityIcons name="line-scan" size={22} color="white" />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Feather name="settings" size={22} color="white" />
                        </TouchableOpacity>

                    </View>

                    {/* Account balance View */}

                    <Text allowFontScaling={false} style={styles.TotalText}>Total Balance</Text>

                    <View style={styles.BalanceContainer}>
                        {isBalanceVisible ? (
                            <>
                                <FontAwesome6 name="naira-sign" size={15} color="white" />
                                <Text allowFontScaling={false} style={styles.balanceText}>
                                    5000
                                </Text>
                            </>
                        ) : (
                            <>
                                <Text allowFontScaling={false} style={styles.balanceText}>
                                    *****
                                </Text>
                            </>
                        )}

                        <TouchableOpacity onPress={toggleVisibility}>
                            <Ionicons
                                name={isBalanceVisible ? 'eye-outline' : 'eye-off-outline'}
                                size={20}
                                color="white"
                            />

                        </TouchableOpacity>
                    </View>

                    {/* first container */}
                    <View style={styles.Container}>

                        <TouchableOpacity style={styles.Trans}>
                            <View style={{flexDirection:'row'}}>
                            <Image source={require('../../assets/Transaction.png')} style={styles.LogoView} />
                            <View>
                            <Text style={styles.TransText}>Transaction History</Text>

                            </View>
                            </View>
                            <MaterialIcons name="keyboard-arrow-right" size={15} color='#08003F' />
                        </TouchableOpacity>


                        {/* Account Limit Container */}


                        <TouchableOpacity style={{ marginBottom: 25, flexDirection:'row', justifyContent:'space-between' }}>

                            <View style={styles.Limit}>
                                <Image source={require('../../assets/Limit.png')} style={styles.LogoView} />
                                <View>

                                    <Text style={styles.LimitText}>Account Limit</Text>
                                    <Text allowFontScaling={false} style={styles.FollowupText}>View your transaction limit</Text>

                                </View>
                            </View>

                            <MaterialIcons name="keyboard-arrow-right" size={15} color='#08003F' />

                        </TouchableOpacity>


                        {/* Card container */}



                        <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between'}}>

                            <View style={styles.Card}>
                                <Image source={require('../../assets/Card.png')} style={styles.LogoView} />
                                <View >

                                    <Text style={styles.CardText}>Bank Card</Text>
                                    <Text allowFontScaling={false} style={styles.FollowupText}>Add payment option</Text>
                                   

                                </View>
                            </View>

                            <MaterialIcons name="keyboard-arrow-right" size={15} color='#08003F' />
                        </TouchableOpacity>



                        {/* The ID card container */}
                        <TouchableOpacity style={{ marginTop: 25,flexDirection:'row', justifyContent:'space-between' }}>

                            <View style={styles.IDcard}>
                                <Image source={require('../../assets/IDcard.png')} style={styles.LogoView} />
                                <View>

                                    <Text style={styles.PayText}>Pay ID</Text>
                                    <Text allowFontScaling={false} style={styles.FollowupText}>Generate unique code for online</Text>
                            <Text allowFontScaling={false} style={styles.FollowupText}>transactions</Text>

                                </View>
                            </View>

                            <MaterialIcons name="keyboard-arrow-right" size={15} color='#08003F' />
                        </TouchableOpacity>

                    </View>



                    {/* Second Container of the screen view  */}

                    <View style={styles.Container2}>

                        <View style={styles.Container}>


                            {/* Customer Service Container */}

                            <TouchableOpacity style={styles.CustomerService}>
                                <View style={styles.Service}>
                                <Image source={require('../../assets/Phone.png')} style={styles.LogoView} />
                                <View>
                                <Text style={styles.CustomerServiceText}>Customer Service</Text>
                                </View>
                                </View>

                                <MaterialIcons name="keyboard-arrow-right" size={15} color='#08003F' />
                            </TouchableOpacity>


                            {/* Security Center Container */}


                            <TouchableOpacity style={{ marginBottom: 25, justifyContent:'space-between', flexDirection:'row' }}>

                                <View style={styles.Secure}>
                                    <Image source={require('../../assets/Secure.png')} style={styles.LogoView} />
                                    <View>

                                        <Text style={styles.SecureText}>Security Center</Text>
                                        <Text allowFontScaling={false} style={styles.FollowupText}>Protect your funds</Text>

                                    </View>
                                </View>


                                <MaterialIcons name="keyboard-arrow-right" size={15} color='#08003F' />

                            </TouchableOpacity>


                            {/* Legal container */}



                            <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between'}}>

                                <View style={styles.Legal}>
                                    <Image source={require('../../assets/Legal.png')} style={styles.LogoView} />
                                    <View>

                                        <Text allowFontScaling={false} style={styles.LegalText}>Legal</Text>

                                <Text allowFontScaling={false} style={styles.FollowupText}>About our contract with you</Text>
                                 </View>
                                 </View>

                                 <MaterialIcons name="keyboard-arrow-right" size={15} color='#08003F' />
                            </TouchableOpacity>



                            {/* Rate Us */}
                            <TouchableOpacity style={{ marginTop: 25, flexDirection:'row',justifyContent:'space-between', }}>

                                <View style={styles.Rate}>
                                    <Image source={require('../../assets/Rate.png')} style={styles.LogoView} />
                                    <View>

                                        <Text style={styles.RateText}>Rate Us</Text>

                                    </View>
                                </View>

                                <MaterialIcons name="keyboard-arrow-right" size={15} color='#08003F' />

                            </TouchableOpacity>

                           
                        </View>




                    </View>




                </ScrollView>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Main: {
        flex: 1,
        backgroundColor: '#08003F',
    },

    MotherView: {
        padding: 15,
        justifyContent: 'center',
    },

    TopView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },

    UserView: {
        width: 45,
        height: 45
    },

    NameText: {
        fontFamily: 'gilroy-bold',
        fontSize: 15,
        color: 'white',
        marginRight: 155

    },

    TotalText: {
        color: 'white',
        fontFamily: 'gilroy-regular',
        fontSize: 13,
        marginTop: 15,
        marginBottom: 15

    },

    BalanceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    balanceText: {
        color: 'white',
        marginHorizontal: 8,
        fontFamily: 'gilroy-bold',
        fontSize: 25
    },

    Container: {
        padding: 25,
        marginTop: 25,
        width: '100%',
        paddingVertical: 16,
        backgroundColor: 'white',
        borderRadius: 8

    },

    LogoView: {
        width: 15,
        height: 15,
        marginRight:8
    },

    TransText: {
        fontFamily: 'gilroy-regular',
        color: '#08003F',
        fontSize: 14
    },



    Trans: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 25
    },


    LimitText: {
        fontFamily: 'gilroy-regular',
        color: '#08003F',
    },


    FollowupText: {
        fontFamily: 'gilroy-regular',
        fontSize: 10,

    },



    Limit: {
        flexDirection: 'row'
    },



    CardText: {
        fontFamily: 'gilroy-regular',
        color: '#08003F',
    },


    FollowupText: {
        fontFamily: 'gilroy-regular',
        fontSize: 10,
    },



    Card: {
        flexDirection: 'row'
    },




    PayText: {
        fontFamily: 'gilroy-regular',
        color: '#08003F',
    },


    FollowupText: {
        fontFamily: 'gilroy-regular',
        fontSize: 10,
    },



    IDcard: {
        flexDirection: 'row',
    },


    CustomerServiceText: {
        fontFamily: 'gilroy-regular',
        color: '#08003F',
        fontSize: 14
    },



    CustomerService: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 25
    },

    Service:{
        flexDirection:'row'
    },


    SecureText: {
        fontFamily: 'gilroy-regular',
        color: '#08003F',
    },


    FollowupText: {
        fontFamily: 'gilroy-regular',
        fontSize: 10,
    },



    Secure: {
        flexDirection: 'row'
    },

    Legal:{
        flexDirection:'row'
    },


    LegalText: {
        fontFamily: 'gilroy-regular',
        color: '#08003F',
        
    },


    FollowupText: {
        fontFamily: 'gilroy-regular',
        fontSize: 10,
    },

    RateText: {
        fontFamily: 'gilroy-regular',
        color: '#08003F',
    },


    FollowupText: {
        fontFamily: 'gilroy-regular',
        fontSize: 10,
    },



    Rate: {
        flexDirection:'row',
    }

})

export default Me