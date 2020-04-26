import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';

const plus = require('../assets/icon/plus.png');
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
    width: 60,
    height: 60,
  },
  floatButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
});
