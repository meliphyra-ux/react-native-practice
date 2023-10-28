import React from 'react';
import {FlatList} from 'react-native';
import Video from '../../components/Video';
import {SafeAreaView} from 'react-native-safe-area-context';
import {container} from '../../assets/styles/container';

const VIDEOS = [
  {
    title: 'My first video',
    channel: 'meliphyra-ux',
    imgUrl:
      'https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg',
    views: 1243,
  },
  {
    title: "I'm going crazy",
    channel: 'meliphyra-ux',
    imgUrl:
      'https://images.unsplash.com/photo-1698320602616-9f16147e45cd?auto=format&fit=crop&q=80&w=3087&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    views: 500,
  },
];

const Stories = () => {
  return (
    <SafeAreaView style={[container.container, {backgroundColor: '#202020'}]}>
      <FlatList
        contentContainerStyle={{flexGrow: 1, gap: 8}}
        data={VIDEOS}
        renderItem={({item}) => <Video video={item} />}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
  );
};

export default Stories;
