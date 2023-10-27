import React from 'react';
import {View, Text} from 'react-native';
import {container} from '../assets/styles/container';

const Posts = () => {
  return (
    <View style={[container.container, {backgroundColor: '#1e1e1e'}]}>
      <Text>Posts</Text>
    </View>
  );
};

export default Posts;
