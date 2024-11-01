
import React, { useState } from 'react';
import {  TextInput, Button, Alert ,SafeAreaView} from 'react-native';
import axios from 'axios';

const BackendTest = () => {
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = async () => {
        console.log("Button pressed");
        try {
            const response = await axios.post('http://localhost:3000/submit', {
                fullName,
                address,
                phoneNumber,
            });
            Alert.alert('Success', `User ${response.data.fullName} added!`);
            setFullName('');
            setAddress('');
            setPhoneNumber('');
        } catch (error) {
            console.log(error);
            Alert.alert('Error', error.response?.data?.error || 'An error occurred');
        }
    };

    return (
        <SafeAreaView style={{ padding: 20,marginHorizontal:20 }}>
            <TextInput
                placeholder="Full Name"
                value={fullName}
                onChangeText={setFullName}
                style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
            />
            <TextInput
                placeholder="Address"
                value={address}
                onChangeText={setAddress}
                style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
            />
            <TextInput
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
                keyboardType="phone-pad"
            />
            <Button title="Submit" onPress={handleSubmit} />
        </SafeAreaView>
    );
};

export default BackendTest;
