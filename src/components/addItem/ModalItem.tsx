import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { Text, View, TouchableHighlight } from 'react-native';
import { AddItem } from './AddItem';

import { styles } from './ModalItem.styles';

export const ModalItem: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = (): void => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View>
      <TouchableHighlight onPress={toggleModal} style={styles.btnNavBarContainerAdd}>
        <Text style={styles.btnNavBarContainerAddPlus}>+</Text>
      </TouchableHighlight>
      <Modal onBackdropPress={toggleModal} isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <View style={styles.addItemContainer}>
            <Text style={styles.title}>Додати</Text>
            <View style={styles.itemList}></View>
            <AddItem />
          </View>
          <TouchableHighlight onPress={toggleModal}><Text style={styles.backBtn}>Назад</Text></TouchableHighlight>
        </View>
      </Modal>
    </View>
  );
}



