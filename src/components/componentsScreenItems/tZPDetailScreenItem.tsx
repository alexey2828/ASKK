import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import { styles } from './componentsScreenItems.styles';
import { AddBtn } from '../buttons/addBtn';
import { State } from '../states/state';
import { ModalInfo } from './modalInfo';

export const TZPDetailScreenItem: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = (): void => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View>
      <View style={styles.cardContainer}>
        <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/826034748727623700/unknown.png' }}
          style={styles.Ico} />
        <View style={{ marginLeft: 20, }}>
          <TouchableHighlight onPress={toggleModal}>
            <Text style={styles.titleItem}>
            Этилацетат (эфир этиловый уксусной кислоты)
            </Text>
          </TouchableHighlight>
          <View style={styles.stateItemContainer}>
            <View><Text style={styles.stateItem}>Партія: 1234567</Text></View>
            <Text style={styles.stateItem}>Місце: 1234567</Text>
            <State/>
          </View>
        </View>
      </View>
      
      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <View style={styles.addItemContainer}>
            <Text style={styles.title}>Додати</Text>
            <View style={styles.itemList}></View>
            <ModalInfo/>{/*описание*/}
            <View style={{ display: 'flex', flexDirection: 'row', alignSelf: 'flex-end'}}>
              <View><TouchableHighlight onPress={toggleModal}><Text style={{color: '#ffffff', margin: 15, fontSize: 20, textAlign: 'right'}}>Назад</Text></TouchableHighlight></View>
              <View><TouchableHighlight onPress={toggleModal}><AddBtn/></TouchableHighlight></View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
