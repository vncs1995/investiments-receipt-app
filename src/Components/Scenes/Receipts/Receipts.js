import React, { Component } from 'react';
import { View, StyleSheet, SectionList, Text } from 'react-native';
import { Button } from '../../Commons/Buttons/Button';
import { colors } from '../../../constants/colors';

export default class Receipt extends Component {

    redirectTo(operation) {
        this.props.navigation.navigate('ChangeValue', { operation })
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{ flex: 6, marginHorizontal: 20 }}>
                    <SectionList
                        indicatorStyle={'white'}
                        renderItem={({ item, index, section }) => <Text style={{ margin: 10 }} key={index}>{item}</Text>}
                        renderSectionHeader={({ section: { title } }) => (
                            <Text style={{ fontWeight: 'bold', marginVertical: 20 }}>{title}</Text>
                        )}
                        sections={[
                            { title: 'Cash-In', data: ['item1', 'item2'] },
                            { title: 'Cash-Out', data: ['item3', 'item4'] },
                        ]}
                        keyExtractor={(item, index) => item + index}
                    />

                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        label={'+'}
                        onPress={this.redirectTo.bind(this, 'add')}
                        color={colors.aqua}
                    />

                    <Button
                        label={'-'}
                        onPress={this.redirectTo.bind(this, 'sub')}
                        color={colors.coral}
                    />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background, justifyContent: 'center' },
    buttonContainer: { flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-around', marginHorizontal: 20, marginBottom: 40 },
});
