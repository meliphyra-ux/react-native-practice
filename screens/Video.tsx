import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {container} from '../assets/styles/container';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StoriesStackParams} from './Main';

type Props = NativeStackScreenProps<StoriesStackParams, 'Video'>;

const Video = ({route}: Props) => {
  const {title} = route.params;
  return (
    <SafeAreaView style={container.container}>
      <Text style={{color: 'white'}}>{title}</Text>
    </SafeAreaView>
  );
};

export default Video;
