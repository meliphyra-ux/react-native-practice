import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Svg, {Circle, SvgUri} from 'react-native-svg';
import Airplane from './assets/svg/airplane-svgrepo-com.svg';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SvgUri
        uri="https://www.svgrepo.com/show/530618/hotel.svg"
        height="50"
        width="50"
      />
      <Svg height="25%" width="25%" viewBox="0 0 100 100">
        <Circle cx="50" cy="50" r="45" stroke="black" strokeWidth="2.5" />
      </Svg>
      <Airplane width={50} height={50} />
      <Text style={styles.title}>
        React Native Practice. Made By meliphyra-ux
      </Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'PlaypenSans-Light',
  },
});
