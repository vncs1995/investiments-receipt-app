import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { RegularButton } from '../../Commons/Buttons/RegularButton';
import { colors } from '../../../constants/colors';

export default class ChangeValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reason: '',
      value: '',
      operation: ''
    };
  }

  componentDidMount() {
    const { operation } = this.props.navigation.state.params;
    this.setState({ operation });
  }

  submitValues() {
    console.log('reason: ', this.state.reason);
    console.log('value: ', this.state.value);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center' }}>
      <View style={{marginHorizontal: 20}}>
        <TextInput
          placeholder="Motivo"
          style={{
            height: 40, borderBottomColor: 'grey', borderBottomWidth: 1, marginVertical: 20
          }}
          onChangeText={reason => this.setState({ reason })}
          value={this.state.reason}
        />

        <TextInput
          placeholder="Valor"
          style={{
            height: 40, borderBottomColor: 'grey', borderBottomWidth: 1, marginVertical: 20
          }}
          onChangeText={value => this.setState({ value })}
          value={this.state.value}
        />

        <RegularButton
          label="OK"
          customStyles={{ alignSelf: 'center', marginTop: 20 }}
          onPress={() => this.submitValues()}
          color={this.state.operation === 'add' ? colors.aqua : colors.coral}
        />
</View>
      </View>
    );
  }
}
