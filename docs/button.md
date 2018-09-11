Simple button component. No 1000 properties, no `containerStyle`, `rootViewStyle` etc. Only two styles that matter are `style` (styling for the actual button) and `titleStyle` (styling for the button title). This component uses [`Touchable`](https://zeromolecule.github.io/react-native-zero-components/touchable) within



## Usage


```jsx
import React from 'react';
import { Image, View } from 'react-native';
import { Button } from 'react-native-zero-components';
import styles from './styles';
import icons from '../assets/icons';

const ButtonShowcase = () => (
  <View style={styles.root}>
    <Button
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
```

---
## Props
* [**Touchable props**](https://zeromolecule.github.io/react-native-zero-components/touchable)
* [`onPress`](#onPress)
* [`title`](#title)
* [`titleStyle`](#titleStyle)
* [`left`](#left)
* [`right`](#right)

## Reference

## `onPress`
The same functionality as the one in [Touchable](https://zeromolecule.github.io/react-native-zero-components/touchable) component, but here it's not an optional property.

|         Type        | Required |
|:-------------------:|:--------:|
| function |    yes    |

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
