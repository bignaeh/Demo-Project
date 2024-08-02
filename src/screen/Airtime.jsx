import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Image, Button } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import {useState} from 'react';
import ConfirmAirtime from './ConfirmAirtime';
import Modal from "react-native-modal";

function Airtime({ navigation }) {
    const [visible, setVisible] = useState(false);
   
    const handleEnter = () => {
        setVisible(true); // Show the modal when Enter is pressed
    
      };
      const handlemodalclose = () => {
        setVisible(false); // closes the modal when the back is pressed
    
      };
    
    
     // State to manage the input value
     const [amount, setAmount] = useState('');

     const[selectedNumber, setSelectedNumber] = useState('')

     // Handler to update the input value
     const handleAmountClick = (value) => {
         setAmount(value);
     };


    // Handler to update the selected number
    const handleNumberSelect = (number) => {
        setSelectedNumber(number);
    };

    return (
        <SafeAreaView style={styles.Main}>

            {/* the top view of the screen */}
            <View style={styles.TopView}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={20} color="white" />
                </TouchableOpacity>

                <Text style={styles.AirtimeText}>Airtime</Text>

                <TouchableOpacity onPress={handleEnter} style={styles.NextView}>
                    <Text style={styles.NextText}>Next</Text>
                </TouchableOpacity>

            </View>

            {/* the main view of the screen */}

            <View style={styles.ScreenView}>

                <Text style={styles.recentText}>Most recent</Text>
                <View style={styles.GImageView}>



                    <TouchableOpacity onPress={() => handleNumberSelect('08108915688')}>
                        <View style={styles.ImageView}>
                            <Image source={require('../../assets/MTN.png')} style={styles.LogoView} />
                        </View>
                        <Text style={{ justifyContent: 'center', alignSelf: 'center', color: 'white', fontFamily: 'gilroy-regular', fontSize: 11, marginLeft: 10, marginTop: 3 }}>08108915688</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={() => handleNumberSelect('07015239994')}>
                        <View style={styles.ImageView1}>
                            <Image source={require('../../assets/Airtel.jpg')} style={styles.LogoView1} />
                        </View>
                        <Text style={{ justifyContent: 'center', alignSelf: 'center', color: 'white', fontFamily: 'gilroy-regular', fontSize: 11, marginLeft: 35, marginTop: 3 }}>07015239994</Text>

                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => handleNumberSelect('09037625935')}>
                        <View style={styles.ImageView2}>
                            <Image source={require('../../assets/MTN.png')} style={styles.LogoView} />
                        </View>
                        <Text style={{ justifyContent: 'center', alignSelf: 'center', color: 'white', fontFamily: 'gilroy-regular', fontSize: 11, marginLeft: 35, marginTop: 3 }}>09037625935</Text>
                    </TouchableOpacity>
                </View>


                <Text style={styles.ChooseAmountText}>Choose an amount</Text>

                <View style={styles.AmountBlockView}>
                    <TouchableOpacity style={styles.OneView}  onPress={() => handleAmountClick('200')}>
                        <FontAwesome6 name="naira-sign" size={12} color="black" />
                        <Text style={styles.RechargeText}>200</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.OneView} onPress={() => handleAmountClick('300')}>
                        <FontAwesome6 name="naira-sign" size={12} color="black" />
                        <Text style={styles.RechargeText}>300</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.OneView}  onPress={() => handleAmountClick('500')}>
                        <FontAwesome6 name="naira-sign" size={12} color="black" />
                        <Text style={styles.RechargeText}>500</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.AmountBlockView}>
                    <TouchableOpacity style={styles.OneView}  onPress={() => handleAmountClick('1000')}>
                        <FontAwesome6 name="naira-sign" size={12} color="black" />
                        <Text style={styles.RechargeText}>1000</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.OneView}  onPress={() => handleAmountClick('2000')}>
                        <FontAwesome6 name="naira-sign" size={12} color="black" />
                        <Text style={styles.RechargeText}>2000</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.OneView}  onPress={() => handleAmountClick('3000')}>
                        <FontAwesome6 name="naira-sign" size={12} color="black" />
                        <Text allowFontScaling={false}style={styles.RechargeText}>3000</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.AmountView}>
                    <Text style={styles.AmountText}>Amount</Text>
                    <View style={styles.BalanceView}>
                        <Text style={styles.AmountText}>Balance:</Text>
                        <FontAwesome6 name="naira-sign" size={10} color="white" style={{ top: 9 }} />
                        <Text style={styles.AmountText}>15000</Text>
                    </View>
                </View>

                
                <View style={styles.TextInputView}>
                    <TextInput
                        marginLeft={10}
                        value={amount}
                        onChangeText={setAmount}
                        placeholder='0.00'
                        placeholderTextColor='gray'
                        cursorColor='black'
                        style={styles.TextInput}
                        keyboardType='numeric'
                        />
                </View>

                <Text style={styles.AmountText}>Choose Network</Text>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{ marginTop: 10, backgroundColor: 'white', width: '100%', height: 110, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15 }}>
                        <View style={styles.BlockView}>
                            <View style={styles.LogoSize}>
                                <Image source={require('../../assets/MTN.png')} style={styles.LogoView1} />
                            </View>
                            <Text style={styles.InText}>MTN</Text>

                        </View>

                        <View style={styles.BlockView1}>
                            <View style={styles.LogoSize}>
                                <Image source={require('../../assets/Airtel.jpg')} style={styles.LogoView1} />
                            </View>
                            <Text style={styles.InText}>Airtel</Text>

                        </View>

                        <View style={styles.BlockView2}>
                            <View style={styles.LogoSize}>
                                <Image source={require('../../assets/Glo.jpg')} style={styles.LogoView1} />
                            </View>
                            <Text style={styles.InText}>Glo</Text>

                        </View>
                        <View style={styles.BlockView3}>
                            <View style={styles.LogoSize}>
                                <Image source={require('../../assets/9mobile.png')} style={styles.LogoView1} />
                            </View>
                            <Text style={styles.InText}>9mobile</Text>
                        </View>

                    </View>

                </ScrollView>

                <View style={styles.NumberView}>

                    <Text style={styles.AmountText}>Phone Number</Text>

                    <TouchableOpacity>
                        <Text style={styles.ContactText}>Choose Contact</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.NumberView1}>
                    <TextInput
                        marginLeft={10}
                        value={selectedNumber}
                        placeholder='08012345678'
                        placeholderTextColor='gray'
                        cursorColor='black'
                        style={styles.TextInput}/>

                </View>






            </View>
            <Modal
        isVisible={visible}
            style={{margin:0}}
        animationType="slide"
        onBackdropPress={() => setVisible(false)}      >

        <View style={styles.modalContainer}>
            <View style={{flexDirection:'row',paddingHorizontal:20,paddingTop:30,}}>
            <TouchableOpacity onPress={handlemodalclose}>
                        <Ionicons name="chevron-back" size={23} color="white" />
            </TouchableOpacity>
            <Text style={{color:'#fff',fontFamily:'gilroy-bold',fontSize:18,alignSelf:'center',marginLeft:109}}>Confirm</Text>
            </View>
          
        <ConfirmAirtime
         amount={amount}
         selectedNumber={selectedNumber}
        />
       

         
        </View>
      </Modal>





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
        borderColor: 'white'
    },

    AirtimeText: {
        fontFamily: 'gilroy-bold',
        color: 'white',
        fontSize: 15
    },

    NextView: {
        borderRadius: 5,
        backgroundColor: 'white',
        width: 45,
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: '0.7'
    },

    NextText: {
        fontFamily: 'gilroy-bold',
        color: '#08003F'
    },

    ScreenView: {
        padding: 20
    },

    recentText: {
        fontFamily: 'gilroy-regular',
        color: 'white',
        fontSize: 12,

    },

    GImageView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 20
    },

    ImageView: {
        backgroundColor: 'white',
        width: 33,
        height: 33,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginLeft: 25
    },

    ImageView1: {
        backgroundColor: 'white',
        width: 33,
        height: 33,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginLeft: 50
    },

    ImageView2: {
        backgroundColor: 'white',
        width: 33,
        height: 33,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginLeft: 50
    },

    LogoView: {
        width: 20,
        height: 20,
        borderRadius: 10
    },

    LogoView1: {
        width: 20,
        height: 20,
    },


    GNoView: {
        flexDirection: 'row'
    },

    NoText: {
        fontFamily: 'gilroy-regular',
        color: 'white',
        fontSize: 11
    },

    ChooseAmountText: {
        fontFamily: 'gilroy-regular',
        fontSize: 12,
        color: 'white',
        marginTop: 20
    },

    AmountBlockView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        alignItems: 'center'
    },

    OneView: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        width: 80,
        height: 40,
        borderRadius: 4,
        alignSelf: 'center'
    },

    RechargeText: {
        fontFamily: 'gilroy-regular',
        color: '#08003F'
    },

    AmountText: {
        fontFamily: 'gilroy-regular',
        fontSize: 12,
        color: 'white',
        marginTop: 20
    },

    AmountView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    BalanceView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        opacity: 0.5
    },

    TextInputView: {
        backgroundColor: 'white',
        width: '100%',
        height: 40,
        borderCurve: 5,
        marginTop: 10,
        borderRadius: 5,
        opacity: 0.8,
        justifyContent: 'center'
    },

    BlockView: {
        backgroundColor: '#E6E6FA',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        borderRadius: 5

    },

    BlockView1: {
        marginLeft: 15,
        backgroundColor: '#E6E6FA',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        borderRadius: 5

    },

    BlockView2: {
        marginLeft: 15,
        backgroundColor: '#E6E6FA',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        borderRadius: 5

    },

    BlockView3: {
        marginLeft: 15,
        backgroundColor: '#E6E6FA',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        borderRadius: 5

    },

    LogoView1: {
        width: 25,
        height: 25,
        borderRadius: 15
    },

    InText: {
        fontFamily: 'gilroy-regular',
        marginTop: 5,
        fontSize: 12,
        color: '#08003F',
        fontSize:11
    },

    NumberView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    ContactText: {
        color: 'white',
        fontFamily: 'gilroy-bold',
        fontSize: 12,
        marginTop: 20
    },

    NumberView1: {
        backgroundColor: 'white',
        width: '100%',
        height: 40,
        borderCurve: 5,
        marginTop: 10,
        borderRadius: 5,
        opacity: 0.8,
        justifyContent: 'center'

    },
    modalContainer: {
        position: 'absolute',
       bottom: 0,
       backgroundColor: '#08003F',
       width: '100%',
       height: '70%',
       borderTopRightRadius: 15,
       borderTopLeftRadius: 15,
      
     },




})

export default Airtime