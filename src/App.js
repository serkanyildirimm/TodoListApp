import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import Todos from './components/Todos/Todos';
import Header from './components/Header/Header';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState();

  const handleOnChange = text => {
    setInputText(text);
  };
  const handleSubmit = () => {
    if (inputText === '') {
      Alert.alert('TODO', 'please add a new task.');
    } else if (todos.some(todo => todo.text === inputText)) {
      Alert.alert('TODO', 'You cannot re-enter the same task!');
    } else {
      const item = {
        id: Date.now(),
        text: inputText,
        completed: false,
      };
      setTodos([...todos, item]);
      setInputText('');
    }
  };
  const notCompleted = () => {
    const todo = todos.filter(item => !item.completed);
    return todo;
  };

  const removeItem = todoId => {
    const filteredTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(filteredTodos);
  };

  const completeItem = todoId => {
    setTodos(
      todos.map(item =>
        item.id === todoId ? {...item, completed: !item.completed} : {...item},
      ),
    );
  };

  const renderItem = ({item}) => (
    <Todos todos={item} removeItem={removeItem} completeItem={completeItem} />
  );
  return (
    <View style={styles.container}>
      <Header todoLength={notCompleted().length} />
      <FlatList data={todos} renderItem={renderItem} />
      <View style={styles.bottom_container}>
        <TextInput
          placeholder="what are you gonna do today?"
          onChangeText={handleOnChange}
          value={inputText}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.button_text}>save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
    justifyContent: 'space-between',
  },
  header: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
  },
  main_container: {
    backgroundColor: 'purple',
    padding: 10,
  },
  bottom_container: {
    padding: 10,
    margin: 10,
    backgroundColor: '#37474F',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    elevation: 8,
  },
  button: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'grey',
  },
  button_text: {
    color: 'white',
  },
});
export default App;
