import React, { Component } from 'react';
import {
  View, StyleSheet, SectionList, Text
} from 'react-native';
import { CircleButton } from '../../Commons/Buttons/CircleButton';
import { colors } from '../../../constants/colors';
import { CardReceipt } from '../../Commons/Cards/CardReceipt';

export default class Receipt extends Component {
  state = {
    fetchedData: [
      {
        month: new Date().toLocaleString('en-us', { month: 'long' }),
        year: new Date().getFullYear(),
        cashIn: [{
          date: new Date().toISOString(),
          amount: 239.12
        }],
        cashOut: [{
          date: new Date().toISOString(),
          amount: 1500.20
        }]
      },
      {
        month: new Date().toLocaleString('en-us', { month: 'long' }),
        year: new Date().getFullYear(),
        cashIn: [{
          date: new Date().toISOString(),
          amount: 239.12
        }],
        cashOut: [{
          date: new Date().toISOString(),
          amount: 1500.20
        }]
      }
    ]
  }

  getSections() {
    const { fetchedData } = this.state;
    console.log('fetchedData');
    if (fetchedData) {
      return fetchedData.map(data => ({
        title: `${data.month} ${data.year}`,
        data: data.cashIn.concat(data.cashOut)
      }));
    } else {
      console.log('NO fetchedData');
    }
  }

  redirectTo(operation) {
    const { navigate } = this.props.navigation;
    navigate('ChangeValue', { operation });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 6, marginHorizontal: 20 }}>
          <SectionList
            indicatorStyle="white"
            renderItem={({ item, index, section }) => <CardReceipt receiptData={item} />}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={{ fontWeight: 'bold', marginVertical: 20, color: colors.purple }}>{title}</Text>
            )}
            sections={this.getSections()}
            keyExtractor={(item, index) => item + index}
          />

        </View>

        <View style={styles.buttonContainer}>
          <CircleButton
            label="+"
            onPress={() => this.redirectTo('add')}
            color={colors.aqua}
          />

          <CircleButton
            label="-"
            onPress={() => this.redirectTo('sub')}
            color={colors.coral}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, justifyContent: 'center' },
  buttonContainer: {
    flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-around', marginHorizontal: 20, marginBottom: 40
  },
});
