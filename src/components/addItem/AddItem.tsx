import React from 'react'
import { Text, View, Image, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './ModalItem.styles';

export const AddItem: React.FC = () => {
  const navigation = useNavigation();
  return (
    

    <View style={styles.addItemMainContainer}>
      <View style={styles.mgtop}>
        <Image source={require('../../../public/images/componentsIco.png')}
          style={styles.cardImg} />
        <View style={styles.titleContainer}>
          <TouchableHighlight onPress={(): void => { navigation?.navigate('CreateComponent')}}>
            <Text style={styles.btnTitle}>
              Компонент на склад будівлі
            </Text>
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.mgtop}>
        <Image source={require('../../../public/images/mixingIco.png')}
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
        <Image source={require('../../../public/images/pressFormTZPIco.png')}
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
        <Image source={require('../../../public/images/pressFormTZPBodyIco.png')}
          style={styles.cardImg} />
        <View style={styles.titleContainer}>
          <TouchableHighlight onPress={(): void => { navigation.navigate('Головна')}}>
            <Text style={styles.btnTitle}>
                Прес-форма (корпус)
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

