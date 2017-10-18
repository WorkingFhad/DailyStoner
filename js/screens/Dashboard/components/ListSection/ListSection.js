/* @flow */
import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

import styles from './styles';

const leaf = require('../../../../../assets/LeafRating.png');

export default class ListSection extends Component {
    render() {
        return (
            <ScrollView style={styles.lower} scrollEnabled>
                <View style={{ flex: 1 }}>
                    {[0, 1, 2, 3, 4, 5].map(l => this.renderListItem(l))}
                </View>
            </ScrollView>
        );
    }

    renderListItem(l) {
        return (
            <View style={styles.listItem} key={l}>
                <View>
                    <Text style={styles.listText}>Monday, October 16th</Text>
                    <Text style={styles.listTextSub}>Bong | Pineapple Cookies</Text>
                </View>
                <View style={{ flexDirection: 'row', top: 2 }}>
                    <Image style={styles.leafRating} source={leaf} />
                    <Image style={styles.leafRating} source={leaf} />
                    <Image style={styles.leafRating} source={leaf} />
                    <Image style={styles.leafRating} source={leaf} />
                </View>
            </View>
        );
    }
}
