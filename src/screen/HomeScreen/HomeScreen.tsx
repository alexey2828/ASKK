import { StyleSheet, View, ScrollView} from 'react-native';
import { Menu } from '../../components/menu/menu';
import { strPropsMenuItem } from './structPropsMenuItem';

import 'react-native-gesture-handler';
import React from 'react';
import { OpenModalFromQrCode } from '../../temp/infrastructure/open-modal-from-qr-code/open-modal-from-qr-code';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class HomeScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}> 
          <ScrollView> 
            <View>
              <Menu 
                itemsList={strPropsMenuItem}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default HomeScreen;

