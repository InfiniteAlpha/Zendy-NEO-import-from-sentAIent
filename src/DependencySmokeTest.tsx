import * as React from 'react';
import { View, Text } from 'react-native';
import { Audio } from 'expo-av';
import * as Notifications from 'expo-notifications';
import * as Contacts from 'expo-contacts';
import * as FileSystem from 'expo-file-system';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';
import { Capacitor } from '@capacitor/core';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function DependencySmokeTest() {
const supabase = createClient('https://test.supabase.co', 'public-anon-key');
const stripe = new Stripe('sk_test_fake', { apiVersion: '2025-10-29.clover' });
return (
<View>
<Text>
expo-av: {Audio ? 'OK' : 'FAIL'} |
expo-notifications: {Notifications ? 'OK' : 'FAIL'} |
expo-file-system: {FileSystem ? 'OK' : 'FAIL'} |
expo-contacts: {Contacts ? 'OK' : 'FAIL'} |
react-navigation: {typeof useNavigation === 'function' ? 'OK' : 'FAIL'} |
supabase: {typeof supabase === 'object' ? 'OK' : 'FAIL'} |
stripe: {typeof stripe === 'object' ? 'OK' : 'FAIL'} |
capacitor: {Capacitor ? 'OK' : 'FAIL'}
</Text>
</View>
);
}
