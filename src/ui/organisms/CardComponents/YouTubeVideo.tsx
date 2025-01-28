import styles from '@/ui/styles';
import React, { useState, useCallback } from 'react';
import { Button, View, Alert } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const YoutubeVideo = (props: {videoId: any}) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state: string) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View style= {styles.player}>
      <YoutubePlayer
        height={200}
        play={playing}
        videoId={props.videoId}
        onChangeState={onStateChange}
      />
      {/* <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} /> */}
    </View>
  );
};

export default YoutubeVideo;



