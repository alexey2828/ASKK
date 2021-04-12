import React from 'react';
import { Text, View, ScrollView } from 'react-native';

export const ModalInfo: React.FC = () => {
  return (
    <View> 
      <ScrollView style={{margin: 10, height: 200, backgroundColor: '#121212'}}>
        <View style={{margin: 10}}>
          <Text style={{color:'#ffffff', fontSize: 16, marginTop: 5}}>Назва компоненту: Компонент 1</Text>
          <Text style={{color:'#ffffff', fontSize: 16, marginTop: 5}}>Номер нормативного документа: №53</Text>
          <Text style={{color:'#ffffff', fontSize: 16, marginTop: 5}}>Місцезнаходження: Корпус 1</Text>
          <Text style={{color:'#ffffff', fontSize: 16, marginTop: 5}}>Ідентифікатор: №8597</Text>
          <Text style={{color:'#ffffff', fontSize: 16, marginTop: 5}}>Склади, в яких застосовується:</Text>
          <Text style={{color:'#ffffff', fontSize: 16, marginTop: 5}}>Партія: </Text>
          <Text style={{color:'#ffffff', fontSize: 16, marginTop: 5}}>Аналізи: </Text>
          <Text style={{color:'#ffffff', fontSize: 16, marginTop: 5}}>Місце у партії: </Text>
        </View>
      </ScrollView>
    </View>
  );
}

