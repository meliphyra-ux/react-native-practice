import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {container} from '../../assets/styles/container';

const SignUp = () => {
  return (
    <View style={[container.container, {alignItems: 'center'}]}>
      <Text>Sign up</Text>
      <TextInput />
      <Text>Sign up</Text>
      <TextInput />
    </View>
  );
};

export default SignUp;
