/* @flow */
import { Dimensions } from 'react-native';
const { height: DEVICE_HEIGHT, width: DEVICE_WIDTH } = Dimensions.get('window');

export default {
    container: {
        backgroundColor: '#7EC23A',
        flex: 1,
    },
    tabBar: {
        top: 20,
        flex: 4,
    },
    leaf: {
        marginTop: - 50,
        flex: 1,
        width: DEVICE_WIDTH,
    },
    curve: {
        width: DEVICE_WIDTH,
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    tabBarBelow: {},
    container2: {
        opacity: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    button: {
        top: 20,
        backgroundColor: 'transparent',
        borderRadius: 6,
        borderColor: 'white',
        borderWidth: 1,
        padding: 10,
        paddingLeft: 25,
        paddingRight: 25,
    },
};
