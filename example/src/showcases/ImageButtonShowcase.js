import React from 'react';
import { View } from 'react-native';
import { ImageButton } from 'react-native-zero-components';
import styles from './styles';
import icons from '../../assets/icons';

const ImageButtonShowcase = () => (
  <View style={styles.root}>
    <ImageButton
      source={icons.bigIcon}
      onPress={() => null}
    />
    <ImageButton
      mode="highlight"
      source={icons.bigIcon}
      onPress={() => console.log('I have cool highlight')}
    />
    <ImageButton
      mode="opacity"
      source={icons.bigIcon}
      onPress={() => console.log('You can see right through me')}
    />
  </View>
);

export default ImageButtonShowcase;
