import {AppRegistry} from 'react-native';
console.disableYellowBox = true;
console.warn('YellowBox is disabled.');

import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);