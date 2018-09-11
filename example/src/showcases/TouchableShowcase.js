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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </Text>
    </Touchable>
  </View>
);

export default TouchableShowcase;
