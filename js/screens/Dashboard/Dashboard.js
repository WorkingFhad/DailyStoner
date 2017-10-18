/* @flow */
import React, { Component } from 'react';
import { View, Animated, Dimensions, PanResponder } from 'react-native';
import { LinearGradient } from 'expo';

import StartSection from './components/StartSection';
import ListSection from './components/ListSection';

import styles from './styles';

const DEVICE_HEIGHT = Dimensions.get('window').height;

export default class Dashboard extends Component {
    state = {
        chatHeight: new Animated.ValueXY({ x: 0, y: 300 }),
    };

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderGrant: () => this.setState({ scroll: false }),
            onPanResponderMove: Animated.event([
                null,
                { dx: this.state.chatHeight.x, dy: this.state.chatHeight.y },
            ]),
            onPanResponderRelease: () => this.setState({ scroll: true }),
        });
    }
    render() {
        return (
            <LinearGradient
                colors={['#96BE4F', '#429321', '#2B6A12']}
                locations={[0, 0.3, 1]}
                style={styles.container}
            >
                <Animated.View
                    style={{
                        height: this.state.chatHeight.y,
                        opacity: this.state.chatHeight.y.interpolate({
                            inputRange: [100, 300],
                            outputRange: [0, 1],
                        }),
                    }}
                >
                    <StartSection
                        chatHeight={this.state.chatHeight.y}
                        startChat={this.startChat}
                        endChat={this.endChat}
                    />
                    <View style={styles.median} />
                </Animated.View>
                <Animated.View style={{ backgroundColor: 'orange', height: 1000 }}>
                    <ListSection openList={this.openList} />
                </Animated.View>
            </LinearGradient>
        );
    }

    startChat = () => {
        Animated.spring(this.state.chatHeight.y, {
            toValue: DEVICE_HEIGHT,
        }).start();
    };

    endChat = () => {
        Animated.spring(this.state.chatHeight.y, {
            toValue: 300,
        }).start();
    };

    openList = () => {
        Animated.spring(this.state.chatHeight.y, {
            toValue: 50,
        }).start();
    };
}
