import React from 'react';
import { NavBar } from './src/NavBar';
import { Header } from './src/Header';
import { СomponentsScreenItems } from './src/components/componentsScreenItems/componentsScreenItems';
import { StyleSheet, View, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',

  },
});

export const ComponentsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View>
          <СomponentsScreenItems />
        </View>
      </ScrollView>
      <NavBar />
    </View>
  );
};

// export class ComponentsScreen extends React.Component {
//   render(): JSX.Element {
//     return (
//       <View style={styles.container}>
//         <Header />
//         <ScrollView>
//           <View>
//             <СomponentsScreenItems />
//           </View>
//         </ScrollView>
//         <NavBar />
//       </View>
//     );
//   }
// }
 
