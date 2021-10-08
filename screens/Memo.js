import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from '../shared/header';
import TodoItem from '../shared/todoItem';
import AddTodo from '../shared/addTodo';

export default function Memo() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos=> {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {
    if(text.length > 2){
      setTodos(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } 
    else {
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed');
    }}>

    <View style={styles.container}>
      
    <Text>Memo Screen</Text>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: '#fff',
    },
    content: {
        padding: 40,
      
        flex:1,
      },
      list: {
        flex:1,
        marginTop: 20,
        
      },
  });