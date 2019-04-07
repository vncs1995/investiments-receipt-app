/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');

export const RegularButton = ({
  label, onPress, color, customStyles
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[customStyles, { backgroundColor: color, width: width / 2, borderRadius: 10 }]}
  >
    <Text style={styles.label}>
      {label}
    </Text>
  </TouchableOpacity>
);

RegularButton.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  customStyle: PropTypes.object
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    padding: 10
  }
});
