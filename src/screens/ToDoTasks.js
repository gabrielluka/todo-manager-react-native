import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {TaskListView} from './Components';
import {getTasks} from '../services/FirebaseApi';

const plus = require('../assets/icon/plus.png');
export default class ToDoTasks extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    getTasks(this._fetchTasks.bind(this));
  }

  _fetchTasks(tasks) {
    const tasksToDo = tasks.filter((t) => !t.isDone);
    this.setState({tasks: tasksToDo});
  }

  goToTask() {
    this.props.navigation.navigate('Task');
  }

  render() {
    return (
      <View style={styles.container}>
        <TaskListView
          tasks={this.state.tasks}
          navigation={this.props.navigation}
        />
        <TouchableOpacity
          style={styles.floatButton}
          onPress={() => this.goToTask()}
        >
          <Image source={plus} style={styles.img} />
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
  img: {
    width: 55,
    height: 55,
  },
  floatButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
});
