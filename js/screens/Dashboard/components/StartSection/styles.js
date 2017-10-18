/* @flow */

export default {
    upper: {
        flex: 1,
    },
    leafWrapper: {
        zIndex: - 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.8,
    },
    leaf: {
        zIndex: - 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: undefined,
        width: undefined,
    },
    menuSection: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'flex-end',
        padding: 25,
        paddingRight: 15,
    },
    startSection: {
        flex: 1,
        padding: 25,
        justifyContent: 'flex-end',
        backgroundColor: 'transparent',
    },
    date: {
        marginBottom: 13,
    },
    dateText: {
        color: '#FFF',
        fontSize: 20,
        fontFamily: 'Futura',
    },
    startButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.32)',
        padding: 6,
        paddingRight: 19,
        paddingLeft: 19,
        alignSelf: 'flex-start',
        borderRadius: 100,
    },
    startButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontFamily: 'Avenir',
    },
};
