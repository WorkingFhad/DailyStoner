/* @flow */
import React, { Component } from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo';

import StartSection from './components/StartSection';
import ListSection from './components/ListSection';

import styles from './styles';

export default class Dashboard extends Component {
    render() {
        return (
            <LinearGradient
                colors={['#96BE4F', '#429321', '#2B6A12']}
                locations={[0, 0.3, 1]}
                style={styles.container}
            >
                <StartSection />
                <View style={styles.median} />
                <ListSection />
            </LinearGradient>
        );
    }
}
