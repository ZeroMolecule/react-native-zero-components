---
id: shadow
title: Shadow
---
Simpler approach to creating platform specific shadow code. For instance, Android only uses the `elevation` prop, while iOS uses some other.


## Usage


```javascript
import { StyleSheet } from 'react-native';
import { ShadowStyle } from 'react-native-zero-components';

const cardShadow = new ShadowStyle();
const buttonShadow = new ShadowStyle(0, 2, 4, '#0002', 1, null);
const style = StyleSheet.create({
  card: {
    // some other props
    ...cardShadow.value,
  },
  button: {
    // come other props
    ...buttonShadow.value,
  }
});
```

---
## Methods
* [`constructor()`](#constructor)
* **`get`**[`androidValue()`](#androidValue)
* **`get`**[`iosValue()`](#iosValue)
* **`get`**[`value()`](#value)

## Reference

## `constructor(x, y, blur, color, alpha, overflow)`
Initializes shadow object with given parameters

|   Param  |  Type  |   Default   |
|:--------:|:------:|:-----------:|
|     x    | number |      0      |
|     y    | number |      3      |
|   blur   | number |      6      |
|   color  | string | "#00000033" |
|   alpha  | number |      1      |
| overflow | string |     null    |

## `title`
Text that is displayed within the button.

|         Type        | Required |
|:-------------------:|:--------:|
| string |    yes    |

## `titleStyle`
Styling prop for the [`Text`](https://facebook.github.io/react-native/docs/text) component within the button that displays the [`title`](#title)

|         Type        | Required | Default                                                                             |
|:-------------------:|:--------:|:-------------------------------------------------------------------------------------:|
| style |    No    | `null` |

## `left`
Component that will be displayed left of the title within the button. Here you can pass any component you'd like. Most common cases would be the icon or the loading indicator

|         Type        | Required | Default                                                                             |
|:-------------------:|:--------:|:-------------------------------------------------------------------------------------:|
| component |    No    | `null` |

## `right`
Component that will be displayed right of the title within the button. Here you can pass any component you'd like. Most common cases would be the icon or the loading indicator

|         Type        | Required | Default                                                                             |
|:-------------------:|:--------:|:-------------------------------------------------------------------------------------:|
| component |    No    | `null` |
