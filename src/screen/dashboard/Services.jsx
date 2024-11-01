import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

 function Services() {
    const navigation = useNavigation();
    return (
        <View style={styles.OptionView1}>
            <View style={styles.ListView1}>
                <TouchableOpacity onPress={() => navigation.navigate('Airtime')}>
                    <Image source={require('../../../assets/Airtime.png')} style={styles.ScrollView} />
                    <Text allowFontScaling={false} style={{ fontFamily: 'gilroy-regular', fontSize: 12 }}>Airtime</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate()}>
                    <Image source={require('../../../assets/Data.png')} style={styles.ScrollView} />
                    <Text allowFontScaling={false} style={{ fontFamily: 'gilroy-regular', fontSize: 12 }}>Data</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Betting')}>
                    <Image source={require('../../../assets/Betting.png')} style={styles.ScrollView} />
                    <Text allowFontScaling={false}style={{ fontFamily: 'gilroy-regular', fontSize: 12 }}>Betting</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Invest')}>
                    <Image source={require('../../../assets/Invest.png')} style={styles.ScrollView} />
                    <Text allowFontScaling={false} style={{ fontFamily: 'gilroy-regular', fontSize: 12 }}>Invest</Text>

                </TouchableOpacity>

            </View>

            <View style={styles.ListView2}>
                <TouchableOpacity onPress={() => navigation.navigate()}>
                    <Image source={require('../../../assets/Transportation.png')} style={styles.ScrollView} />
                    <Text allowFontScaling={false} style={{ fontFamily: 'gilroy-regular', fontSize: 12 }}>Transport</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate()}>
                    <Image source={require('../../../assets/TV.png')} style={styles.ScrollView} />
                    <Text allowFontScaling={false} style={{ fontFamily: 'gilroy-regular', fontSize: 12, marginLeft: 5 }}>TV</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate()}>
                    <Image source={require('../../../assets/Electricity.png')} style={styles.ScrollView} />
                    <Text allowFontScaling={false} style={{ fontFamily: 'gilroy-regular', fontSize: 12 }}>Electricity</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate()}>
                    <Image source={require('../../../assets/More.png')} style={styles.ScrollView} />
                    <Text allowFontScaling={false} style={{ fontFamily: 'gilroy-regular', fontSize: 12 }}>More</Text>
                </TouchableOpacity>



            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    OptionView1: {
        borderRadius: 20,
        backgroundColor: 'white',
        marginTop: 50,
        padding: 20,
        justifyContent: 'space-between',
        width: 350,
        height: 140
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


})

export default Services