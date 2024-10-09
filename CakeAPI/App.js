import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DonutScreen from './screens/Screen01';
import Screen02 from './screens/Screen02';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen01">
        <Stack.Screen 
          name="Screen01" 
          component={DonutScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Screen02" 
          component={Screen02} 
          options={{ 
            headerTitle: '',
            headerBackTitleVisible: false, 
            headerStyle: {
              elevation: 0, 
              shadowOpacity: 0, 
              borderBottomWidth: 0, 
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}