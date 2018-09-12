import React from 'react';
import { Image, View } from 'react-native';
import { Button } from 'react-native-zero-components';
import styles from './styles';
import icons from '../../assets/icons';

const ButtonShowcase = () => (
  <View style={styles.root}>
    <Button
      raised
      title="I'm a simple button"
      onPress={() => console.log('Simple button clicked')}
    />
    <Button
      title="I'm haptic button!"
      onPress={() => console.log('Haptic button clicked. Vrrrm vrrm')}
      hapticDuration={200}
    />
    <Button
      title="I'm the pretty one"
      left={(
        <Image
          style={styles.icon}
          source={icons.favicon}
        />
      )}
      onPress={() => console.log('Look at the pretty one!')}
    />
    <Button
      mode="highlight"
      underlayColor="#61D4FF"
      title="I'll light you up!"
      onPress={() => console.log('So bright!')}
    />
  </View>
);

export default ButtonShowcase;
