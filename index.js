import {Navigation} from 'react-native-navigation';

import App from './App';
import Welcome from './screens/Welcome';
import Info from './components/Info';

Navigation.setDefaultOptions({
  topBar: {
    title: {
      color: '#fff',
    },
    background: {
      color: '#000',
    },
    backButton: {
      color: '#fff',
    },
  },
});

Info.options = {
  bottomTab: {
    text: 'Info',
    icon: require('./assets/images/icon.jpg'),
  },
};

Navigation.registerComponent('App', () => App);
Navigation.registerComponent('Welcome', () => Welcome);
Navigation.registerComponent('Info', () => Info);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'App',
            },
          },
        ],
      },
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Info',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
});
