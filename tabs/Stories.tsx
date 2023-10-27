import React from 'react';
import {FlatList} from 'react-native';
import Video from '../components/Video';
import {SafeAreaView} from 'react-native-safe-area-context';
import {container} from '../assets/styles/container';

const VIDEOS = [
  {
    title: 'My first video',
    channel: 'meliphyra-ux',
    imgUrl:
      'https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg',
  },
];

const Stories = () => {
  return (
    <SafeAreaView style={[container.container, {backgroundColor: '#202020'}]}>
      <FlatList
        style={{flex: 1, paddingHorizontal: 4}}
        data={VIDEOS}
        renderItem={({item}) => <Video video={item} />}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
  );
};

export default Stories;
