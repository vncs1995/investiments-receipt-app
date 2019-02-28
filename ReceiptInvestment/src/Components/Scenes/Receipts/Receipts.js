import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '../../Commons/Buttons/Button';

export default class Receipt extends Component {

    redirectTo(operation) {
        this.props.navigation.navigate('ChangeValue', { operation })
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.buttonContainer}>
                    <Button
                        label={'Adicionar'}
                        onPress={this.redirectTo.bind(this, 'add')}
                        color={'green'}
                    />

                    <Button
                        label={'Retirar'}
                        onPress={this.redirectTo.bind(this, 'sub')}
                        color={'red'}
                    />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white', justifyContent: 'center' },
    buttonContainer: { flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-around', margin: 20 },
});
