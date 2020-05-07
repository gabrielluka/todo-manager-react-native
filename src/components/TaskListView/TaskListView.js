import React, {Component} from 'react';
import {View, SectionList, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default class TaskListView extends Component {
  renderSectionHeader(sectionData) {
    return (
      <View style={styles.headerConteiner}>
        <View style={styles.headerTagConteiner}>
          <Text style={styles.headerTagText}>
            {sectionData.section.title.substr(0, 1)}
          </Text>
        </View>
        <Text style={styles.headerText}>{sectionData.section.title}</Text>
      </View>
    );
  }

  renderItem(itemData) {
    return (
      <TouchableOpacity onPress={() => this._onClickTask(itemData.item)}>
        <View style={styles.itemConteiner}>
          <Text style={styles.itemTextTitle}>{itemData.item.title}</Text>
          <Text>{itemData.item.resume}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  _onClickTask(task) {
    const {navigate} = this.props.navigation;
    navigate('Task', {task});
  }

  render() {
    return (
      <SectionList
        renderSectionHeader={(section) => this.renderSectionHeader(section)}
        sections={[
          {
            data: this.props.tasks.filter((data) => {
              return data.priority;
            }),
            key: 'hightPriority',
            title: 'Hight Priority',
          },
          {
            data: this.props.tasks.filter((data) => {
              return !data.priority;
            }),
            key: 'lowPriority',
            title: 'Low Priority',
          },
        ]}
        renderItem={(data) => this.renderItem(data)}
      />
    );
  }
}
