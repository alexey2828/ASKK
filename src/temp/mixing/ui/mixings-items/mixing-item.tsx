import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './mixing-item.styles';
import { IMixing } from '../../interface/mixing';
import { ETitleFields } from '../../const/titile-fields';
import { IListItem } from '../../../infrastructure/screen-list';

export const MixingItem: React.FC<IListItem<IMixing>> = ({ data, onPress }) => {

  return ( 
    <View style={styles.cardContainer}>
      <Image source={require('../../../public/images/mixingIco.png')}
        style={styles.Ico}/>
      <View>
        <Pressable
          onPress={onPress}
          key={data.id}
        >
          <Text style={styles.listTitle}>{data.name}</Text>
        </Pressable>
      </View>
      <View style={[styles.stateItemContainer, { marginTop: 20, marginLeft: -10 }]}>
        <View><Text style={styles.stateItem}>{ETitleFields.MIXING_NUMBER}: {data.batchNumber?data.batchNumber: <Text style={styles.stateItem}>{ETitleFields.NO_DATA}</Text>}</Text></View>
        <Text style={styles.stateItem}>{data.state?data.state: <Text style={styles.stateItem}>{ETitleFields.NO_DATA}</Text>}</Text>
      </View>
    </View>
  )
}



