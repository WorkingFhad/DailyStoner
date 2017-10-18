/* @flow */
import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const leaf = require('../../../../../assets/Leaf2.png');

export default class StartSection extends Component {
    render() {
        return (
            <View style={styles.upper}>
                <View style={styles.menuSection}>
                    <TouchableOpacity>
                        <Ionicons name="ios-menu" size={38} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.startSection}>
                    <View style={styles.date}>
                        <Text style={styles.dateText}>October 17th</Text>
                    </View>
                    <TouchableOpacity style={styles.startButton}>
                        <Text style={styles.startButtonText}>START</Text>
                    </TouchableOpacity>
                </View>
                <Image resizeMode="cover" style={styles.leaf} source={leaf} />
            </View>
        );
    }
}
