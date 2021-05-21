import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../componentsLists/componentsScreenItems.styles';
import { IModalDetail } from '../../temp/infrastructure/open-modal-from-qr-code/interface/modal-detail';

export const DetailComponent: React.FC<IModalDetail> = ({ entity }) => {
  return (
    <View>
      <Text style={styles.itemInfo}>Название компонента: <Text style={styles.itemInfoa1}>{entity?.name}</Text></Text>
      <Text style={styles.itemInfo}>Номер нормативного документа: <Text style={styles.itemInfoa1}>{entity?.normativeDocument}</Text></Text>
    </View>
  );
}