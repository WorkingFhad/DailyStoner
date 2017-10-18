/* @flow */
import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const leaf = require('../../../../../assets/Leaf2.png');

export default class StartSection extends Component {
    render() {
        return (
            <View style={styles.upper}>
                <View style={styles.menuSection}>
                    <TouchableOpacity onPress={this.props.endChat}>
                        <Ionicons name="ios-menu" size={38} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.startSection}>
                    <View style={styles.date}>
                        <Text style={styles.dateText}>October 17th</Text>
                    </View>
                    <TouchableOpacity onPress={this.props.startChat} style={styles.startButton}>
                        <Text style={styles.startButtonText}>START</Text>
                    </TouchableOpacity>
                </View>
                <Animated.View
                    style={[
                        styles.leafWrapper,
                        {
                            opacity: this.props.chatHeight.interpolate({
                                inputRange: [300, 500],
                                outputRange: [1, 0.0],
                            }),
                        },
                    ]}
                >
                    <Image resizeMode="cover" style={styles.leaf} source={leaf} />
                </Animated.View>
            </View>
        );
    }
}
