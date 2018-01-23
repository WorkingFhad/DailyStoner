/* @flow */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
// import Chat from '../Chat';
// import Dashboard from '../Dashboard';
// import Home from '../Home';

const roboto = require('../../../assets/Roboto-Bold.ttf');

export class Main extends Component {
    state = {
        fontLoaded: false,
    };
    static navigationOptions = ({ navigation }) => ({
        title: 'NEW SESH',
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
        headerLeft: <Ionicons name="ios-arrow-back" style={{ color: 'white', fontSize: 30 }} onPress={() => navigation.goBack()} />,
        headerRight: (
            <Ionicons
                onPress={() => Alert.alert('Are you sure?')}
                name="md-close"
                style={{ color: 'white', fontSize: 30 }}
            />
        ),
    });
    async componentDidMount() {
        await Font.loadAsync({
            roboto,
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        if (! this.state.fontLoaded) {
            return null;
        }

        return (
            <View
                style={{
                    backgroundColor: 'white',
                    flex: 1,
                    paddingTop: 100,
                }}
            >
                <TouchableOpacity
                    onPress={() => this.goTo('Sessions')}
                    style={{ alignItems: 'flex-end' }}
                >
                    <Text
                        style={{
                            fontFamily: 'roboto',
                            fontSize: 26,
                            textAlign: 'right',
                            marginBottom: 0,
                            paddingBottom: 10,
                            margin: 20,
                        }}
                    >
                        {/* SESSIONS */}
                    </Text>
                </TouchableOpacity>
                <View
                    style={{
                        alignItems: 'flex-end',
                        alignSelf: 'flex-start',
                        justifyContent: 'flex-end',
                    }}
                >
                    <TouchableOpacity
                        style={{
                            borderRadius: 5,
                            margin: 20,
                        }}
                    >
                        <Text
                            style={{
                                backgroundColor: 'transparent',
                                fontFamily: 'roboto',
                                fontSize: 20,
                                padding: 10,
                                textAlign: 'center',
                                color: 'black',
                            }}
                        >
                            {/* START SESH */}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    goTo(route) {
        this.props.navigation.navigate(route);
    }
}

export default Main;
