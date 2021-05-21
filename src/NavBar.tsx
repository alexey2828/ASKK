import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ModalItem } from './components/addItem/ModalItem';
import { btnNavBarContainerHome, btnNavBarContainerQr, navBarMainContainer, navBarIco, innerText, navBarRow, } from './styleComponents/screensStyles/indexComponentsStyle.styles';

export const NavBar: React.FC = () => {
  const navigation = useNavigation();
  return ( 
    <View style={navBarMainContainer}>
      <View style={navBarRow}>
        <TouchableHighlight onPress={(): void => { navigation.navigate('Головна'); }}>
          <View style={btnNavBarContainerHome}>
            <Image source={{ uri: 'https://cdn.discordapp.com/attachments/512654520007000075/819900979729662012/unknown.png' }}
              style={navBarIco}
            />
            <Text style={innerText}>
              Home
            </Text>
          </View>
        </TouchableHighlight>
        <ModalItem />
        <TouchableHighlight onPress={(): void => { navigation.navigate('QR'); }}>
          <View style={btnNavBarContainerQr}>
            <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/805137247124848710/unknown.png' }}
              style={navBarIco}
            />
            <Text style={innerText}>
              QR-code
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}


