---
id: imageButton
title: Image Button
---
Simplistic approach to displaying image within the touchable. This component is just a simple combination of the Zero Component's [`Touchable`](https://zeromolecule.github.io/react-native-zero-components/touchable) and React Native's [`Image`](https://facebook.github.io/react-native/docs/image) within



## Usage


```jsx
import React from 'react';
import { View } from 'react-native';
import { ImageButton } from 'react-native-zero-components';
import styles from './styles';
import icons from '../assets/icons';

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
```

---
## Props
* [**Touchable props**](https://zeromolecule.github.io/react-native-zero-components/touchable)
* [`onPress`](#onPress)
* [`source`](#source)
* [`imageStyle`](#imageStyle)
* [`resizeMode`](#resizeMode)
* [`raised`](#raised)

## Reference

## `onPress`
The same functionality as the one in [Touchable](https://zeromolecule.github.io/react-native-zero-components/touchable) component, but here it's not an optional property.

|         Type        | Required |
|:-------------------:|:--------:|
| function |    yes    |

## `source`
Image that is displayed within the button.

|         Type        | Required |
|:-------------------:|:--------:|
| ImageSourcePropType |    yes    |

## `imageStyle`
Styling prop for the [`Image`](https://facebook.github.io/react-native/docs/Image) component within the button that displays the [`source`](#source)

|         Type        | Required | Default                                                                             |
|:-------------------:|:--------:|:-------------------------------------------------------------------------------------:|
| style |    No    | `null` |

## `resizeMode`
Determines the way image will be resized within the component.
- `stretch`: Scale width and height independently, This may change the aspect ratio of the src.
- `cover`: Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or larger than the corresponding dimension of the view (minus padding).
- `contain`: Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or less than the corresponding dimension of the view (minus padding).
- `repeat`: Repeat the image to cover the frame of the view. The image will keep its size and aspect ratio, unless it is larger than the view, in which case it will be scaled down uniformly so that it is contained in the view.
- `center`: Center the image in the view along both dimensions. If the image is larger than the view, scale it down uniformly so that it is contained in the view.

|         Type        | Required | Default                                                                             |
|:-------------------:|:--------:|:-------------------------------------------------------------------------------------:|
| enum('cover', 'contain', 'stretch', 'repeat', 'center') |    No    | `"contain"` |

## `raised`
Determines if the button will have default shadow or not. If `true`, shadow will be displayed. Otherwise shadow will not be displayed unless you put it manually in `style` prop

|         Type        | Required | Default                                                                             |
|:-------------------:|:--------:|:-------------------------------------------------------------------------------------:|
| boolean |    No    | `false` |
