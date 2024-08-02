import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Modal, Image, FlatListComponent } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {Entypo,SimpleLineIcons, FontAwesome6,MaterialIcons,EvilIcons} from '@expo/vector-icons/Entypo';




function Reward({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const iconRef = useRef(null);

    const [modalSlide, setModalSlide] = useState(false)

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    // Function to get icon position and dimensions
    const getIconLayout = () => {
        return new Promise((resolve) => {
            iconRef.current.measure((x, y, width, height, pageX, pageY) => {
                resolve({ x: pageX, y: pageY, width, height });
            });
        });
    };

    useEffect(() => {
        if (modalOpen) {
            getIconLayout().then((layout) => {
                setModalPosition({
                    top: layout.y + (layout.height / 2) - 10, // Center the modal vertically relative to the icon
                    left: layout.x - 160, // 160 is the width of the modal plus some margin
                });
            });
        }
    }, [modalOpen]);

    const [modalVisible, setModalVisible] = useState(false);
    const [modalPositional, setModalPositional] = useState({ top: 0, left: 0 });
    const iconReff = useRef(null);

    const toggleModall = () => {
        setModalVisible(!modalVisible);
    };

    // Function to get icon position and dimensions
    const getIconLayoutt = () => {
        return new Promise((resolve) => {
            iconReff.current.measure((x, y, width, height, pageX, pageY) => {
                resolve({ x: pageX, y: pageY, width, height });
            });
        });
    };

    useEffect(() => {
        if (modalOpen) {
            getIconLayoutt().then((layout) => {
                setModalPositional({
                    top: layout.y + (layout.height / 2) - 10, // Center the modal vertically relative to the icon
                    left: layout.x - 150, // 160 is the width of the modal plus some margin
                });
            });
        }
    }, [modalVisible]);


    return (
        <SafeAreaView style={styles.Main}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Reward Screen */}
                <View style={styles.MotherView}>
                    {/* First wrap - Reward Header */}
                    <View style={styles.Topwrap}>
                        <Text style={styles.RewardText}>Rewards</Text>

                        <Modal visible={modalOpen} transparent={true} animationType='fade' onRequestClose={toggleModal}>
                            <TouchableOpacity style={styles.modalOverlay} onPress={toggleModal}>
                                <View
                                    style={[
                                        styles.modalContent,
                                        {
                                            top: modalPositional.top,
                                            left: modalPositional.left,
                                        }
                                    ]}
                                >
                                    <TouchableOpacity onPress={() => navigation.navigate()} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Entypo name="book" size={24} color="black" />
                                        <Text allowFontScaling={false} style={styles.modalText}>Rules</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate()} style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                                        <MaterialIcons name="history" size={24} color="black" />
                                        <Text allowFontScaling={false} style={styles.modalText1}>History</Text>
                                    </TouchableOpacity>

                                </View>
                            </TouchableOpacity>
                        </Modal>

                        <TouchableOpacity onPress={toggleModal} style={styles.iconButton} ref={iconRef}>
                            <MaterialCommunityIcons name="dots-horizontal-circle-outline" size={24} color="white" />
                        </TouchableOpacity>
                    </View>


                    {/* Cashback View with a coin on it */}

                    <View style={styles.CashbackView}>
                        <Image source={require('../../assets/Naira.png')} style={styles.nairalogo} />
                        <Text allowFontScaling={false} style={styles.CashbackText}>Cashback</Text>
                        <SimpleLineIcons name="question" size={16} color="white" />

                    </View>

                    <View style={styles.AmountView}>
                        <FontAwesome6 name="naira-sign" size={15} color="white" />
                        <Text allowFontScaling={false} style={styles.AmountText}>52.00</Text>
                        <MaterialIcons name="arrow-forward-ios" size={14} color="white" />
                    </View>

                    {/* Friday giveaway View */}
                    <View style={styles.GiveawayView}>
                        <TouchableOpacity onPress={() => navigation.navigate()} style={styles.CalendarView}>
                            <MaterialCommunityIcons name="calendar-blank" size={24} color='#08003F' />
                        </TouchableOpacity>
                        <View style={styles.FridayView}>
                            <Text allowFontScaling={false} style={styles.GiveawayText}>Friday Giveaway!</Text>
                            <Text allowFontScaling={false} style={styles.CheckText}>Check in every friday to get</Text>
                            <Text allowFontScaling={false} style={styles.CheckText}>rewards and voucher!</Text>
                        </View>

                        <View style={styles.GetNowView}>
                            <Text allowFontScaling={false} style={styles.GetNowText}>Get Now</Text>
                        </View>

                    </View>

                    <Text allowFontScaling={false} style={styles.DailyText}>Daily Bonus</Text>


                    {/* The wrap of the bonus package */}
                    <View style={styles.BonusWrap}>

                        {/* the phone wrap inside the bonus package */}
                        <View style={styles.RowView}>

                            <TouchableOpacity onPress={toggleModall} ref={iconReff} style={styles.PhoneView}>
                                <Image source={require('../../assets/Airtime.png')} style={styles.AirtimeLogo} />
                            </TouchableOpacity>
                            {/* The modal that reflects when you click the BonusView with the phone on it */}
                            <Modal visible={modalVisible} transparent={true} animationType='fade' onRequestClose={toggleModall}>
                                <TouchableOpacity style={styles.modalOverlay} onPress={toggleModall}>
                                    <View
                                        style={[
                                            styles.modalContentt,
                                            {
                                                top: modalPositional.top,
                                                left: modalPositional.left,
                                            }
                                        ]}
                                    >
                                        <View>
                                            <Image source={require('../../assets/Coin.png')} style={{ width: 70, height: 70, marginTop: 20 }} />

                                        </View>

                                        <View style={styles.PhoneWrap}>
                                            <Image source={require('../../assets/Airtime.png')} style={{ width: 30, height: 30, justifyContent: 'center', alignSelf: 'center' }} />

                                        </View>
                                        <Text allowFontScaling={false} style={{ fontSize: 25, fontFamily: 'gilroy-bold', color: '#08003F', marginTop: 15 }}>MTN Airtime</Text>

                                        <Text allowFontScaling={false} style={{ fontFamily: 'gilroy-regular', marginTop: 15, color: '#08003F' }}>Buy Airtime and get up to 6% Cashback</Text>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 15 }}>
                                            <Image source={require('../../assets/Naira.png')} style={{ width: 40, height: 40, justifyContent: 'center' }} />
                                            <Text allowFontScaling={false} style={{ fontFamily: 'gilroy-bold', fontSize: 25, color: '#08003F', }}>+6%</Text>
                                        </View>

                                        <TouchableOpacity onPress={() => navigation.navigate('Airtime')} style={styles.GoNavigation}>

                                            <Text allowFontScaling={false} style={styles.GoTextNavi}>Go</Text>

                                        </TouchableOpacity>

                                    </View>
                                </TouchableOpacity>
                            </Modal>



                            {/* the airtime write up and the coin */}
                            <View AirtimeNairaWrap>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 8 }}>
                                    <Text style={styles.AirtimeText}>MTN Airtime</Text>
                                    <Image source={require('../../assets/Naira.png')} style={styles.nairalogo} />
                                    <Text style={styles.percentText}>+2%</Text>
                                </View>


                                <Text allowFontScaling={false} style={styles.CashBText}>Buy Airtime and get up to</Text>
                                <Text allowFontScaling={false} style={styles.CashBText}>6% Cashback</Text>

                            </View>

                            <TouchableOpacity onPress={() => navigation.navigate('Airtime')} style={styles.GoView}>

                                <Text style={styles.GoText}>Go</Text>

                            </TouchableOpacity>


                        </View>

                    </View>


                    {/* The wrap of the bonus package */}
                    <View style={styles.BonusWrap}>

                        {/* the phone wrap inside the bonus package */}
                        <View style={styles.RowView}>

                            <TouchableOpacity onPress={toggleModall} ref={iconReff} style={styles.PhoneView}>
                                <Image source={require('../../assets/Airtime.png')} style={styles.AirtimeLogo} />
                            </TouchableOpacity>
                            {/* The modal that reflects when you click the BonusView with the phone on it */}
                            <Modal visible={modalVisible} transparent={true} animationType='fade' onRequestClose={toggleModall}>
                                <TouchableOpacity style={styles.modalOverlay} onPress={toggleModall}>
                                    <View
                                        style={[
                                            styles.modalContentt,
                                            {
                                                top: modalPositional.top,
                                                left: modalPositional.left,
                                            }
                                        ]}
                                    >
                                        <View>
                                            <Image source={require('../../assets/Coin.png')} style={{ width: 70, height: 70, }} />

                                        </View>

                                        <View style={styles.PhoneWrap}>
                                            <Image source={require('../../assets/Airtime.png')} style={{ width: 30, height: 30, justifyContent: 'center', alignSelf: 'center' }} />

                                        </View>

                                        <Text allowFontScaling={false} style={{ fontSize: 25, fontFamily: 'gilroy-bold', color: '#08003F', marginTop: 15 }}>Airtel Airtime</Text>

                                        <Text allowFontScaling={false} style={{ fontFamily: 'gilroy-regular', marginTop: 15, color: '#08003F' }}>Buy Airtime and get up to 6% Cashback</Text>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 15 }}>
                                            <Image source={require('../../assets/Naira.png')} style={{ width: 40, height: 40, justifyContent: 'center' }} />
                                            <Text allowFontScaling={false} style={{ fontFamily: 'gilroy-bold', fontSize: 25, color: '#08003F', }}>+6%</Text>
                                        </View>

                                        <TouchableOpacity onPress={() => navigation.navigate('Airtime')} style={styles.GoNavigation}>

                                            <Text allowFontScaling={false} style={styles.GoTextNavi}>Go</Text>

                                        <EvilIcons name="close-o" size={24} color="black" />

                                        </TouchableOpacity>


                                    </View>
                                </TouchableOpacity>
                            </Modal>



                            {/* the airtime write up and the coin */}
                            <View AirtimeNairaWrap>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 8 }}>
                                    <Text style={styles.AirtimeText}>Airtel Airtime</Text>
                                    <Image source={require('../../assets/Naira.png')} style={styles.nairalogo} />
                                    <Text allowFontScaling={false} style={styles.percentText}>+2%</Text>
                                </View>


                                <Text allowFontScaling={false} style={styles.CashBText}>Buy Airtime and get up to</Text>
                                <Text allowFontScaling={false} style={styles.CashBText}>6% Cashback</Text>

                            </View>

                            <TouchableOpacity onPress={() => navigation.navigate('Airtime')} style={styles.GoView}>

                                <Text allowFontScaling={false} style={styles.GoText}>Go</Text>

                            </TouchableOpacity>


                        </View>

                    </View>


                    {/* The wrap of the bonus package */}
                    <View style={styles.BonusWrap}>

                        {/* the phone wrap inside the bonus package */}
                        <View style={styles.RowView}>

                            <TouchableOpacity onPress={toggleModall} ref={iconReff} style={styles.PhoneView}>
                                <Image source={require('../../assets/Airtime.png')} style={styles.AirtimeLogo} />
                            </TouchableOpacity>
                            {/* The modal that reflects when you click the BonusView with the phone on it */}
                            <Modal visible={modalVisible} transparent={true} animationType='fade' onRequestClose={toggleModall}>
                                <TouchableOpacity style={styles.modalOverlay} onPress={toggleModall}>
                                    <View
                                        style={[
                                            styles.modalContentt,
                                            {
                                                top: modalPositional.top,
                                                left: modalPositional.left,
                                            }
                                        ]}>

                                        <View>
                                            <Image source={require('../../assets/Coin.png')} style={{ width: 70, height: 70, }} />

                                        </View>

                                        <View style={styles.PhoneWrap}>
                                            <Image source={require('../../assets/Airtime.png')} style={{ width: 30, height: 30, justifyContent: 'center', alignSelf: 'center' }} />

                                        </View>

                                        <Text allowFontScaling={false} style={{ fontSize: 25, fontFamily: 'gilroy-bold', color: '#08003F', marginTop: 15 }}>Glo Airtime</Text>

                                        <Text allowFontScaling={false} style={{ fontFamily: 'gilroy-regular', marginTop: 15, color: '#08003F' }}>Buy Airtime and get up to 6% Cashback</Text>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 15 }}>
                                            <Image source={require('../../assets/Naira.png')} style={{ width: 40, height: 40, justifyContent: 'center' }} />
                                            <Text allowFontScaling={false} style={{ fontFamily: 'gilroy-bold', fontSize: 25, color: '#08003F', }}>+6%</Text>
                                        </View>

                                        <TouchableOpacity onPress={() => navigation.navigate('Airtime')} style={styles.GoNavigation}>

                                            <Text allowFontScaling={false} style={styles.GoTextNavi}>Go</Text>

                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            </Modal>



                            {/* the airtime write up and the coin */}
                            <View AirtimeNairaWrap>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 8 }}>
                                    <Text allowFontScaling={false} style={styles.AirtimeText}>Glo Airtime</Text>
                                    <Image source={require('../../assets/Naira.png')} style={styles.nairalogo} />
                                    <Text allowFontScaling={false} style={styles.percentText}>+2%</Text>
                                </View>


                                <Text allowFontScaling={false} style={styles.CashBText}>Buy Airtime and get up to</Text>
                                <Text allowFontScaling={false} style={styles.CashBText}>6% Cashback</Text>

                            </View>

                            <TouchableOpacity onPress={() => navigation.navigate('Airtime')} style={styles.GoView}>

                                <Text style={styles.GoText}>Go</Text>

                            </TouchableOpacity>


                        </View>

                    </View>

                    <Modal visible={modalSlide} animationType='slide'>
                        <SafeAreaView style={styles.Main1}>
                            <View style={styles.MotherView1}>
                                <MaterialIcons name="keyboard-arrow-left" size={30} color="white" onPress={() => setModalSlide(false)} />

                                {/* The wrap of the bonus package */}
                                <View style={styles.BonusWrap}>

                                    {/* the phone wrap inside the bonus package */}
                                    <View style={styles.RowView}>

                                        <TouchableOpacity onPress={toggleModall} ref={iconReff} style={styles.PhoneView}>
                                            <Image source={require('../../assets/Airtime.png')} style={styles.AirtimeLogo} />
                                        </TouchableOpacity>
                                        {/* The modal that reflects when you click the BonusView with the phone on it */}
                                        <Modal visible={modalVisible} transparent={true} animationType='fade' onRequestClose={toggleModall}>
                                            <TouchableOpacity style={styles.modalOverlay} onPress={toggleModall}>
                                                <View
                                                    style={[
                                                        styles.modalContentt,
                                                        {
                                                            top: modalPositional.top,
                                                            left: modalPositional.left,
                                                        }
                                                    ]}>

                                                    <View>
                                                        <Image source={require('../../assets/Coin.png')} style={{ width: 70, height: 70, }} />

                                                    </View>

                                                    <View style={styles.PhoneWrap}>
                                                        <Image source={require('../../assets/Airtime.png')} style={{ width: 30, height: 30, justifyContent: 'center', alignSelf: 'center' }} />

                                                    </View>

                                                    <Text allowFontScaling={false} style={{ fontSize: 25, fontFamily: 'gilroy-bold', color: '#08003F', marginTop: 15 }}>Glo Airtime</Text>

                                                    <Text allowFontScaling={false} style={{ fontFamily: 'gilroy-regular', marginTop: 15, color: '#08003F' }}>Buy Airtime and get up to 6% Cashback</Text>

                                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 15 }}>
                                                        <Image source={require('../../assets/Naira.png')} style={{ width: 40, height: 40, justifyContent: 'center' }} />
                                                        <Text allowFontScaling={false} style={{ fontFamily: 'gilroy-bold', fontSize: 25, color: '#08003F', }}>+6%</Text>
                                                    </View>

                                                    <TouchableOpacity onPress={() => navigation.navigate('Airtime')} style={styles.GoNavigation}>

                                                        <Text allowFontScaling={false} style={styles.GoTextNavi}>Go</Text>

                                                    </TouchableOpacity>
                                                </View>
                                            </TouchableOpacity>
                                        </Modal>



                                        {/* the airtime write up and the coin */}
                                        <View AirtimeNairaWrap>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 8 }}>
                                                <Text allowFontScaling={false} style={styles.AirtimeText}>Glo Airtime</Text>
                                                <Image source={require('../../assets/Naira.png')} style={styles.nairalogo} />
                                                <Text allowFontScaling={false} style={styles.percentText}>+2%</Text>
                                            </View>


                                            <Text allowFontScaling={false} style={styles.CashBText}>Buy Airtime and get up to</Text>
                                            <Text allowFontScaling={false} style={styles.CashBText}>6% Cashback</Text>

                                        </View>

                                        <TouchableOpacity onPress={() => navigation.navigate('Airtime')} style={styles.GoView}>

                                            <Text style={styles.GoText}>Go</Text>

                                        </TouchableOpacity>


                                    </View>

                                </View>

                                {/* The wrap of the bonus package */}
                    <View style={styles.BonusWrap}>

                        {/* the phone wrap inside the bonus package */}
                        <View style={styles.RowView}>

                            <TouchableOpacity onPress={toggleModall} ref={iconReff} style={styles.PhoneView}>
                                <Image source={require('../../assets/Airtime.png')} style={styles.AirtimeLogo} />
                            </TouchableOpacity>
                            {/* The modal that reflects when you click the BonusView with the phone on it */}
                            <Modal visible={modalVisible} transparent={true} animationType='fade' onRequestClose={toggleModall}>
                                <TouchableOpacity style={styles.modalOverlay} onPress={toggleModall}>
                                    <View
                                        style={[
                                            styles.modalContentt,
                                            {
                                                top: modalPositional.top,
                                                left: modalPositional.left,
                                            }
                                        ]}>
                                    
                                        <View>
                                            <Image source={require('../../assets/Coin.png')} style={{ width:70 ,height:70 , }} />

                                        </View>

                                        <View style={styles.PhoneWrap}>
                                            <Image source={require('../../assets/Airtime.png')} style={{ width: 30, height: 30, justifyContent: 'center', alignSelf: 'center' }} />

                                        </View>

                                        <Text allowFontScaling={false}style={{ fontSize: 25, fontFamily: 'gilroy-bold', color: '#08003F', marginTop: 15 }}>Glo Airtime</Text>

                                        <Text allowFontScaling={false} style={{ fontFamily: 'gilroy-regular', marginTop: 15, color: '#08003F' }}>Buy Airtime and get up to 6% Cashback</Text>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 15 }}>
                                            <Image source={require('../../assets/Naira.png')} style={{ width: 40, height: 40, justifyContent: 'center' }} />
                                            <Text allowFontScaling={false} style={{ fontFamily: 'gilroy-bold', fontSize: 25, color: '#08003F', }}>+6%</Text>
                                        </View>

                                        <TouchableOpacity onPress={() => navigation.navigate('Airtime')} style={styles.GoNavigation}>

                                            <Text allowFontScaling={false} style={styles.GoTextNavi}>Go</Text>

                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            </Modal>



                            {/* the airtime write up and the coin */}
                            <View AirtimeNairaWrap>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 8 }}>
                                    <Text allowFontScaling={false}style={styles.AirtimeText}>MTN Data</Text>
                                    <Image source={require('../../assets/Naira.png')} style={styles.nairalogo} />
                                    <Text allowFontScaling={false} style={styles.percentText}>+2%</Text>
                                </View>


                                <Text allowFontScaling={false} style={styles.CashBText}>Buy Airtime and get up to</Text>
                                <Text allowFontScaling={false} style={styles.CashBText}>6% Cashback</Text>

                            </View>

                            <TouchableOpacity onPress={() => navigation.navigate('Airtime')} style={styles.GoView}>

                                <Text style={styles.GoText}>Go</Text>

                            </TouchableOpacity>


                        </View>

                    </View>


                    {/* The wrap of the bonus package */}
                    <View style={styles.BonusWrap}>

                        {/* the phone wrap inside the bonus package */}
                        <View style={styles.RowView}>

                            <TouchableOpacity onPress={toggleModall} ref={iconReff} style={styles.PhoneView}>
                                <Image source={require('../../assets/Airtime.png')} style={styles.AirtimeLogo} />
                            </TouchableOpacity>
                            {/* The modal that reflects when you click the BonusView with the phone on it */}
                            <Modal visible={modalVisible} transparent={true} animationType='fade' onRequestClose={toggleModall}>
                                <TouchableOpacity style={styles.modalOverlay} onPress={toggleModall}>
                                    <View
                                        style={[
                                            styles.modalContentt,
                                            {
                                                top: modalPositional.top,
                                                left: modalPositional.left,
                                            }
                                        ]}>
                                    
                                        <View>
                                            <Image source={require('../../assets/Coin.png')} style={{ width:70 ,height:70 , }} />

                                        </View>

                                        <View style={styles.PhoneWrap}>
                                            <Image source={require('../../assets/Airtime.png')} style={{ width: 30, height: 30, justifyContent: 'center', alignSelf: 'center' }} />

                                        </View>

                                        <Text allowFontScaling={false}style={{ fontSize: 25, fontFamily: 'gilroy-bold', color: '#08003F', marginTop: 15 }}>Glo Airtime</Text>

                                        <Text allowFontScaling={false} style={{ fontFamily: 'gilroy-regular', marginTop: 15, color: '#08003F' }}>Buy Airtime and get up to 6% Cashback</Text>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 15 }}>
                                            <Image source={require('../../assets/Naira.png')} style={{ width: 40, height: 40, justifyContent: 'center' }} />
                                            <Text allowFontScaling={false} style={{ fontFamily: 'gilroy-bold', fontSize: 25, color: '#08003F', }}>+6%</Text>
                                        </View>

                                        <TouchableOpacity onPress={() => navigation.navigate('Airtime')} style={styles.GoNavigation}>

                                            <Text allowFontScaling={false} style={styles.GoTextNavi}>Go</Text>

                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            </Modal>



                            {/* the airtime write up and the coin */}
                            <View AirtimeNairaWrap>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 8 }}>
                                    <Text allowFontScaling={false}style={styles.AirtimeText}>Airtel Data</Text>
                                    <Image source={require('../../assets/Naira.png')} style={styles.nairalogo} />
                                    <Text allowFontScaling={false} style={styles.percentText}>+2%</Text>
                                </View>


                                <Text allowFontScaling={false} style={styles.CashBText}>Buy Airtime and get up to</Text>
                                <Text allowFontScaling={false} style={styles.CashBText}>6% Cashback</Text>

                            </View>

                            <TouchableOpacity onPress={() => navigation.navigate('Airtime')} style={styles.GoView}>

                                <Text style={styles.GoText}>Go</Text>

                            </TouchableOpacity>


                        </View>

                    </View>


