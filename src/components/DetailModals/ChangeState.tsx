import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from '../componentsLists/componentsScreenItems.styles';
import { IModalDetail } from '../../temp/infrastructure/open-modal-from-qr-code/interface/modal-detail';

export const ChangeState: React.FC<IModalDetail> = ({ entity }) => {

  const [PostName, setPostName] = useState('');
  const [newState, setnewState] = useState(entity?.name);
  
  useEffect(() => {
    async function updatePost() {
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/ld+json' },
        body: JSON.stringify({ name: newState })
      };
      const response = await fetch('http://159.89.213.194:81/api/normative-documents/5fad3dda-c24e-48c2-af4a-e779074c6c82', requestOptions);
      const data = await response.json();
      setPostName(data.name);
    }
    updatePost();
  }, []);

  return (
    <View>
      <Text style={styles.itemInfo}>{entity?.name} ssdsssssssss</Text>
      <Text style={styles.itemInfo}>{PostName} - {newState}</Text>
      <Pressable onPress={(): void => {setnewState('Новый')}}>
        <Text style={{ color: 'lime'}}>test</Text>
      </Pressable>
    </View>
  );
}