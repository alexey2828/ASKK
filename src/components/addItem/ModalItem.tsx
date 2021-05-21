import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { Text, View, TouchableHighlight, Pressable } from 'react-native';
import { AddItem } from './AddItem';
import { styles } from './ModalItem.styles';

export const ModalItem: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = (): void => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View>
      <Pressable onPress={toggleModal} style={{}}>
        <View>
          <Text style={{color: 'white', margin: 10, fontSize: 20 }}>Додати</Text>
        </View>
      </Pressable>
      <Modal onBackdropPress={toggleModal} isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <View style={styles.addItemContainer}>
            <Text style={styles.title}>Додати</Text>
            <View style={styles.itemList}></View>
            <AddItem/>
            <TouchableHighlight style={styles.backBtnContainer} onPress={toggleModal}><Text style={styles.backBtn}>Назад</Text></TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
}
