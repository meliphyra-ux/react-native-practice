import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './screens/Welcome';
import Info from './screens/Info';
import Main from './screens/Main';
import Auth from './screens/Auth';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Welcome: undefined;
  Info: {name: string};
  Main: undefined;
  Auth: undefined;
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Group>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerStyle: {
                backgroundColor: 'red',
              },
              headerTitleStyle: {
                color: 'white',
              },
            }}
          />
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{headerShown: false}}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            name="Info"
            component={Info}
            options={{title: 'App Information', headerShown: false}}
          />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{headerShown: false}}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
