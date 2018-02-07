import { StackNavigator } from 'react-navigation';

import Sessions from '../screens/Sessions';
import Main from '../screens/Main';
import NewDetail from '../screens/NewDetail';

const routeConfiguration = {
    Sessions: { screen: Sessions },
    Main: { screen: Main },
    NewDetail: { screen: NewDetail },
};

const stackNavigatorConfiguration = {
    initialRouteName: 'Sessions',
    headerMode: 'float',
    navigationOptions: {
        headerTintColor: 'gray',
    },
    cardStyle: {
        shadowOpacity: 0,
    },
    mode: 'modal',
};

export default StackNavigator(routeConfiguration, stackNavigatorConfiguration);
