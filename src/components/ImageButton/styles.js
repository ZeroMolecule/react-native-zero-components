// @flow
import { StyleSheet } from 'react-native';
import Shadow from '../../styling/Shadow';

const buttonShadow = new Shadow({
  x: 0,
  y: 2,
  blur: 6,
});

export default StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
  },
  buttonShadow: buttonShadow.style,
  image: {
    width: '100%',
    height: '100%',
  },
});
