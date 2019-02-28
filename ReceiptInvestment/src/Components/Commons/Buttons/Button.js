import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export const Button = ({ label, onPress, color, customStyles }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={[customStyles, { backgroundColor: color, padding: 20, borderRadius: 50 }]}>
            <Text style={{ color: 'white', textAlign: 'center' }}>{label}</Text>
        </View>
    </TouchableOpacity>

)