import { StyleSheet, Text, View, SafeAreaView, Systrace } from 'react-native';
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState, useCallback } from 'react';
import Onboarding from './src/screen/Onboarding';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/screen/LoginScreen';
import Dashboard from './src/screen/Dashboard';
import Airtime from './src/screen/Airtime';
import ConfirmAirtime from './src/screen/ConfirmAirtime';
import Reward from './src/screen/Reward';
import { Feather, AntDesign,Ionicons,MaterialIcons } from '@expo/vector-icons';
import Data from './src/screen/Data';
import Me from './src/screen/Me';



const Tab = createBottomTabNavigator();
function TabScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home'; // Replace with your preferred icon names
          } else if (route.name === 'Reward') {
            iconName = focused ? 'star' : 'star-outline'; // Use icon names that fit your needs
          } else if (route.name === 'Data') {
            iconName = focused ? 'settings' : 'settings';
          }else if (route.name === 'Me') {
            iconName = focused ? 'sentiment-very-satisfied' : 'sentiment-very-satisfied';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#08003F',
        tabBarInactiveTintColor: '#B7B7B7',
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: 'gilroy-medium',
          marginBottom: 8,
        },
        tabBarLabelPosition: 'below-icon',
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Reward"
        component={Reward}
        options={{ headerShown: false }}
      />

      <Tab.Screen
       name="Data"
       component={Data}
       options={{headerShown: false}}
       />

      <Tab.Screen 
      options={{headerShown: false}} 
      name="Me" component={Me}
      />
      
    </Tab.Navigator>
  );
}





function App() {
  const [fontsLoaded] = useFonts({
    "gilroy-regular": require("./assets/GilroyFont/Gilroy-Regular.ttf"),
    "gilroy-bold": require("./assets/GilroyFont/Gilroy-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    try {
      if (fontsLoaded) {
        // Perform any additional setup or async operations here

        // Hide the splash screen
        await SplashScreen.hideAsync();
      }
    } catch (e) {
      console.error("Error hiding splash screen:", e);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const Stack = createNativeStackNavigator()

  return (

 
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen options={{headerShown: false}} name="Tab" component={TabScreen}/>
        <Stack.Screen options={{headerShown: false}} name="Onboarding" component={Onboarding}/>
        <Stack.Screen options={{headerShown: false}} name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen options={{headerShown: false}} name="Dashboard" component={Dashboard}/>
        <Stack.Screen options={{headerShown: false}} name="Airtime" component={Airtime}/>
        <Stack.Screen options={{headerShown: false}} name="ConfirmAirtime" component={ConfirmAirtime}/>
       </Stack.Navigator>
     </NavigationContainer>
  );
}

{}
export default App