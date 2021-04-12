import React from 'react';
import { Text, View, Image } from 'react-native';
//import { useNavigation } from '@react-navigation/native';

//import { styles } from './ModalItem.styles';

export const Filter: React.FC = () => {
  //const [count] = useState('Додати');
  return (
    <View> 
      <View style={{width: '100%', height: 25, margin: 20, display: 'flex', flexDirection: 'row'}}>
        <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/830001690274299944/unknown.png' }}
          style={{width: 25, height: 25, margin: 2}} />
        <View style={{}}><Text style={{color: '#a1a1a1', fontSize: 20, marginLeft: 10}}>Упорядкувати</Text></View>
      </View>
      <View style={{borderTopColor: '#333334', borderWidth: 2}}></View>
    </View>
  );
}

