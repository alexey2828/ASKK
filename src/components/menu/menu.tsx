import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { MenuItem, PropsMenuItem } from '../menuItem/menuItem';


const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 100,
  },
  View: {

  },
})

export interface PropsMenu {
  itemList: PropsMenuItem[];
}

const numColumns = 2;

export const tempArrPropsMenuItem: PropsMenuItem[] = [
  {
    id: 'a',
    sourceImg: 'https://cdn.discordapp.com/attachments/466314747281801228/805188533282144276/unknown.png',
    textValue: 'Компоненти на складі',
    colorBG: '#C38FFF',
    route: 'ComponentsScreen',
  },
  {
    id: 'b',
    sourceImg: 'https://cdn.discordapp.com/attachments/497433271567908874/815697366270738493/unknown.png',
    textValue: 'Змішування',
    colorBG: '#83D0CC',
    route: 'MixingScreen',
  },
  {
    id: 'c',
    sourceImg: 'https://cdn.discordapp.com/attachments/497433271567908874/815697686085763092/unknown.png',
    textValue: 'Прес-форми (корпус)',
    colorBG: '#F896AF',
    route: 'PressFormBodyScreen',
  },
  {
    id: 'd',
    sourceImg: 'https://cdn.discordapp.com/attachments/497433271567908874/819928340605304852/unknown.png',
    textValue: 'Прес-форми деталі ТЗП',
    colorBG: '#E2BD19',
    route: 'PressFormTZPScreen',
  },
  {
    id: 'e',
    sourceImg: 'https://cdn.discordapp.com/attachments/497433271567908874/815698067977535548/unknown.png',
    textValue: 'Деталi ТЗП',
    colorBG: '#6FB1E4',
    route: 'TZPDetailScreen',
  },
  {
    id: 'f',
    sourceImg: 'https://cdn.discordapp.com/attachments/497433271567908874/815698426141474866/unknown.png',
    textValue: 'Информація',
    colorBG: '#FF5C00',
    route: 'List',
  }
]

export const Menu: React.FC<PropsMenu> = () => {
  //const { itemList } = props;
  return (
    <View style={styles.container}>
      <FlatList
        data={tempArrPropsMenuItem}
        renderItem={({ item }) => (
          <View>
            <MenuItem
              sourceImg={item.sourceImg}
              textValue={item.textValue}
              colorBG={item.colorBG}
              id={item.id}
              route={item.route}
            />
          </View>
        )}
        keyExtractor={tempArrPropsMenuItem => tempArrPropsMenuItem.id}
        numColumns={numColumns}
      />
    </View>

  );
};


