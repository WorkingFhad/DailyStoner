import { StackNavigator } from 'react-navigation';

import Sessions from '../screens/Sessions';

const routeConfiguration = {
    Sessions: { screen: Sessions },
};

const stackNavigatorConfiguration = {
    initialRouteName: 'Sessions',
    headerMode: 'float',
    navigationOptions: {
        headerTintColor: 'gray',
    },
};

export default StackNavigator(routeConfiguration, stackNavigatorConfiguration);