{/* The wrap of the bonus package */}
                    <View style={styles.BonusWrap}>

                        {/* the phone wrap inside the bonus package */}
                        <View style={styles.RowView}>

                            <TouchableOpacity onPress={toggleModall} ref={iconReff} style={styles.PhoneView}>
                                <Image source={require('../../assets/Airtime.png')} style={styles.AirtimeLogo} />
                            </TouchableOpacity>
                            {/* The modal that reflects when you click the BonusView with the phone on it */}
                            <Modal visible={modalVisible} transparent={true} animationType='fade' onRequestClose={toggleModall}>
                                <TouchableOpacity style={styles.modalOverlay} onPress={toggleModall}>
                                    <View
                                        style={[
                                            styles.modalContentt,
                                            {
                                                top: modalPositional.top,
                                                left: modalPositional.left,
                                            }
                                        ]}>
                                    
                                        <View>
                                            <Image source={require('../../assets/Coin.png')} style={{ width:70 ,height:70 , }} />

                                        </View>

                                        <View style={styles.PhoneWrap}>
                                            <Image source={require('../../assets/Airtime.png')} style={{ width: 30, height: 30, justifyContent: 'center', alignSelf: 'center' }} />

                                        </View>

                                        <Text allowFontScaling={false}style={{ fontSize: 25, fontFamily: 'gilroy-bold', color: '#08003F', marginTop: 15 }}>Glo Airtime</Text>

                                        <Text allowFontScaling={false} style={{ fontFamily: 'gilroy-regular', marginTop: 15, color: '#08003F' }}>Buy Airtime and get up to 6% Cashback</Text>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 15 }}>
                                            <Image source={require('../../assets/Naira.png')} style={{ width: 40, height: 40, justifyContent: 'center' }} />
                                            <Text allowFontScaling={false} style={{ fontFamily: 'gilroy-bold', fontSize: 25, color: '#08003F', }}>+6%</Text>
                                        </View>

                                        <TouchableOpacity onPress={() => navigation.navigate('Airtime')} style={styles.GoNavigation}>

                                            <Text allowFontScaling={false} style={styles.GoTextNavi}>Go</Text>

                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            </Modal>



                            {/* the airtime write up and the coin */}
                            <View AirtimeNairaWrap>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 8 }}>
                                    <Text allowFontScaling={false}style={styles.AirtimeText}>Glo Data</Text>
                                    <Image source={require('../../assets/Naira.png')} style={styles.nairalogo} />
                                    <Text allowFontScaling={false} style={styles.percentText}>+2%</Text>
                                </View>


                                <Text allowFontScaling={false} style={styles.CashBText}>Buy Airtime and get up to</Text>
                                <Text allowFontScaling={false} style={styles.CashBText}>6% Cashback</Text>

                            </View>

                            <TouchableOpacity onPress={() => navigation.navigate('Airtime')} style={styles.GoView}>

                                <Text style={styles.GoText}>Go</Text>

                            </TouchableOpacity>


                        </View>

                    </View>


