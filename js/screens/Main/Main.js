/* @flow */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, TextInput, Dimensions, Modal, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Button } from 'native-base';
import { Font, BlurView } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import ActionSheet from 'react-native-actionsheet';

const sliderWidth = Dimensions.get('window').width;
// import Chat from '../Chat';
// import Dashboard from '../Dashboard';
// import Home from '../Home';

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

    state = {
        fontLoaded: false,
        // modalVisible: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            roboto,
        });

        this.setState({ fontLoaded: true });
        // this.openModal();
    }

    render() {
        if (! this.state.fontLoaded) {
            return null;
        }

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'space-between', paddingTop: 20, backgroundColor: '#fff' }}>
                    {this.renderFirstMessage()}
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

    renderBlur() {
        if (! this.state.modalVisible) {
            return null;
        }

        return (
            <BlurView intensity={70} tint="dark" style={[StyleSheet.absoluteFill, { zIndex: 100 }]} />
        );
    }

    renderFirstMessage() {
        const text = {
            fontSize: 16,
        };
        return (
            <View style={{ padding: 20 }}>
                <View style={{ backgroundColor: '#f6f6f5', maxWidth: 250, padding: 20, paddingTop: 15, paddingBottom: 15, borderRadius: 10, borderBottomLeftRadius: 0 }}>
                    <Text style={text}>Hey Josh, Good to see you again! What are we having this evening?</Text>
                </View>
                <View style={{ backgroundColor: '#ebebea', maxWidth: 250, padding: 20, paddingTop: 15, paddingBottom: 15, marginTop: 20, borderRadius: 10, borderBottomRightRadius: 0, alignSelf: 'flex-end' }}>
                    <Text style={text}>Sour Diesel</Text>
                </View>
                <View style={{ backgroundColor: '#f6f6f5', maxWidth: 250, padding: 20, paddingTop: 15, paddingBottom: 15, marginTop: 20, borderRadius: 10, borderBottomLeftRadius: 0, alignSelf: 'flex-start' }}>
                    <Text style={text}>Awesome! How are you consuming the Sour Diesel?</Text>
                </View>
            </View>
        );
    }

    renderChoices() {
        const choices = [
            { name: 'Bong' },
            { name: 'Vape' },
            { name: 'Joint' },
            { name: 'Dab' },
            { name: 'Other' },
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
        if (item.name === 'Other') {
            return (
                <TouchableOpacity style={[listItem, { backgroundColor: 'green' }]} onPress={this.showActionSheet}>
                    <Text>{item.name}</Text>
                </TouchableOpacity>
            );
        }
        return (
            <TouchableOpacity style={listItem} onPress={() => console.log(item.name)}>
                <Text>{item.name}</Text>
            </TouchableOpacity>
        );
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


export default Main;
