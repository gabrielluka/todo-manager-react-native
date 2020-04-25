import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class DoneTasks extends Component {
  goToTask() {
    this.props.navigation.navigate('Task');
  }

  render() {
    return <View style={styles.container} />;
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
