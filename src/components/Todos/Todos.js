import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './Todos.style';

const TodoItem = ({todos, removeItem, completeItem}) => {
  return (
    <View style={[styles.container, todos.completed && styles.itemDone]}>
      <Text style={[styles.text, todos.completed && styles.decoration]}>
        {todos.text}
      </Text>
      <View style={styles.icon_container}>
        <FontAwesome5
          name="check-circle"
          size={24}
          color="white"
          onPress={() => completeItem(todos.id)}
        />
        <FontAwesome5
          name="trash"
          size={24}
          color="white"
          onPress={() => removeItem(todos?.id)}
        />
      </View>
    </View>
  );
};
export default TodoItem;
