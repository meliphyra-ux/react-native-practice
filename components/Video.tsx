import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

type Video = {
  imgUrl: string;
  title: string;
  channel: string;
  views: number;
};

const Video = ({video}: {video: Video}) => {
  return (
    <View style={styles.videoContainer}>
      <Image source={{uri: video.imgUrl}} style={styles.videoImage} />
      <View style={styles.videoInformation}>
        <Text style={[styles.videoInformationText, {fontSize: 18}]}>
          {video.title}
        </Text>
        <Text style={styles.videoInformationText}>{video.channel}</Text>
        <Text style={styles.videoInformationText}>{video.views} views</Text>
      </View>
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  videoContainer: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    columnGap: 8,
  },
  videoImage: {
    flex: 1,
    flexBasis: 75,
    height: '100%',
    resizeMode: 'center',
    objectFit: 'cover',
  },
  videoInformation: {
    flex: 5,
    justifyContent: 'center',
    gap: 8,
  },
  videoInformationText: {
    color: 'white',
    fontFamily: 'PlaypenSans-Light',
  },
});
