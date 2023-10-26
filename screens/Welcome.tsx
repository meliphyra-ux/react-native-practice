import MaskedView from '@react-native-masked-view/masked-view';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MaskedView
        style={styles.gradientTextMask}
        maskElement={
          <View style={styles.gradientTextView}>
            <Text style={styles.welcomeTitle}>Welcome user!</Text>
          </View>
        }>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#0011ff', '#ff0000']}
          style={styles.gradientTextGrad}
        />
      </MaskedView>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeTitle: {
    fontFamily: 'PlaypenSans-Light',
    fontSize: 24,
    color: 'black',
  },
  gradientTextMask: {
    flexDirection: 'row',
    height: '100%',
  },
  gradientTextView: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientTextGrad: {
    flex: 1,
    height: '100%',
  },
});
