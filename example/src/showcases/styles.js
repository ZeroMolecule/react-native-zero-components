import { StyleSheet } from 'react-native';
import { ShadowStyle } from 'react-native-zero-components';

const shadow = new ShadowStyle();
const styles = {
  root: {
    flex: 1,
    padding: '10%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 48,
    borderRadius: 4,
    width: '100%',
    ...shadow.value,
  },
  header: {
    fontSize: 24,
    color: '#333',
    width: '100%',
    paddingBottom: 4,
  },
  content: {
    marginTop: 12,
    fontSize: 14,
    color: '#888',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
};
export default StyleSheet.create(styles);
