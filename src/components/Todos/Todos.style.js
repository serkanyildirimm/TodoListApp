import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#7DA453',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    elevation: 8,
    alignItems: 'center',
  },
  icon_container: {
    flexDirection: 'row',
    width: 60,
    justifyContent: 'space-between',
  },
  itemDone: {
    backgroundColor: '#37474F',
    color: 'black',
  },
  decoration: {
    textDecorationLine: 'line-through',
  },
  text: {
    color: 'white',
  },
});
export default styles;
