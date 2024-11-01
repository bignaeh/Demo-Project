import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

function Paymentbox() {
  return (
    <View style={styles.OptionView}>
      <View style={styles.ListView}>
        <TouchableOpacity onPress={() => navigation.navigate()}>
          <Image source={require('../../../assets/Deposit.png')} style={styles.ScrollView} />
          <Text style={{ fontFamily: 'gilroy-regular', fontSize: 12 }}>Deposit</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate()}>
          <Image source={require('../../../assets/Withdraw.png')} style={styles.ScrollView} />
          <Text style={{ fontFamily: 'gilroy-regular', fontSize: 12 }}>Withdraw</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate()}>
          <Image source={require('../../../assets/ATMcard.png')} style={styles.ScrollView} />
          <Text style={{ fontFamily: 'gilroy-regular', fontSize: 12 }}>ATM Card</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate()}>
          <Image source={require('../../../assets/Loan.png')} style={styles.ScrollView} />
          <Text style={{ fontFamily: 'gilroy-regular', fontSize: 12 }}>Loan</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({

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


ScrollView: {
  width: 25,
  height: 25,
  justifyContent: 'center',
  alignSelf: 'center'
},


})

export default Paymentbox