{/* The wrap of the bonus package */}
                    <View style={styles.BonusWrap}>

                        {/* the phone wrap inside the bonus package */}
                        <View style={styles.RowView}>

                            <TouchableOpacity onPress={toggleModall} ref={iconReff} style={styles.PhoneView}>
                                <Image source={require('../../assets/Airtime.png')} style={styles.AirtimeLogo} />
                            </TouchableOpacity>
                            {/* The modal that reflects when you click the BonusView with the phone on it */}
                            <Modal visible={modalVisible} transparent={true} animationType='fade' onRequestClose={toggleModall}>
                                <TouchableOpacity style={styles.modalOverlay} onPress={toggleModall}>
                                    <View
                                        style={[
                                            styles.modalContentt,
                                            {
                                                top: modalPositional.top,
                                                left: modalPositional.left,
                                            }
                                        ]}>
                                    
                                        <View>
                                            <Image source={require('../../assets/Coin.png')} style={{ width:70 ,height:70 , }} />

                                        </View>

                                        <View style={styles.PhoneWrap}>
                                            <Image source={require('../../assets/Airtime.png')} style={{ width: 30, height: 30, justifyContent: 'center', alignSelf: 'center' }} />

                                        </View>

                                        <Text allowFontScaling={false}style={{ fontSize: 25, fontFamily: 'gilroy-bold', color: '#08003F', marginTop: 15 }}>Glo Airtime</Text>

                                        <Text allowFontScaling={false} style={{ fontFamily: 'gilroy-regular', marginTop: 15, color: '#08003F' }}>Buy Airtime and get up to 6% Cashback</Text>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 15 }}>
                                            <Image source={require('../../assets/Naira.png')} style={{ width: 40, height: 40, justifyContent: 'center' }} />
                                            <Text allowFontScaling={false} style={{ fontFamily: 'gilroy-bold', fontSize: 25, color: '#08003F', }}>+6%</Text>
                                        </View>

                                        <TouchableOpacity onPress={() => navigation.navigate('Airtime')} style={styles.GoNavigation}>

                                            <Text allowFontScaling={false} style={styles.GoTextNavi}>Go</Text>

                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            </Modal>



                            {/* the airtime write up and the coin */}
                            <View AirtimeNairaWrap>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 8 }}>
                                    <Text allowFontScaling={false}style={styles.AirtimeText}>9moblie Data</Text>
                                    <Image source={require('../../assets/Naira.png')} style={styles.nairalogo} />
                                    <Text allowFontScaling={false} style={styles.percentText}>+2%</Text>
                                </View>


                                <Text allowFontScaling={false} style={styles.CashBText}>Buy Airtime and get up to</Text>
                                <Text allowFontScaling={false} style={styles.CashBText}>6% Cashback</Text>

                            </View>

                            <TouchableOpacity onPress={() => navigation.navigate('Airtime')} style={styles.GoView}>

                                <Text style={styles.GoText}>Go</Text>

                            </TouchableOpacity>


                        </View>

                    </View>




                            </View>
                        </SafeAreaView>


                    </Modal>

                    <TouchableOpacity onPress={() => setModalSlide(true)} style={styles.ArrowView}>
                        <Text style={{ fontFamily: 'gilroy-regular', color: 'white' }}>View all</Text>
                        <MaterialIcons name="keyboard-arrow-down" size={20} color="white" />
                    </TouchableOpacity>








                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Main: {
        flex: 1,
        backgroundColor: '#08003F',
    },
    MotherView: {
        padding: 20,
        justifyContent: 'center',
    },
    RewardText: {
        fontFamily: 'gilroy-bold',
        color: 'white',
        fontSize: 30,
    },
    Topwrap: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconButton: {
        padding: 10,
        borderRadius: 50,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background
    },

    
    modalContent: {
        position: 'relative',
        width: 100, // Width of the modal
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // For Android shadow
    },

    modalText: {
        fontSize: 16,
        color: 'black',
        fontFamily: 'gilroy-regular',

    },

    modalText1: {
        fontSize: 16,
        color: 'black',
        fontFamily: 'gilroy-regular'

    },

    closeButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#f44336',
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },

    nairalogo: {
        width: 18,
        height: 18
    },

    CashbackText: {
        fontFamily: 'gilroy-regular',
        fontSize: 15,
        color: 'white',
        marginRight: 10,
        marginLeft: 5
    },

    CashbackView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },

    AmountView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },

    AmountText: {
        color: 'white',
        fontFamily: 'gilroy-bold',
        fontSize: 25,
        marginRight: 15
    },

    CalendarView: {
        backgroundColor: 'gray',
        opacity: 0.8,
        marginLeft: 8,
        borderRadius: 10,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },

    GiveawayView: {
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 75
    },

    FridayView: {
        marginLeft: 8
    },

    GiveawayText: {
        fontFamily: 'gilroy-bold',
        justifyContent: 'center',
        marginBottom: 5
    },
    CheckText: {
        fontFamily: 'gilroy-regular',
        fontSize: 12
    },

    GetNowView: {
        backgroundColor: '#08003F',
        borderRadius: 15,
        marginHorizontal: 40,
        width: 75,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    GetNowText: {
        fontFamily: 'gilroy-bold',
        fontSize: 12,
        color: 'white'
    },

    DailyText: {
        fontFamily: 'gilroy-bold',
        fontSize: 16,
        marginTop: 10,
        color: 'white'
    },

    DailyView: {
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 75,

    },

    modalContentt: {
        position: 'relative', // Width of the modal
        borderRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // For Android shadow
    },

    PhoneWrap: {
        borderRadius: 15,
        backgroundColor: '#E4E4FA',
        width: 50,
        height: 50,
        justifyContent: 'center',

    },

    BonusWrap: {
        backgroundColor: 'white',
        borderRadius: 12,
        alignSelf: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 10,
        height: 75
    },

    RowView: {
        flexDirection: 'row'
    },

    PhoneView: {
        backgroundColor: '#E6E6FA',
        opacity: 0.8,
        marginLeft: 8,
        borderRadius: 10,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },

    AirtimeLogo: {
        width: 25,
        height: 25,
        justifyContent: 'center'

    },

    percentText: {
        fontFamily: 'gilroy-bold',
        color: '#08003F',
        fontSize: 13
    },

    AirtimeText: {
        fontFamily: 'gilroy-bold',
        justifyContent: 'center',
        alignItems: 'center'
    },

    GoView: {

        backgroundColor: '#08003F',
        borderRadius: 15,
        marginHorizontal: 70,
        width: 50,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'

    },

    GoText: {
        fontFamily: 'gilroy-bold',
        color: 'white',
        fontSize: 12
    },

    CashBText: {
        fontFamily: 'gilroy-regular',
        fontSize: 12,
        marginLeft: 8
    },

    GoNavigation: {

        marginTop: 15,
        backgroundColor: '#08003F',
        borderRadius: 30,
        marginHorizontal: 70,
        width: 150,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15

    },

    GoTextNavi: {
        fontFamily: 'gilroy-bold',
        color: 'white',
        fontSize: 17
    },

    ArrowView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 15
    },

    Main1: {
        flex: 1,
        backgroundColor: '#08003F',
        height:'20%'

    },

    MotherView1: {
        padding: 15,
        justifyContent: 'center',
        
    }









});

export default Reward

