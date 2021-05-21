import React, { ReactNode } from 'react';
import { View, SafeAreaView, ScrollView, TouchableHighlight, Text } from 'react-native';
import { styles } from '../addItem/ModalItem.styles';

type TDetailsModal = {
  children: ReactNode;
  onClose: () => void;
}

export const ModalMain: React.FC<TDetailsModal> = ({ children, onClose }) => {

  return (
    <SafeAreaView style={styles.modalWrapper}>
      <View style={{ flex: 1 }}>
        <View style={styles.ModalMainContainer}>
          <ScrollView style={styles.DetailsModal}>
            <View style={{margin: 10}}>
              { children }

            </View>
          </ScrollView>
          <View style={{margin: 10}}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <View style={{ backgroundColor: '#BB86FC', borderRadius: 10 }}>
                <TouchableHighlight
                  onPress={(): void => {}}>
                  <Text style={styles.BackBtn}>Змінити стан</Text>
                </TouchableHighlight>
              </View>
              <TouchableHighlight
                onPress={onClose}>
                <Text style={styles.BackBtn}>Назад</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
