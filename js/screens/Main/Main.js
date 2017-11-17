/* @flow */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

const roboto = require('../../../assets/Roboto-Bold.ttf');

export class Main extends Component {
    state = {
        fontLoaded: false,
    };
    static navigationOptions = ({ navigation }) => ({
        title: 'October 21st',
        headerStyle: {
            borderBottomColor: '#f0f0f0',
            borderBottomWidth: 0,
            padding: 15,
            paddingTop: 35,
            paddingBottom: 25,
            backgroundColor: 'white',
        },
        headerTitleStyle: {
            alignSelf: 'center',
            fontSize: 20,
            color: 'black',
            fontFamily: 'Georgia',
        },
        headerLeft: null,
        headerRight: (
            <Ionicons
                onPress={() => navigation.goBack()}
                name="md-close"
                style={{ color: 'black', fontSize: 30 }}
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
        return <View style={{ flex: 1, backgroundColor: 'white' }} />;
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
                        SESSIONS
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
                            START SESH
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
