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
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Video from './Video';

const MainTabs = createBottomTabNavigator();
// To work with nested navigating use: NavigatorScreenParams<NameOfStackParams>

export type StoriesStackParams = {
  Stories: undefined;
  Video: {
    title: string;
  };
};

const StoriesStack = createNativeStackNavigator<StoriesStackParams>();

const StoriesStackScreen = () => {
  return (
    <StoriesStack.Navigator screenOptions={{headerShown: false}}>
      <StoriesStack.Screen name="Stories" component={Stories} />
      <StoriesStack.Screen name="Video" component={Video} />
    </StoriesStack.Navigator>
  );
};

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
          name="StoriesStack"
          component={StoriesStackScreen}
          options={{
            title: 'Stories',
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
