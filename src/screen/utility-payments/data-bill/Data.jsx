import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView} from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Contacts from 'expo-contacts';
import Modal from "react-native-modal";
import { Ionicons } from '@expo/vector-icons';

function Data() {
  const [visible, setVisible] = useState(false);
  
 
  const [query, setQuery] = useState("");
  const [formFilled, setFormFilled] = useState({ phone: '', amount: '' });

  const [contacts, setContacts] = useState([]);
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const fetchContacts = async () => {
    if (hasPermission) {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
      });
      console.log('Contacts fetched:', data); // Check if contacts are fetched
      setContacts(data);
    } else {
      console.log('No permission to access contacts');
    }
    setVisible(!visible);
  };

  const filterData = contacts.filter((contact) => 
    contact.name.toLowerCase().includes(query.toLowerCase())
  );
  console.log('Filtered data:', filterData); // Check filtered data

  // Function to update formFilled state
  const handleInputChange = (fieldName, value) => {
    setFormFilled(prevState => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  // Function to check if all form fields are filled
  const isFormComplete = () => {
    for (const key in formFilled) {
      if (formFilled[key].trim() === '') {
        return false;
      }
    }
    return true;
  };

  return (
    <KeyboardAvoidingView
    behavior="padding" // or 'height' based on your layout needs
    style={styles.Main}
  >
    <SafeAreaView >
   
      <ScrollView style={{ padding: 20 }}>

     
      
        <View style={styles.InputView}>
        
          <TextInput
            style={styles.TextInput}
            placeholderTextColor={'black'}
            placeholder="Enter Phone Number"
            value={formFilled.phone}
            keyboardType='numeric'
            onChangeText={value => handleInputChange('phone', value)} 
          />
          
          <TouchableOpacity onPress={fetchContacts}>
            <View style={styles.iconView}>
              <Ionicons name="person-outline" size={13} color="#E25D1A" />
            </View>
          </TouchableOpacity>
          
        </View>
      
        
      </ScrollView>
       

      <Modal
        isVisible={visible}
            style={{margin:0}}
        animationType="slide"
        onBackdropPress={() => setVisible(false)}      >

        <View style={styles.modalContainer}>
          <View style={styles.TextInputView2}>

            <TextInput allowFontScaling={false} style={{ fontSize: 13, width:250, fontFamily: 'gilroy-regular', marginLeft: 5 }}
              placeholder='Search your contacts'
              value={query}
              onChangeText={value => setQuery(value)} />
          </View>
          {contacts.length > 0 && (

<FlatList
data={filterData}
keyExtractor={(item) => item.id || item.phoneNumbers[0].number} // Ensure unique key
renderItem={({ item }) => (
  <TouchableOpacity
    onPress={() => {
      setFormFilled({ ...formFilled, phone: item.phoneNumbers[0].number });
      setVisible(false);
      setQuery("");
    }}
    style={styles.contactItem}
  >
    <Text style={styles.contactName}>{item.name}</Text>
    {item.phoneNumbers && item.phoneNumbers.length > 0 && (
      <Text style={styles.contactPhone}>{item.phoneNumbers[0].number}</Text>
    )}
  </TouchableOpacity>
              )}
            />
          )}
         
        </View>
      </Modal>
    </SafeAreaView>
     </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: 'gray',
    
  },
  InputView: {
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 0.5,
    width: '100%',
    height: 45,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEFEFE',
    
  },
  TextInput: {
    color: 'black'
  },
  iconView: {
    backgroundColor: '#FDF5F1',
    width: 28,
    height: 28,
    borderRadius: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    marginRight: 6,
    marginLeft: 30,
    alignItems: 'center',
  },
  searchInput: {
    fontSize: 10,
    width: 250,
    fontFamily: 'gilroy-regular',
    marginLeft: 5,
  },
  contactItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contactName: {
    fontSize: 16,
    fontFamily: 'gilroy-bold',
  },
  contactPhone: {
    fontSize: 14,
    color: '#888',
    fontFamily: 'gilroy-medium',
  },
  modalContainer: {
     position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    width: '100%',
    height: '50%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 20,
  },
  TextInputView2: {
    width: "100%",
    height: 45,
    marginBottom: 5,
    marginTop: 6,
    borderRadius: 6,
    borderColor: "#ccc",
    backgroundColor: "#FEFEFE",
    borderWidth: 0.3,

    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 10,
},
});

export default Data;
