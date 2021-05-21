import React from 'react';
import { Text, View } from 'react-native';
import { THydraView } from '../../../../interface/api-platform';
import Swipeable from 'react-native-swipeable'; 
import { styles } from '../../../../components/componentsLists/componentsScreenItems.styles';

type TPaginationList = {
    view: THydraView;
    onClick: (str: string) => void;
    page: string;
}

export const PaginationList: React.FC<TPaginationList> = ({ view, onClick, page }) => {
  const onPress = (str: string): void => {
    onClick(str);
  }
  const previous = view?.['hydra:previous']
  const next = view?.['hydra:next']
  return (
    <View style={styles.PgContainer}>
      <Text style={{color: '#ffffff'}} >Page - {page}</Text>
      {previous && <Swipeable usen style={styles.Prew} onSwipeRelease={() => onPress(previous)}>
      </Swipeable>}
      {!previous && <View style={styles.PrewNone}>
      </View>}
      {/*необходимо в случае отсутствия previous, что-бы justifyContent отрабатывал корректно*/}
      {next && <Swipeable style={styles.Next} onSwipeRelease={() => onPress(next)}>
      </Swipeable>}
    </View>
  );
};





