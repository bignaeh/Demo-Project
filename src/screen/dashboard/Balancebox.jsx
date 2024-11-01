import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Feather } from '@expo/vector-icons';


 function Balancebox({ navigation, value, onChangeText, }) {
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const [checked, setChecked] = useState(false);

    const toggleIcon = () => {
        setChecked(!checked);
    };
  return (
    <View style={styles.DashboardView}>

    <Text allowFontScaling={false} style={styles.BalanceText}>Available Balance:</Text>
    <TouchableOpacity onPress={toggleSecureEntry} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <FontAwesome6 name="naira-sign" size={20} color="black" style={{ marginLeft: 15, left: 10 }} />
        <Text allowFontScaling={false} style={{ fontSize: 25, fontFamily: 'gilroy-bold', marginLeft: 15, marginTop: 4 }}>
            {secureTextEntry ? '******' : '15000.00'} {/* Placeholder for actual balance */}
        </Text>
        <Feather name={secureTextEntry ? 'eye-off' : 'eye'} size={20} color="black" style={{ marginLeft: 165 }} />
    </TouchableOpacity>
</View>
  )
}

const styles = StyleSheet.create({
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
    
})


export default Balancebox