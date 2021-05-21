import React from 'react';
import { View, Text } from 'react-native';
import { ETitleComponentBatchPlace } from '../../const/title/entity/component-batch-place-title';
import { styles } from '../componentsLists/componentsScreenItems.styles';
import { IModalDetail } from '../../temp/infrastructure/open-modal-from-qr-code/interface/modal-detail';

export const DetailComponentBatchPlace: React.FC<IModalDetail> = ({ entity }) => {
  //вызов компонента, который вернет кнопки с командами. Кнопка принимает тип (список команд),  
  return (
    <View>
      <Text style={styles.itemInfo}>{ETitleComponentBatchPlace.name}: <Text style={styles.itemInfoa1}>{entity?.name}</Text></Text>
      <Text style={styles.itemInfo}>{ETitleComponentBatchPlace.normativeDocument}: <Text style={styles.itemInfoa1}>{entity?.normativeDocument}</Text></Text>
      <Text style={styles.itemInfo}>{ETitleComponentBatchPlace.party}: <Text style={styles.itemInfoa1}>{entity?.batchNumber}</Text></Text>
      <Text style={styles.itemInfo}>{ETitleComponentBatchPlace.batchPlace}: <Text style={styles.itemInfoa1}>{entity?.batchPlaceNumber}</Text></Text>
    </View>
  );
}