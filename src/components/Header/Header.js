import React from 'react';
import {View, Text} from 'react-native';
import styles from './Header.style';

const Header = ({todoLength}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>LET'S DO SOMETHİNG</Text>
      <Text style={styles.header_length}>{todoLength}</Text>
    </View>
  );
};
export default Header;
