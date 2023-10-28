import React, {useContext} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import Welcome from '../screens/Welcome';
import Main from '../screens/Main';
import {AuthContext} from '../contexts/AuthContext';
import Auth from '../screens/Auth';

const RootStack = createNativeStackNavigator<RootStackScreenProps>();

export type RootStackScreenProps = {
  Welcome: undefined;
  Main: undefined;
  Auth: undefined;
};

const Navigation = () => {
  const {isLoggedIn} = useContext(AuthContext);
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={headerStyles}>
        {isLoggedIn ? (
          <RootStack.Group>
            <RootStack.Screen name="Main" component={Main} />
          </RootStack.Group>
        ) : (
          <RootStack.Group>
            <RootStack.Screen name="Welcome" component={Welcome} />
            <RootStack.Screen name="Auth" component={Auth} />
          </RootStack.Group>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const headerStyles: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: 'violet',
  },
};
