/* @flow */
import React, { Component } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient, Font } from 'expo';

import styles from './styles';

const leaf = require('../../../assets/leaf1x.png');
const curve = require('../../../assets/curve.png');
const gabriela = require('../../../assets/Gabriela-Regular.ttf');
const list = require('../../../assets/list.png');
const chat = require('../../../assets/chat.png');
const chart = require('../../../assets/chart.png');
const settings = require('../../../assets/settings.png');

export default class Home extends Component {
    state = {
        fontLoaded: false,
    };
    async componentDidMount() {
        await Font.loadAsync({
            gabriela,
        });
        this.setState({ fontLoaded: true });
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="light-content" />
                <LinearGradient
                    colors={['#B4EC51', '#5BA72B', '#4E9C26', '#429321']}
                    locations={[0, 0.45, 0.6, 0.79]}
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        position: 'relative',
                        alignItems: 'center',
                    }}
                >
                    <Image style={styles.leaf} resizeMode="contain" source={leaf}>
                        <View style={{ flex: 1 }}>
                            <View
                                style={{
                                    flex: 6,
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                            >
                                {this.state.fontLoaded ? (
                                    <Text
                                        style={{
                                            fontFamily: 'gabriela',
                                            fontSize: 40,
                                            backgroundColor: 'transparent',
                                            color: 'white',
                                            top: 170,
                                            textShadowColor: '#417505',
                                            textShadowOffset: { width: 1, height: 1 },
                                            textShadowRadius: 1,
                                        }}
                                    >
                                        DailyStoner
                                    </Text>
                                ) : null}
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => Alert.alert('good job')}
                                >
                                    <View>
                                        <Text style={{ color: 'white' }}>Start Session</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.tabBar}>
                                <View style={{ height: 100 }}>
                                    <Image resizeMode="contain" source={curve}>
                                        <View style={styles.curve}>
                                            <Image source={list} />
                                            <Image source={chat} />
                                            <Image source={chart} />
                                            <Image source={settings} />
                                        </View>
                                    </Image>
                                </View>
                                <View style={styles.tabBarBelow}>
                                    <Text />
                                </View>
                            </View>
                        </View>
                    </Image>
                </LinearGradient>
            </View>
        );
    }
}
