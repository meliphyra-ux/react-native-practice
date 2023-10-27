import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {container} from '../assets/styles/container';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Posts from '../tabs/Posts';
import Stories from '../tabs/Stories';
import LogoSvg from '../components/LogoSvg';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: 'black',
          },
          tabBarLabelStyle: {
            fontFamily: 'PlaypenSans-Light',
          },
          tabBarActiveTintColor: 'yellow',
          tabBarInactiveTintColor: 'white',
        }}>
        <Tab.Screen
          name="Posts"
          component={Posts}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Stories"
          component={Stories}
          options={{
            headerShown: false,
            tabBarIcon: () => <LogoSvg />,
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  ...container,
});
