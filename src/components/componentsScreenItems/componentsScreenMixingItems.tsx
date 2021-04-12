import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import { styles } from './componentsScreenItems.styles';
import { AddBtn } from '../buttons/addBtn';
import { State } from '../states/state';
import { ModalInfo } from './modalInfo';
import {Picker} from '@react-native-community/picker';
//import DropDownPicker from 'react-native-dropdown-picker';

export const ComponentsScreenMixingItems: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = (): void => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View>
      <View style={styles.cardContainer}>
        <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/825022663083950090/unknown.png' }}
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
      <View style={{backgroundColor: '#ffffff'}}>
        <Picker style={{backgroundColor: '#000fff'}}>
          <Picker.Item label="select" value="disabled"/>
          <Picker.Item label="male" value="male"/>
          <Picker.Item label="male2" value="male2"><View><Text>fsfsefsfsf</Text></View></Picker.Item>
          <Picker.Item label="male3" value="male3"/>
        </Picker>
      </View>
      <View style={{backgroundColor: '#ffffff'}}>
        <Picker itemStyle={{backgroundColor: 'red'}}>
          <Picker.Item label="selectdd" value="disabled"/>
          <View style={{backgroundColor: '#00ffff', width: '100%', height: 100}}>
            <Picker.Item label="male" value="male"/>
            <Picker.Item color="blue" label="male2" value="male2"/>
            <Picker.Item color="blue" label="male3" value="male3"/>
          </View>
        </Picker>
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
