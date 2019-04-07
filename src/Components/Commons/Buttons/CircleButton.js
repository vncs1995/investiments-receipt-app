/* eslint-disable import/prefer-default-export */
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export const CircleButton = ({
  label, onPress, color, customStyles
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[customStyles, {
      backgroundColor: color, width: 70, height: 70, borderRadius: 50
    }]}
  >
    <Text style={styles.label}>
      {label}
    </Text>
  </TouchableOpacity>

);

CircleButton.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  customStyle: PropTypes.object
};

const styles = StyleSheet.create({
  label: {
    fontSize: 30, fontWeight: 'bold', color: 'white', textAlign: 'center', padding: 15
  }
});
