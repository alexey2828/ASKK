import React from 'react';
import { useNavigation } from '@react-navigation/native';
//import { TZPDetailScreenItem } from './src/components/componentsScreenItems/tZPDetailScreenItem';
import { StyleSheet, View, TouchableHighlight, Text, Image, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',

  },
});

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <View style={{display: 'flex', flexDirection: 'row', marginTop: -50, marginLeft: -20}}>
        <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/826045575220559913/unknown.png' }} style={{width: 30, height: 50}}/>
        <View style={{alignItems: 'center'}}><Text style={{color: '#ffffff', fontSize: 35, marginLeft: 10, fontWeight: 'bold'}}>AC KK</Text></View>
      </View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <TextInput style={{backgroundColor: '#323232', color: '#ffffff', borderRadius: 10, width: 300}} placeholder="ydgfyafdfaoiy"></TextInput>
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <TextInput style={{backgroundColor: '#323232', color: '#ffffff', borderRadius: 10, width: 300}} placeholder="ydgfyafdfaoiy"></TextInput>
      </View>
      <View>
        <TouchableHighlight style={{}} onPress={(): void => { navigation.navigate('Головна'); }}><View style={{backgroundColor: '#BB86FC', marginTop: 10, width: 300, height: 50, borderRadius: 10,}}><Text style={{textAlign: 'center', marginTop: 5, fontSize: 25, color: '#ffffff'}}>Увійти</Text></View></TouchableHighlight>
      </View>
    </View>
  );
};

 
