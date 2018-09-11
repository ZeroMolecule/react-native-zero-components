// @flow
import { Platform } from 'react-native';

type IShadow = {
  x?: number,
  y?: number,
  blur?: number,
  color?: string,
  alpha?: number,
  overflow?: ?string,
};

type IOSShadow = {|
  overflow: ?string,
  shadowColor: ?string,
  shadowOffset: {|
    width: ?number,
    height: ?number,
  |},
  shadowRadius: ?number,
  shadowOpacity: ?number,
|};

type AndroidShadow = {|
  elevation?: number,
|};

export default class Shadow {
  +iOS: IOSShadow;
  +android: AndroidShadow;

  constructor({
    x = 0,
    y = 3,
    blur = 6,
    color = '#00000033',
    alpha = 1,
    overflow,
  }: IShadow = {}) {
    this.iOS = {
      overflow: overflow || null,
      shadowColor: color,
      shadowOffset: {
        width: x,
        height: y,
      },
      shadowRadius: blur,
      shadowOpacity: alpha,
    };
    this.android = {
      elevation: y,
    };
  }

  get style() {
    return Platform.select({
      ios: this.iOS,
      android: this.android,
    });
  }
}
