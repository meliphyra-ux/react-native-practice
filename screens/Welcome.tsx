import React, {FC} from 'react';

import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackScreenProps} from '../components/Navigation';

type WelcomeScreenProps = NativeStackScreenProps<
  RootStackScreenProps,
  'Welcome'
>;

const Welcome: FC<WelcomeScreenProps> = ({navigation}) => {
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
      <Button
        title="Login / Register"
        onPress={() => navigation.navigate('Auth')}
      />
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
    flex: 1,
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
