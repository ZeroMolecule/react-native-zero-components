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
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#62d6ff',
    overflow: 'hidden',
  },
  buttonShadow: buttonShadow.style,
  title: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 6,
    flex: 1,
  },
});
