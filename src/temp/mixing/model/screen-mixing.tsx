import React from 'react';
import { View } from 'react-native';
import { IScreenListRoute, ScreenList } from '../../infrastructure/screen-list/';
import { MixingItem } from '../ui/mixings-items/mixing-item';

type IScreenMixing = IScreenListRoute

export const ScreenMixing: React.FC<IScreenMixing> = ({ route }) => {

  return (
    <View>
      <ScreenList route={route}>
        {MixingItem}
      </ScreenList>
    </View>
  );
};


