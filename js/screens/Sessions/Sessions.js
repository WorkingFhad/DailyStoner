/* @flow */
import React, { Component } from 'react';
import { View, Text, SectionList, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Font, LinearGradient } from 'expo';
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
        title: 'DailyStoner',
        headerStyle: {
            borderBottomColor: '#f0f0f0',
            borderBottomWidth: 0,
            padding: 15,
            paddingTop: 35,
            paddingBottom: 25,
            backgroundColor: 'white',
        },
        headerTitleStyle: {
            alignSelf: 'center',
            fontSize: 24,
            color: 'black',
            fontFamily: 'Georgia',
        },
        headerLeft: <Ionicons name="ios-options" style={{ color: 'black', fontSize: 30 }} />,
        headerRight: (
            <Ionicons
                onPress={() => navigation.navigate('Main')}
                name="md-add"
                style={{ color: 'black', fontSize: 30 }}
            />
        ),
    });

    render() {
        if (! this.state.fontLoaded) {
            return null;
        }
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                {/* {this.renderHeader()} */}
                {this.renderList()}
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
                                { hello: 'BONG', strain: 'Pineapple Cookies', color: 'purple' },
                                { hello: 'VAPE', strain: 'Blueberry Haze', color: 'orange' },
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
                }}
            >
                <View
                    style={{
                        marginLeft: - 35,
                        height: 10,
                        width: 10,
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
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <Text
                            style={{
                                color: 'black',
                                fontSize: 16,
                            }}
                        >
                            {item.item.strain}
                        </Text>
                        <Text
                            style={{
                                color: 'darkgrey',
                                fontSize: 10,
                                fontFamily: 'Helvetica',
                                paddingTop: 3,
                            }}
                        >
                            {item.item.hello}
                        </Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View>
                            <Text
                                style={{
                                    fontSize: 12,
                                    fontFamily: 'Helvetica',
                                    color: 'black',
                                }}
                            >
                                3:15 PM
                            </Text>
                        </View>
                        <View>
                            <Text
                                style={{
                                    fontSize: 12,
                                    fontFamily: 'Helvetica',
                                    color: 'gray',
                                }}
                            >
                                ★★★★
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    renderListHeader(item) {
        return (
            <View
                style={{
                    backgroundColor: 'white',
                    borderBottomWidth: 1,
                    borderBottomColor: '#fafafa',
                }}
            >
                <Text
                    style={{
                        padding: 20,
                        paddingBottom: 7,
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
