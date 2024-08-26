/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App1 from './AppStack';
import App2 from './AppDrawer';
import App3 from './AppBottom';
import AppBoth from './AppBoth';
import AppNavigator from './AppNavigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App2);
