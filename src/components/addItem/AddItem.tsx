import React from 'react'
import { Text, View, Image, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './ModalItem.styles';

export const AddItem: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.addItemMainContainer}>
      <View style={styles.mgtop}>
        <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/821008043902107738/unknown.png' }}
          style={styles.cardImg} />
        <View style={styles.titleContainer}>
          <TouchableHighlight onPress={(): void => { navigation.navigate('ComponentsScreen')}}>
            <Text style={styles.btnTitle}>
              Компонент на склад будівлі
            </Text>
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.mgtop}>
        <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/821014781417881610/unknown.png' }}
          style={styles.cardImg} />
        <View style={styles.titleContainer}>
          <TouchableHighlight onPress={(): void => { navigation.navigate('MixingScreen')}}>
            <Text style={styles.btnTitle}>
              Змішування на будівлі
            </Text>
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.mgtop}>
        <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/821367251101155359/unknown.png' }}
          style={styles.cardImg} />
        <View style={styles.titleContainer}>
          <TouchableHighlight onPress={(): void => { navigation.navigate('PressFormTZPScreen')}}>
            <Text style={styles.btnTitle}>
              Прес-форма деталі ТЗП на...
            </Text>
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.mgtop}>
        <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/821367345745494016/unknown.png' }}
          style={styles.cardImg} />
        <View style={styles.titleContainer}>
          <TouchableHighlight onPress={(): void => { navigation.navigate('PressFormBodyScreen')}}>
            <Text style={styles.btnTitle}>
                Прес-форма (корпус)
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

