import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {container} from '../assets/styles/container';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignIn from '../tabs/Auth/SignIn';
import SignUp from '../tabs/Auth/SignUp';

const AuthTabs = createBottomTabNavigator<AuthTabParamsList>();

export type AuthTabParamsList = {
  SignIn: undefined;
  SignUp: undefined;
};

const Auth = () => {
  return (
    <SafeAreaView style={[container.container]}>
      <AuthTabs.Navigator
        screenOptions={{
          tabBarLabelPosition: 'beside-icon',
          tabBarIconStyle: {
            display: 'none',
          },
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#000',
          },
        }}>
        <AuthTabs.Screen name="SignIn" component={SignIn} />
        <AuthTabs.Screen name="SignUp" component={SignUp} />
      </AuthTabs.Navigator>
    </SafeAreaView>
  );
};

export default Auth;
