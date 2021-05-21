/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListScreen } from './src/screen/ListScreen';
import { LoaderScreen } from './src/screen/Loader';
import HomeScreen from './src/screen/HomeScreen/HomeScreen';
import { ProfileScreen } from './src/screen/ProfileScreen';
import { ScreenMixing } from './src/temp/mixing/model/screen-mixing';
import { ComponentsScreen } from './src/screen/ComponentsScreen';
import { PressFormTZPScreen } from './src/screen/PressFormTZPScreen';
import { PressFormBodyScreen } from './src/screen/PressFormBodyScreen';
import { TZPDetailScreen } from './src/screen/TZPDetailScreen';
import { LoginScreen } from './src/screen/LoginScreen';
import { TestScreen } from './src/screen/TestScreen';
import { CreateComponent } from './src/screen/CreateNewComponentBatchPlace';
import { apiComponentsUrlShort, apiMixingsUrlShort, apiNormativeDocumentShort, apiTzpDetailShort, apiTzpPlateShort, apiTzpPressformShort } from './src/const/urls';
import { OpenModalFromQrCode } from './src/temp/infrastructure/open-modal-from-qr-code/open-modal-from-qr-code';
import { Header } from './src/Header';
import { ChangeStateScreen } from './src/screen/ChangeState';
import { TZPPlateScreen } from './src/screen/TZPPlateScreen';

const Stack = createStackNavigator();
export const App: React.FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#121212'}}>
      <View style={{position: 'absolute', marginLeft: 5}}>
        <OpenModalFromQrCode/>
      </View>
      <NavigationContainer>
      
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ header: Header }}>
          <Stack.Screen
            name={apiNormativeDocumentShort}
            component={ComponentsScreen}
          />
          <Stack.Screen
            name="Головна"
            component={HomeScreen}
          />
          <Stack.Screen
            name="List"
            component={ListScreen}
          />
          <Stack.Screen
            name="ChangeStateScreen"
            component={ChangeStateScreen}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
          />
          <Stack.Screen
            name={apiMixingsUrlShort}
            component={ScreenMixing}
          />
          <Stack.Screen
            name={apiTzpPressformShort}
            component={PressFormTZPScreen}
          />
          <Stack.Screen
            name={apiTzpPlateShort}
            component={TZPPlateScreen}
          />
          <Stack.Screen
            name={apiTzpDetailShort}
            component={TZPDetailScreen}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
          />
          <Stack.Screen
            name="TestScreen"
            component={TestScreen}
          />
          <Stack.Screen
            name="CreateComponent"
            component={CreateComponent}
          />
          <Stack.Screen
            name="Loader"
            component={LoaderScreen}
          />
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

