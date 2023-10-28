import React from 'react';
import {Alert, Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import Svg, {Circle, SvgUri} from 'react-native-svg';
import Airplane from './assets/svg/airplane-svgrepo-com.svg';
import LinearGradient from 'react-native-linear-gradient';
import Config from 'react-native-config';
// import Welcome from './screens/Welcome';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#000000', '#2d2d2d', '#545454']}
        useAngle={true}
        angle={45}
        style={styles.linearGradient}>
        <SvgUri
          uri="https://www.svgrepo.com/show/530618/hotel.svg"
          height="50"
          width="50"
        />
        <Svg height="25%" width="25%" viewBox="0 0 100 100">
          <Circle cx="50" cy="50" r="45" stroke="white" strokeWidth="2.5" />
        </Svg>
        <Airplane width={50} height={50} />
        <Text style={styles.title}>
          React Native Practice. Made By meliphyra-ux
        </Text>
        <Button
          title="Show super secret info"
          onPress={() => {
            Alert.alert('Secret info', Config.SECRET_INFO ?? '');
          }}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  title: {
    fontFamily: 'PlaypenSans-Light',
    color: 'white',
  },
  linearGradient: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
