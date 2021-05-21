import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { MenuItem, PropsMenuItem } from './menuItem/menuItem';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 100,
  },
})
export type PropsMenu = {
  itemsList: PropsMenuItem[];
}
const numColumns = 2;

export const Menu: React.FC<PropsMenu> = ({ itemsList }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={itemsList}
        renderItem={({ item }) => (
          <MenuItem
            sourceImg={item.sourceImg}
            textValue={item.textValue}
            colorBG={item.colorBG}
            id={item.id}
            route={item.route}
          />
        )}
        keyExtractor={itemsList => itemsList.id}
        numColumns={numColumns}
      />
    </View>

  );
};


