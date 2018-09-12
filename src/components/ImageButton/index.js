// @flow
import React, { PureComponent } from 'react';
import { Image, StyleSheet } from 'react-native';
import styles from './styles';
import Touchable from '../Touchable';
import type { Style } from '../../types';

type Props = {
  onPress: () => void,
  source: any,
  imageStyle?: Style,
  style?: Style,
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'center' | 'repeat',
  raised: boolean,
}

class ImageButton extends PureComponent<Props> {
  static defaultProps = {
    imageStyle: null,
    style: null,
    resizeMode: 'contain',
    raised: false,
  };

  render() {
    const {
      imageStyle,
      style,
      raised,
      ...props
    } = this.props;
    const shadowStyle = raised ? styles.buttonShadow : null;
    return (
      <Touchable mode="opacity" {...props} style={StyleSheet.flatten([styles.button, shadowStyle, style])}>
        <Image
          {...props}
          style={StyleSheet.flatten([styles.image, imageStyle])}
        />
      </Touchable>
    );
  }
}

export default ImageButton;
