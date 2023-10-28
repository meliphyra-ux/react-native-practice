import React, {useState, useContext} from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {container} from '../../assets/styles/container';
import {AuthContext, loginUser} from '../../contexts/AuthContext';

const fakeUser = {
  email: 'example1@gmail.com',
  password: '1234',
};

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const {dispatch} = useContext(AuthContext);
  return (
    <View style={[container.container, {alignItems: 'center'}]}>
      <Text style={styles.inputLabel}>Login:</Text>
      <TextInput
        placeholder="Login"
        style={styles.input}
        placeholderTextColor="#bababa"
        inputMode="email"
        onChangeText={email => {
          setUserCredentials(state => ({...state, email}));
        }}
      />
      <Text style={styles.inputLabel}>Password:</Text>
      <TextInput
        placeholder="Password"
        style={styles.input}
        placeholderTextColor="#bababa"
        secureTextEntry={true}
        onChangeText={password => {
          setUserCredentials(state => ({...state, password}));
        }}
      />
      <TouchableHighlight
        onPress={() => {
          if (
            fakeUser.email === userCredentials.email &&
            fakeUser.password === userCredentials.password
          ) {
            dispatch(loginUser());
          }
        }}>
        <Text>Log in</Text>
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
