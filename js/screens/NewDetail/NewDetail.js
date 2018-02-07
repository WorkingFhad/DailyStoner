/* @flow */
import React, { Component } from 'react';
import { View, Text, TextInput, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import * as assetsModule from '../../state/modules/assets';

class NewDetail extends Component<*, *> {
    static navigationOptions = ({ navigation }) => ({
        title: 'New Method',
        headerLeft: <Ionicons name="ios-arrow-back" style={{ color: 'white', fontSize: 30 }} onPress={() => navigation.goBack()} />,
        headerStyle: {
            borderBottomColor: '#f0f0f0',
            borderBottomWidth: 0,
            padding: 15,
            paddingTop: 35,
            paddingBottom: 35,
            backgroundColor: '#596157',
        },
        headerTitleStyle: {
            alignSelf: 'center',
            fontSize: 20,
            color: 'white',
            fontFamily: 'Georgia',
        },
    });

    state = {
        detail: '',
    }

    componentDidMount() {
        this.myTextInput.focus();
    }

    render() {
        const { props } = this;
        const styles = {
            wrapper: {
                flex: 1,
                paddingTop: 30,
                padding: 20,
                backgroundColor: 'white',
            },
            title: {
                fontSize: 20,
                fontFamily: 'Georgia',
                marginTop: 10,
            },
            title2: {
                fontSize: 20,
                fontFamily: 'Georgia',
                marginTop: 10,
            },
            textBox: {
                paddingBottom: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#596157',
                marginRight: 20,
                marginLeft: 0,
            },
        };

        return (
            <View style={{ flex: 1 }}>
                <View style={styles.wrapper}>
                    <Ionicons
                        name="ios-close"
                        style={{ color: '#596157', fontSize: 40 }}
                        onPress={() => {
                            Keyboard.dismiss();
                            props.navigation.goBack();
                        }}
                    />
                    <Text style={styles.title}>Enter consumption method</Text>
                    <Text style={styles.title2}>i.e Vape</Text>
                    <View style={styles.textBox}>
                        <TextInput
                            style={{ marginTop: 60, fontSize: 18, fontFamily: 'Georgia' }}
                            placeholder="Consumption Method"
                            ref={(ref) => { this.myTextInput = ref; }}
                            onSubmitEditing={this.done}
                            returnKeyType="done"
                            onChangeText={detail => this.setState({ detail })}
                        />
                    </View>
                </View>
            </View>
        );
    }

    done = () => {
        const name = this.state.detail;
        this.props.addMethod(name);
        Keyboard.dismiss();
        this.props.navigation.goBack();
    }
}

const mapDispatchToProps = dispatch => ({
    addMethod: method => dispatch(assetsModule.addMethod(method)),
});

export default connect(null, mapDispatchToProps)(NewDetail);
