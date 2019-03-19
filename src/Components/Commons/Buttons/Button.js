import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export const Button = ({ label, onPress, color, customStyles }) => (
    <TouchableOpacity onPress={onPress} style={[customStyles, { backgroundColor: color, width: 70, height: 70, borderRadius: 50 }]}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', textAlign: 'center', padding: 15 }}>{label}</Text>
    </TouchableOpacity>

)