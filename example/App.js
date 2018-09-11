import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import ImageButtonShowcase from './src/showcases/ImageButtonShowcase';
import TouchableShowcase from './src/showcases/TouchableShowcase';
import ButtonShowcase from './src/showcases/ButtonShowcase';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 20,
  },
  smallTile: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: '#eee',
  },
  bigTile: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.bigTile}>
          <View style={styles.smallTile}>
            <ImageButtonShowcase />
          </View>
          <View style={styles.smallTile}>
            <TouchableShowcase />
          </View>
        </View>
        <View style={styles.bigTile}>
          <View style={styles.smallTile}>
            <ButtonShowcase />
          </View>
        </View>
      </View>
    );
  }
}
