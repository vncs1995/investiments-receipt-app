import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button } from '../../Commons/Buttons/Button';

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
            <View style={{ flex: 1, marginHorizontal: 20, justifyContent: 'center' }}>
                <TextInput
                    placeholder={'Motivo'}
                    style={{ height: 40, borderBottomColor: 'grey', borderBottomWidth: 1, marginVertical: 20 }}
                    onChangeText={(reason) => this.setState({ reason })}
                    value={this.state.reason}
                />

                <TextInput
                    placeholder={'Valor'}
                    style={{ height: 40, borderBottomColor: 'grey', borderBottomWidth: 1, marginVertical: 20 }}
                    onChangeText={(value) => this.setState({ value })}
                    value={this.state.value}
                />

                <Button
                    label={'OK'}
                    onPress={() => this.submitValues()}
                    color={this.state.operation === 'add' ? 'green' : 'red'}
                    customStyles={{ marginTop: 20 }}
                />

            </View>
        );
    }
}
