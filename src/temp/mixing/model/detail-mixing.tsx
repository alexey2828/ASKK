import React from 'react';
import { View, Text } from 'react-native';
import { IMixing } from '..';
import { IModalDetail } from '../../infrastructure/utils/choose-popup-detail';
import { styles } from '../componentsLists/componentsScreenItems.styles';

interface TDetailMixing extends IModalDetail {
  entity: IMixing;
}

export const DetailMixing: React.FC<TDetailMixing> = ({ entity }) => {
  return (
    <View>
      <Text style={styles.itemInfo}>Название компонента: <Text style={styles.itemInfoa1}>{entity.name}</Text></Text>
      <Text style={styles.itemInfo}>Номер нормативного документа: <Text style={styles.itemInfoa1}>{entity.normativeDocument}</Text></Text>
    </View>
  );
}