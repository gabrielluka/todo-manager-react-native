import React from 'react';
import {
  Login,
  Register,
  ToDoTasks,
  DoneTasks,
  App,
  Task,
} from '../screens/Screens';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();
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

const Routes = () => {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen name="App" component={App} options={{headerShown: false}} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        name="TaskList"
        component={TaksTabTop}
        options={{
          headerTitle: 'Task List',
          headerTitleStyle: {
            color: 'tomato',
          },
          headerStyle: {backgroundColor: '#fff', elevation: 0},
        }}
      />
      <Stack.Screen name="Task" component={Task} />
    </Stack.Navigator>
  );
};

export default Routes;
