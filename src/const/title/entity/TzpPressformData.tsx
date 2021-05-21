import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../../components/componentsLists/componentsScreenItems.styles';
import { IModalDetail } from '../../../temp/infrastructure/open-modal-from-qr-code/interface/modal-detail';
import { ETitlePressFormTZP } from './tzp-press-form-title';

export const DetailComponentBatchPlace: React.FC<IModalDetail> = ({ entity }) => {
  return (
    <View>
      <Text style={styles.itemInfo}>{ETitlePressFormTZP.number}: <Text style={styles.itemInfoa1}>{entity?.name}</Text></Text>     
    </View>
  );
}
