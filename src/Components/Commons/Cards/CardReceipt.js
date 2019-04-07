/* eslint-disable import/prefer-default-export */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../../../constants/colors';

export const CardReceipt = ({ receiptData }) => (
  <View style={styles.container}>
    <Text style={styles.date}>{receiptData.date}</Text>
    <Text style={styles.amount}>{receiptData.amount}</Text>
  </View>
);

CardReceipt.propTypes = {
  receiptData: PropTypes.shape({
    date: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
  }).isRequired
};

const styles = StyleSheet.create({
  container: { backgroundColor: 'white', marginVertical: 10, padding: 30, borderRadius: 10, shadowColor: colors.purple, shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.05 },
  date: { color: colors.coral },
  amount: { color: colors.coral }
});
