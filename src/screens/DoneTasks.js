import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {getTasks} from '../services/FirebaseApi';
import {TaskListView} from './Components';

export default class DoneTasks extends Component {
  goToTask() {
    this.props.navigation.navigate('Task');
  }

  state = {
    tasks: [],
  };
  render() {
    return (
      <View style={styles.container}>
        <TaskListView tasks={this.state.tasks} />
      </View>
    );
  }
  componentDidMount() {
    getTasks(this._fetchTasks.bind(this));
  }
  _fetchTasks(tasks) {
    const tasksToDo = tasks.filter((t) => t.isDone);
    this.setState({tasks: tasksToDo});
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
});
