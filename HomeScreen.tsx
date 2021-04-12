import { NavBar } from './src/NavBar';
import { Header } from './src/Header';

import { StyleSheet, View, ScrollView} from 'react-native';
import { Menu } from './src/components/menu/menu';

import { tempArrPropsMenuItem } from './src/components/menu/menu';
import 'react-native-gesture-handler';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


class ListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <View style={{flex: 1}}> 
          <ScrollView> 
            <View>
              <Menu 
                itemList={tempArrPropsMenuItem}
              />
            </View>
          </ScrollView>
        </View>
        <NavBar/> 
      </View>
    );
  }
}

export default ListScreen;

