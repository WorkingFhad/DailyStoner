/* @flow */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, Keyboard, Dimensions } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Button } from 'native-base';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';

const sliderWidth = Dimensions.get('window').width;
// import Chat from '../Chat';
// import Dashboard from '../Dashboard';
// import Home from '../Home';

const roboto = require('../../../assets/Roboto-Bold.ttf');

const buttonStyle = { backgroundColor: 'white', padding: 30, width: 300, alignItems: 'center', marginTop: 10 };


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

        Keyboard.reveal();
    }

    render() {
        if (! this.state.fontLoaded) {
            return null;
        }

        return (
            <View style={{ flex: 1 }}>
                {/* {this.renderBanner()} */}
                <View style={{ flex: 1, justifyContent: 'space-between', paddingTop: 20, backgroundColor: '#fff' }}>
                    {this.renderFirstMessage()}
                    {this.renderChoices()}
                    {/* {this.renderChoices2()} */}
                </View>
            </View>
        );
    }

    renderBanner() {
        return (
            <View style={{ padding: 10, paddingTop: 20, paddingBottom: 20, backgroundColor: '#FCFCFA' }}>
                <Text style={{ fontSize: 14, textAlign: 'center' }}>Answer the questions below to begin your session</Text>
            </View>
        );
    }

    renderFirstMessage() {
        return (
            <View style={{ padding: 20 }}>
                <View style={{ backgroundColor: '#f6f6f5', maxWidth: 250, padding: 20, paddingTop: 15, paddingBottom: 15, borderRadius: 10, borderBottomLeftRadius: 0 }}>
                    <Text>Hey Josh, Good to see you again! What are we having this evening?</Text>
                </View>
                <View style={{ backgroundColor: '#ebebea', maxWidth: 250, padding: 20, paddingTop: 15, paddingBottom: 15, marginTop: 20, borderRadius: 10, borderBottomRightRadius: 0, alignSelf: 'flex-end' }}>
                    <Text>Sour Diesel</Text>
                </View>
                <View style={{ backgroundColor: '#f6f6f5', maxWidth: 250, padding: 20, paddingTop: 15, paddingBottom: 15, marginTop: 20, borderRadius: 10, borderBottomLeftRadius: 0, alignSelf: 'flex-start' }}>
                    <Text>Awesome! How are you consuming the Sour Diesel?</Text>
                </View>
            </View>
        );
    }

    renderChoices2() {
        const listItem = {
            alignItems: 'center',
            padding: 16,
            borderColor: '#ebebea',
            borderWidth: 1,
            margin: 5,
            marginTop: 0,
            shadowOpacity: 0.1,
            shadowOffset: {
                width: 0,
                height: 0,
            },
        };
        const text = {
            fontSize: 14,
            color: '#596157',
            fontFamily: 'roboto',
        };
        return (
            <View style={{ padding: 10 }}>
                <TouchableOpacity style={listItem}>
                    <Text style={text}>Bong</Text>
                </TouchableOpacity>
                <TouchableOpacity style={listItem}>
                    <Text style={text}>Vaporizer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={listItem}>
                    <Text style={text}>Joint</Text>
                </TouchableOpacity>
                <TouchableOpacity style={listItem}>
                    <Text style={text}>Other</Text>
                </TouchableOpacity>
            </View>
        );
    }

    renderChoices() {
        const choices = [
            { name: 'Bong' },
            { name: 'Vape' },
            { name: 'Joint' },
            { name: 'Dab' },
        ];
        return (
            <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingBottom: 15 }}>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={choices}
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
        return (
            <TouchableOpacity style={listItem} onPress={() => console.log(item.name)}>
                <Text>{item.name}</Text>
            </TouchableOpacity>
        );
    }

    goTo(route) {
        this.props.navigation.navigate(route);
    }
}


export default Main;
