import React from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {container} from '../../assets/styles/container';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../App';

const SignIn = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={[container.container, {alignItems: 'center'}]}>
      <Text style={styles.inputLabel}>Login:</Text>
      <TextInput
        placeholder="Login"
        style={styles.input}
        placeholderTextColor="#bababa"
        inputMode="email"
      />
      <Text style={styles.inputLabel}>Password:</Text>
      <TextInput
        placeholder="Password"
        style={styles.input}
        placeholderTextColor="#bababa"
        secureTextEntry={true}
      />
      <TouchableHighlight onPress={() => navigation.navigate('Main')}>
        <Text>Hello World!</Text>
      </TouchableHighlight>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  inputLabel: {
    color: '#d5d5d5',
    fontSize: 22,
  },
  input: {
    backgroundColor: '#161616',
    color: '#d5d5d5',
    padding: 6,
    fontSize: 14,
    flexBasis: 48,
  },
});
