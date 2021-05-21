import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableHighlight, Text, Image, TextInput, Button, InteractionManager } from 'react-native';
import { Lstyles } from '../styleComponents/screensStyles/screenStyle.styles';
import { ETitleMessage } from '../const/title/message';

export const LoaderScreen: React.FC = () => {
  const navigation = useNavigation();
  const redirect = (): void => {
    navigation.navigate('Головна')
  }

  return (
    <View style={Lstyles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={{color: 'white'}}>{ETitleMessage.ComponentAlreadyAdded}</Text>
        <TouchableHighlight onPress={redirect}><Text style={{color: 'white', marginTop: 20}}>Назад</Text></TouchableHighlight>
      </View>
    </View>
  );
};

 
