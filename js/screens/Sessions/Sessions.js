/* @flow */
import React, { Component } from 'react';
import { View, Text, SectionList, Modal, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Font, LinearGradient } from 'expo';
import { Button, Fab, Icon } from 'native-base';
const roboto = require('../../../assets/Roboto-Bold.ttf');
const ubuntu = require('../../../assets/Ubuntu-Regular.ttf');
const comfortaa = require('../../../assets/Comfortaa-Regular.ttf');

export class Sessions extends Component {
    state = {
        fontLoaded: false,
    };
    async componentDidMount() {
        await Font.loadAsync({
            roboto,
            ubuntu,
            comfortaa,
        });
        this.setState({ fontLoaded: true });
    }
    static navigationOptions = ({ navigation }) => ({
        title: 'SESSIONS',
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
            fontSize: 18,
            color: 'white',
            fontFamily: 'Georgia',
        },
        headerLeft: <Ionicons name="md-menu" style={{ color: 'white', fontSize: 30 }} />,
        headerRight: (
            <Ionicons
                onPress={() => navigation.navigate('Main')}
                name="md-stats"
                style={{ color: 'white', fontSize: 30 }}
            />
        ),
    });

    render() {
        if (! this.state.fontLoaded) {
            return null;
        }
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <StatusBar barStyle="light-content" />
                {/* {this.renderHeader()} */}
                {this.renderList()}
                {this.renderFAB()}
            </View>
        );
    }

    renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    padding: 20,
                    paddingBottom: 10,
                }}
            />
        );
    }

    renderList() {
        return (
            <View style={{ flex: 1 }}>
                <SectionList
                    renderItem={item => this.renderListItem(item)}
                    renderSectionHeader={section => this.renderListHeader(section)}
                    sections={[
                        // homogenous rendering between sections
                        {
                            data: [
                                { hello: 'Bong', strain: 'Pineapple Cookies', color: 'purple' },
                                { hello: 'Vape', strain: 'Blueberry Haze', color: 'orange' },
                            ],
                            title: 'TODAY',
                        },
                        {
                            data: [
                                { hello: 'DAB', strain: 'Pineapple Express', color: 'green' },
                                { hello: 'DAB', strain: 'Lemon Berry', color: 'orange' },
                            ],
                            title: 'YESTERDAY',
                        },
                        {
                            data: [
                                { hello: 'DAB', strain: 'OG God Bud', color: 'purple' },
                                { hello: 'DAB', strain: 'Trainwreck', color: 'green' },
                                { hello: 'DAB', strain: 'Blueberry Haze', color: 'orange' },
                            ],
                            title: 'NOVEMBER 14TH',
                        },
                        {
                            data: [
                                { hello: 'DAB', strain: 'OG God Bud', color: 'purple' },
                                { hello: 'DAB', strain: 'Trainwreck', color: 'green' },
                                { hello: 'DAB', strain: 'Blueberry Haze', color: 'orange' },
                            ],
                            title: 'NOVEMBER 13TH',
                        },
                    ]}
                />
            </View>
        );
    }

    renderListItem(item) {
        return (
            <TouchableOpacity>
                <View
                    style={{
                        padding: 20,
                        paddingRight: 25,
                        paddingTop: 25,
                        paddingBottom: 20,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: 35,
                        borderBottomWidth: item.item.color !== 'orange' ? 1 : 0,
                        borderBottomColor: '#fafafa',
                        justifyContent: 'flex-start',
                    }}
                >
                    <View
                        style={{
                            marginLeft: - 35,
                            height: 12,
                            width: 12,
                            borderRadius: 100,
                            backgroundColor: item.item.color,
                            marginRight: 20,
                        }}
                    />
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'space-between',
                            flex: 1,
                            alignItems: 'center',
                        }}
                    >
                        <View style={{ flex: 2 }}>
                            <Text
                                style={{
                                    color: '#596157',
                                    fontSize: 20,
                                    fontFamily: 'Georgia',
                                }}
                            >
                                {item.item.strain}
                            </Text>
                            <Text
                                style={{
                                    color: '#B1841D',
                                    fontSize: 12,
                                    fontFamily: 'Helvetica',
                                    paddingTop: 3,
                                }}
                            >
                            ★ ★ ★ ★
                        </Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end', alignSelf: 'flex-start' }}>
                            <View>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontFamily: 'Helvetica',
                                        color: 'gray',
                                    }}
                                >
                                3:15 PM
                            </Text>
                            </View>
                            <View>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontFamily: 'Helvetica',
                                        color: 'gray',
                                        paddingTop: 5,
                                    }}
                                >
                                    {item.item.hello}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    renderFAB() {
        return (
            <Fab
                active={this.state.active}
                direction="up"
                containerStyle={{ }}
                style={{ backgroundColor: '#596157' }}
                position="bottomRight"
                onPress={() => this.props.navigation.navigate('Main')}
            >
                <Icon name="md-add" />
            </Fab>
        );
    }

    renderListHeader(item) {
        return (
            <View
                style={{
                    backgroundColor: '#FCFCFA',
                    borderBottomWidth: 1,
                    borderBottomColor: '#fafafa',
                }}
            >
                <Text
                    style={{
                        padding: 15,
                        paddingBottom: 8,
                        fontFamily: 'roboto',
                        color: 'black',
                        fontSize: 14,
                    }}
                >
                    {item.section.title}
                </Text>
            </View>
        );
    }
}

export default Sessions;
