import React from 'react';
import {ToDoTasks, DoneTasks} from '../screens/Screens';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const TopTab = createMaterialTopTabNavigator();

const TaksTabTop = () => {
  return (
    <TopTab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        iconStyle: {width: 20, height: 20},
        indicatorStyle: {backgroundColor: 'tomato'},
      }}
    >
      <TopTab.Screen name="To Do" component={ToDoTasks} />
      <TopTab.Screen name="Done" component={DoneTasks} />
    </TopTab.Navigator>
  );
};

export default TaksTabTop;
