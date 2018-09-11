---
id: touchable
title: Touchable
---
After tons of iterations, copy-pastes, projects etc. We've decided to end the **Touchable hell**™ once and for all! As you already know, there is (or at least there was) no simple way to use **one touchable** throughout the app. React native provides 3-4 different touchable components and each of them has their own API. But not this one!



## Usage


```jsx
import React from 'react';
import { Text, View } from 'react-native';
import { Touchable } from 'react-native-zero-components';
import styles from './styles';

const TouchableShowcase = () => (
  <View style={styles.root}>
    <Touchable>
      <Text>I am clickable!</Text>
    </Touchable>
    <Touchable style={styles.card}>
      <Text style={styles.header}>This is header</Text>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua
      </Text>
    </Touchable>
  </View>
);
```

---
## Props
* [**TouchableWithoutFeedback props**](https://facebook.github.io/react-native/docs/touchablewithoutfeedback#props)
* [`foreground`](#foreground)
* [`background`](#background)
* [`fallback`](#fallback)
* [`hapticDuration`](#hapticDuration)
* [`mode`](#mode)


## Reference

## `fallback`
If `TouchableNativeFeedback` is not available (on iOS and on Android API <= 20 / Android < 5.0), the component specified in this prop is used instead. Defaults to `TouchableOpacity`.

|         Type        | Required | Default                                                                             |
|:-------------------:|:--------:|:-------------------------------------------------------------------------------------:|
| Touchable Component |    No    | [`TouchableOpacity`](https://facebook.github.io/react-native/docs/touchableopacity) |

## `hapticDuration`
If set, sends the vibration to the device for specified duration on each press

|         Type        | Required | Default                                                                             |
|:-------------------:|:--------:|:-------------------------------------------------------------------------------------:|
| number |    No    | 0 (ms) |

## `mode`
Determines which underlaying touchable component will be used. These modes are available:
- `native`: [`TouchableNativeFeedback`](https://facebook.github.io/react-native/docs/touchablenativefeedback) if [Android API 21+](https://developer.android.com/about/versions/android-5.0). If not, uses [`TouchableOpacity`](https://facebook.github.io/react-native/docs/touchableopacity)
- `opacity`: [`TouchableOpacity`](https://facebook.github.io/react-native/docs/touchableopacity)
- `highlight`: [`TouchableHighlight`](https://facebook.github.io/react-native/docs/touchablehighlight)
- `none`: [`TouchableWithoutFeedback`](https://facebook.github.io/react-native/docs/touchablewithoutfeedback)

|         Type        | Required | Default                                                                             |
|:-------------------:|:--------:|:-------------------------------------------------------------------------------------:|
| enum('native', 'opacity', 'highlight', 'none') |    No    | `"native"` |
