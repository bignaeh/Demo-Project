import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons';

function Header() {
    return (
        <View style={styles.TopView}>
            <TouchableOpacity onPress={() => navigation.navigate()}>
                <AntDesign name="profile" size={25} color="white" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate()}>
                <AntDesign name="customerservice" size={25} color="white" style={{ marginLeft: 275 }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate()}>
                <Ionicons name="notifications-outline" size={25} color="white" style={{ justifyContent: 'space-between', marginLeft: 6 }} />

            </TouchableOpacity>


        </View>

    )
}

const styles = StyleSheet.create({
    TopView: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'
    }
})

export default Header