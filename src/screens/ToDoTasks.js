import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

export default class ToDoTasks extends Component {
  goToTask() {
    this.props.navigation.navigate('Task');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.floatButton}
          onPress={() => this.goToTask()}
        >
          <View style={styles.button}>
            <Text style={styles.text}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
  },
  icon: {
    width: 26,
    height: 26,
  },
  img: {
    width: 50,
    height: 50,
  },
  floatButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  button: {
    backgroundColor: 'red',
    width: 60,
    height: 60,
    margin: 0,
    borderRadius: 50,
  },
  text: {
    fontSize: 50,
    color: 'white',
    alignSelf: 'center',
  },
});
