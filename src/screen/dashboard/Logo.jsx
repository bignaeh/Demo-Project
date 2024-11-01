import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

function Logo() {
    return (
        <View style={styles.LogoView}>
            <Image source={require('../../../assets/Flatpay.png')} style={styles.FlatplayView} />
            <Text style={styles.LogoText}>We've got you covered.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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

export default Logo