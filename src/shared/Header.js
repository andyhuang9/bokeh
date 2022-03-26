import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native-web';
import {MaterialIcons } from '@expo/vector-icons';

function Header() {
    return (
       <Image source={require('../../assets/gojo.jpg')} style={styles.image}/>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        allignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 16,
    },
    image: {
        width: 50,
        height: 50,
    }
});

export default Header;