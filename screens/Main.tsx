import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import Posts from '../tabs/Main/Posts';
import Stories from '../tabs/Main/Stories';
import LogoSvg from '../components/LogoSvg';

import {container} from '../assets/styles/container';

const MainTabs = createBottomTabNavigator();

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MainTabs.Navigator screenOptions={navigatorScreenOptions}>
        <MainTabs.Screen
          name="Posts"
          component={Posts}
          options={{headerShown: false}}
        />
        <MainTabs.Screen
          name="Stories"
          component={Stories}
          options={{
            headerShown: false,
            tabBarIcon: () => <LogoSvg />,
          }}
        />
      </MainTabs.Navigator>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  ...container,
});

const navigatorScreenOptions: BottomTabNavigationOptions = {
  tabBarStyle: {
    backgroundColor: 'black',
  },
  tabBarLabelStyle: {
    fontFamily: 'PlaypenSans-Light',
  },
  tabBarActiveTintColor: 'yellow',
  tabBarInactiveTintColor: 'white',
};
