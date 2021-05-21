import React, { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { ETitleMessage } from '../../const/title/message';
import { ComponentBatchPlace } from '../../interface/ComponentBatchPlace';
import { ChangeState } from '../DetailModals/ChangeState';
import { DetailComponent } from '../DetailModals/ComponentsData';
import { ModalMain } from '../modal/modalMain';
import { styles } from './componentsScreenItems.styles';

type TСomponentsScreenItems = {
  data: ComponentBatchPlace[];
}
export const СomponentsScreenItems: React.FC<TСomponentsScreenItems> = ({ data }) => {
  const [state, setstate] = useState({});

  const [shouldShow, setShouldShow] = useState(false);
  return (
    <View style={styles.ItemListContainer}>
      {shouldShow ? (
        <ModalMain onClose={(): void => {setShouldShow(false)}}>
          <DetailComponent entity={state}/>
        </ModalMain>) : null}
      <ScrollView>
        {(
          data.map(member => {
            return (
              <View key={member.id} style={styles.cardContainer}>
                <Image source={require('../../../public/images/componentsIco.png')}
                  style={styles.Ico}/>
                <View>
                  <Pressable
                    onPress={(): void => {setShouldShow(!shouldShow), setstate(member)}}
                    key={member.id}
                  >
                    <Text style={styles.listTitle}>{member.name}</Text>
                  </Pressable>
                </View>
                <View style={[styles.stateItemContainer, { marginTop: 20, marginLeft: -10 }]}>
                  <View><Text style={styles.stateItem}>Партія: {member.batchNumber?member.batchNumber: <Text style={styles.stateItem}>{ETitleMessage.noData}</Text>}</Text></View>
                  <Text style={styles.stateItem}>Місце: {member.batchPlaceNumber?member.batchPlaceNumber: <Text style={styles.stateItem}>{ETitleMessage.noData}</Text>}</Text>
                  <Text style={styles.stateItem}>{member.state?member.state:<Text style={styles.stateItem}>{ETitleMessage.noData}</Text>} </Text>
                </View>
              </View>
            )
          })
        )
        }
      </ScrollView>
    </View>
  );
}



