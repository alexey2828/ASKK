import React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListScreen } from './ListScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import { QRScreen } from './QRScreen';
import { MixingScreen } from './MixingScreen';
import { ComponentsScreen } from './ComponentsScreen';
import { PressFormTZPScreen } from './PressFormTZPScreen';
import { PressFormBodyScreen } from './PressFormBodyScreen';
import { TZPDetailScreen } from './TZPDetailScreen';
import { LoginScreen } from './LoginScreen';
import { TestScreen } from './TestScreen';
//import { useHttp } from './src/hooks/useHttp';

const Stack = createStackNavigator();

export const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Головна"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="List"
            component={ListScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="QR"
            component={QRScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ComponentsScreen"
            component={ComponentsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MixingScreen"
            component={MixingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PressFormTZPScreen"
            component={PressFormTZPScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PressFormBodyScreen"
            component={PressFormBodyScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TZPDetailScreen"
            component={TZPDetailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TestScreen"
            component={TestScreen}
            options={{ headerShown: false }}
          />
          {/*<Stack.Screen
            name="test"
            component={useHttp}
            options={{ headerShown: false }}
          />*/}
        </Stack.Navigator>
      </NavigationContainer>

    </View>
  );
}

//back navigation
//    <Button
//title="Back"
//onPress={() => {
//  navigation.goBack();
//}}
///>

