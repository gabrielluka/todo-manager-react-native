import React from 'react';
import {Login, Register, App, Task} from '../screens/Screens';
import {createStackNavigator} from '@react-navigation/stack';
import TaksTabTop from './TopTabs';

const Stack = createStackNavigator();

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
