import MaskedView from '@react-native-masked-view/masked-view';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RootStackParamList} from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const Welcome = ({navigation}: Props) => {
  const [userInput, setUserInput] = useState('');
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
      <TextInput
        onChangeText={text => setUserInput(text)}
        value={userInput}
        placeholder="Write your name"
      />
      <Button
        title="Go to the info page"
        onPress={() => {
          navigation.navigate('Info', {
            name: userInput || 'user',
          });
          setUserInput('');
        }}
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
