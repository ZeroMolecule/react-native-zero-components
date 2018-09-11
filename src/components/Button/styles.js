// @flow
import { StyleSheet } from 'react-native';
import ShadowStyle from '../../styling/ShadowStyle';

const buttonShadow = new ShadowStyle(0, 2, 6);

export default StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#42c1ff',
    overflow: 'hidden',
    ...buttonShadow.value,
  },
  title: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 6,
    flex: 1,
  },
});
