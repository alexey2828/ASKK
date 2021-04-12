import React, { useState } from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import { styles } from './headerStyle.styles';

export const Header: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = (): void => {
    setModalVisible(!isModalVisible);
  };
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.rowContainer}>
        <TouchableHighlight onPress={toggleModal}>
          <View style={{ width: 75, height: 75, alignItems: 'center' }}>
            <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/826341497326534706/unknown.png' }} style={styles.menuIco}/>
          </View>
        </TouchableHighlight>
        <View style={styles.logoContainer}>
          <Text style={styles.innerText2}>Головна</Text>
        </View>
        <View style={styles.avatar}>
          <TouchableHighlight onPress={(): void => { navigation.navigate('Profile'); }}>
            <Image
              source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/805128937734537236/unknown.png' }}
              style={styles.avatarImage}
            />
          </TouchableHighlight>
        </View>
      </View>
      {/*Modal Side Menu*/}
      <Modal 
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        animationInTiming={800}
        animationOutTiming={800}
        onBackdropPress={toggleModal}
        isVisible={isModalVisible}>
        <View style={styles.SideMenuContainer}>
          <View style={styles.ContentContainer}>
            <View style={styles.LogoContainer}>
              <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/826045575220559913/unknown.png' }} style={styles.LogoImg}/>
              <Text style={styles.LogoText}>АС КК</Text>
            </View>
          </View>
          <View style={styles.BtnContainer1}>
            <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/826332285070082058/unknown.png' }} style={styles.BtnIco1}/>
            <Text style={styles.BtnText1}>Вибір будівлі</Text>
          </View>
          <View style={{ width: '100%', backgroundColor: '#333334', height: 3, marginTop: 15}}></View>
          <View style={styles.BtnContainer2}>
            <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/826333483114430494/unknown.png' }} style={styles.BtnIco2}/>
            <TouchableHighlight onPress={(): void => { navigation.navigate('LoginScreen'); }}><Text style={styles.BtnText2}>Вийти</Text></TouchableHighlight>
          </View>
          <View style={{marginTop: '90%'}}>
            <View style={{ width: '100%', backgroundColor: '#333334', height: 3, marginTop: 15}}></View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/827141915459584000/unknown.png' }} style={{ width: 25, height: 25, margin: 10}}/>
              <Text style={{color: '#a1a1a1', marginTop: 10, width: '80%'}}>Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry`s Standard ake type specimen book. </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}


