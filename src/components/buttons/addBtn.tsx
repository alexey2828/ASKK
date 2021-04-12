import React, { useState } from 'react';
import { Text, View } from 'react-native';
//import { useNavigation } from '@react-navigation/native';

//import { styles } from './ModalItem.styles';

export const AddBtn: React.FC = () => {
  const [count] = useState('Додати');
  return (
    <View> 
      <View style={{marginRight: 15, marginBottom: 15, width: 'auto', height: 'auto', backgroundColor: '#BB86FC', borderRadius: 10, alignSelf: 'flex-end'}}>
        <Text style={{color: '#ffffff', margin: 15, fontSize: 20}}>{count}</Text>
      </View>
    </View>
  );
}

