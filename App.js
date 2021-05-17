import * as React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {store} from './Store';
import MainScreen from './container/HomeScreen';
import DetailScreen from './container/DetailScreen';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={MainScreen}
            options={{title: 'Contact List'}}
          />
          <Stack.Screen
            name="detailScreen"
            component={DetailScreen}
            options={{title: 'Contact Details'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
