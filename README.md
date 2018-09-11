![Zero Components](https://image.ibb.co/g2Jsep/logo.png)
## Introduction
Zero Components is a React Native component collection library. Here we have all the components that we at [Zero Molecule](https://www.zeromolecule.com) use on most of our projects that are not available in the standard [React Native](https://facebook.github.io/react-native/) component collection

### Features
- **One touchable** to rule them all (main motivation for this whole library)
- Button components that **don't suck**
- Simple way to generate shadows for your components
- [Flow](https://flow.org) typed props
- **Customizable** UI components

## Getting started
### Installation
If you want just the components, you need to add the plugin from [npm.js](https://www.npmjs.com/package/react-native-zero-components) using 

  ```bash
  npm install react-native-zero-components --save
  ```

   or if you prefer [yarn](https://yarnpkg.com/)

  ```bash
  yarn add react-native-zero-components
  ```
<br />
<br />

## Usage
To use the components, just import them from `react-native-zero-components` and use them like you would use any other component

```jsx
import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-zero-ui'

const App = () => {
  return (
    <View>
      <Button
        title="Click me"
        onPress={() => console.log('Hello there!')}
      />
    </View>
  );
};
```

## Content
### Components
- [x] [Button](https://zeromolecule.github.io/react-native-zero-components/button)
- [x] [ImageButton](https://zeromolecule.github.io/react-native-zero-components/imageButton)
- [x] [Touchable](https://zeromolecule.github.io/react-native-zero-components/touchable)

### Other
- [x] [Shadow](https://zeromolecule.github.io/react-native-zero-components/shadow)

If you want us to include another component or something else, please let us know!

## Documentation
[View the full docs here](https://zeromolecule.github.io/react-native-zero-components)

## Demo App
Zero Components demo app is written using [Expo](https://expo.io). Take a look at the [example/](https://github.com/ZeroMolecule/react-native-zero-components/tree/master/example) directory for more information. <br/>**Better showcase app comming soon!**

## License
Zero Components is open source and released under the [BSD-3-Clause License](https://opensource.org/licenses/BSD-3-Clause)
