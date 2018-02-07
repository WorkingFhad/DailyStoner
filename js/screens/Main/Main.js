/* @flow */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView, Dimensions, FlatList, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Button } from 'native-base';
import { Font, BlurView } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import ActionSheet from 'react-native-actionsheet';
import { connect } from 'react-redux';

import * as sessionModule from '../../state/modules/session';

const sliderWidth = Dimensions.get('window').width;

const roboto = require('../../../assets/Roboto-Bold.ttf');

const buttonStyle = { backgroundColor: 'white', padding: 30, width: 300, alignItems: 'center', marginTop: 10 };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'grey',
    },
    innerContainer: {
        alignItems: 'center',
    },
});

export class Main extends Component {

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

    componentDidMount() {
        setTimeout(() => {
            this.flatList.scrollToEnd({ animated: true });
        }, 200);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: '#fff' }}>
                    {this.renderMessages()}
                    {this.renderChoices()}
                    <ActionSheet
                        ref={o => this.ActionSheet = o}
                        options={['Add New', 'Cancel']}
                        cancelButtonIndex={1}
                        onPress={this.handlePress}
                    />
                </View>
            </View>
        );
    }

    renderMessages() {
        return (
            <FlatList
                ref={ref => this.flatList = ref}
                onContentSizeChange={() => this.flatList.scrollToEnd({ animated: true })}
                onLayout={() => this.flatList.scrollToEnd({ animated: true })}
                keyExtractor={item => item.id}
                style={{ padding: 20, paddingTop: 0, flex: 1 }}
                data={this.props.session.chat}
                renderItem={this.renderMessage}
            />
        );
    }

    renderMessage = (item) => {
        const chat = item.item;
        if (chat.user === 0) {
            return this.renderBotMessage(chat);
        }

        return this.renderUserMessage(chat);
    }

    renderBotMessage = (chat) => {
        const text = {
            fontSize: 16,
        };

        return (
            <View key={chat.id} style={{ backgroundColor: '#f6f6f5', maxWidth: 250, padding: 20, paddingTop: 15, paddingBottom: 15, borderRadius: 10, marginTop: 20, borderBottomLeftRadius: 0 }}>
                <Text style={text}>{chat.message}</Text>
            </View>
        );
    }

    renderUserMessage = (chat, index) => {
        const text = {
            fontSize: 16,
        };

        return (
            <View key={chat.id} style={{ backgroundColor: '#ebebea', maxWidth: 250, padding: 20, paddingTop: 15, paddingBottom: 15, borderRadius: 10, marginTop: 20, borderBottomRightRadius: 0, alignSelf: 'flex-end' }}>
                <Text style={text}>{chat.message}</Text>
            </View>
        );
    }

    renderChoices() {
        return (
            <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingBottom: 15 }}>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={[...this.props.assets.methods, 'Other']}
                    renderItem={this.renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={100}
                    activeSlideAlignment="start"
                    containerCustomStyle={{ padding: 20 }}
                    inactiveSlideScale={1}
                    inactiveSlideOpacity={1}
                />
            </View>
        );
    }

    renderItem = ({ item, index }) => {
        const listItem = {
            backgroundColor: '#ebebea',
            maxWidth: 250,
            padding: 30,
            paddingTop: 15,
            paddingBottom: 15,
            marginTop: 20,
            borderRadius: 10,
            alignSelf: 'flex-end',
            marginRight: 10,
        };
        if (item === 'Other') {
            return (
                <TouchableOpacity key={index} style={[listItem, { backgroundColor: '#596157' }]} onPress={this.showActionSheet}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>...</Text>
                </TouchableOpacity>
            );
        }
        return (
            <TouchableOpacity key={index} style={listItem} onPress={() => this.sendMessage(item)}>
                <Text>{item}</Text>
            </TouchableOpacity>
        );
    }

    sendMessage = (item) => {
        const message = {
            id: Math.random(),
            message: item,
            user: 1,
        };

        this.props.sendMessage(message);
    }

    showActionSheet = () => {
        this.ActionSheet.show();
    }

    handlePress = (index) => {
        switch (index) {
        case 0:
            this.goTo('NewDetail');
            break;
        default:
            break;
        }
    }

    goTo(route) {
        this.props.navigation.navigate(route);
    }
}

const mapStateToProps = state => ({
    assets: state.assets,
    session: state.session,
});

const mapDispatchToProps = dispatch => ({
    sendMessage: message => dispatch(sessionModule.sendMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
