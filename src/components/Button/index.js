// @flow
import React, { PureComponent } from 'react';
import { StyleSheet, Text } from 'react-native';
import Touchable from '../Touchable';
import styles from './styles';
import type { Children, Style } from '../../types';


type Props = {
  title: string,
  onPress: () => void,
  titleStyle?: Style,
  style?: Style,
  children?: null,
  left?: Children,
  right?: Children,
  raised: boolean,
}

class Button extends PureComponent<Props> {
  static defaultProps = {
    titleStyle: null,
    style: null,
    children: null,
    left: null,
    right: null,
    raised: false,
  };

  render() {
    const {
      title,
      titleStyle,
      style,
      onPress,
      children,
      left,
      right,
      raised,
      ...props
    } = this.props;
    const shadowStyle = raised ? styles.buttonShadow : null;
    return (
      <Touchable
        {...props}
        onPress={onPress}
        style={StyleSheet.flatten([styles.button, shadowStyle, style])}
      >
        {left}
        <Text {...props} style={StyleSheet.flatten([styles.title, titleStyle])}>
          {title}
        </Text>
        {right}
      </Touchable>
    );
  }
}

export default Button;
