import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    padding: 10,
  },
  header: {
    color: '#E89803',
    fontWeight: 'bold',
    fontSize: 20,
  },
  header_length: {
    color: '#E89803',
    fontSize: 20,
  },
});
export default styles;
