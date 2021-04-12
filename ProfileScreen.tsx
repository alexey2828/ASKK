import React from 'react';
import { NavBar } from './src/NavBar';
import { Header } from './src/Header';
import { StyleSheet, Text, View, ScrollView, Button, Image } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class ProfileScreen extends React.Component {
//READY


  async componentDidMount() {
    //const fff  = 'Этилацетат (эфир этиловый уксусной кислоты) технический';
    try {
      await fetch('http://206.81.28.17:81/api/normative-documents?page=1', {
        method: 'POST',
        headers: {
          'Accet': 'application/ld+json',
          'Content-type': 'application/ld+json'
        },
        body: JSON.stringify({
          name: 'test short text',
          norm: 'norm doc',
        })
      });
    } catch(e){
      console.log(e);
    }

  } 

  //async componentDidMount() {
  //
  //  try {
  //    await fetch('https://webhook.site/d260db25-0014-44a0-a489-03964899ca8b', {
  //      method: 'post',
  //      mode: 'no-cors',
  //      headers: {
  //        'Accet': 'application/json',
  //        'Content-type': 'application/json'
  //      },
  //      body: JSON.stringify({
  //        username: 'jhon',
  //      })
  //    });
  //  } catch(e){
  //    console.log(e);
  //  }
  //
  //} 


  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <View style={{flex: 1}}> 
          <ScrollView> 
            <View style={{width: '100%', height: 200,  backgroundColor: '#242424', borderRadius: 10, marginTop: 10}}>
              <View style={{display: 'flex', flexDirection: 'row', margin: 15}}>
                <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/830045547741708298/unknown.png' }}
                  style={{width: 98, height: 100, margin: 2}} />
                <View style={{marginTop: 30, marginLeft: 10}}><Text style={{color: '#ffffff', fontSize: 20}}>Іванов Олександр<Text style={{color: '#a1a1a1', fontSize: 14}}>#23</Text></Text>
                  <Text style={{color: '#a1a1a1', fontSize: 14}}>Посада</Text>
                </View>
              </View>
              <View style={{borderTopColor: '#333334', borderWidth: 2, width: '100%'}}></View>
              <View style={{display: 'flex', flexDirection: 'row', margin: 18}}>
                <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/830044311365746688/unknown.png' }}
                  style={{width: 20, height: 20, margin: 2}} />
                <Text style={{color: '#a1a1a1', fontSize: 14}}>+380703671292</Text>
              </View>
            </View>
            
            <View style={{width: '100%', height: 200,  backgroundColor: '#242424', borderRadius: 10, marginTop: 10}}>
              <View style={{display: 'flex', flexDirection: 'row', margin: 15}}>
                <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/830044836492214332/unknown.png' }}
                  style={{width: 18, height: 18, margin: 2}} />
                <View style={{margin: 0, marginLeft: 10}}><Text style={{color: '#ffffff', fontSize: 16}}>Відділ: <Text style={{color: '#a1a1a1', fontSize: 16}}>Назва</Text></Text>
                  
                </View>
              </View>

              <View style={{display: 'flex', flexDirection: 'row', marginLeft: 15}}>
                <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/830044836492214332/unknown.png' }}
                  style={{width: 18, height: 18, margin: 2}} />
                <View style={{margin: 0, marginLeft: 10}}><Text style={{color: '#ffffff', fontSize: 16}}>Роль: <Text style={{color: '#a1a1a1', fontSize: 16}}>АРМ АС КК</Text></Text>
                  
                </View>
              </View>

              <View style={{display: 'flex', flexDirection: 'row', margin: 15}}>
                <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/830044836492214332/unknown.png' }}
                  style={{width: 18, height: 18, margin: 2}} />
                <View style={{margin: 0, marginLeft: 10}}><Text style={{color: '#ffffff', fontSize: 16}}>Пароль: <Text style={{color: '#a1a1a1', fontSize: 16}}>xxxxxxx</Text></Text>
                  
                </View>
              </View>
              <View style={{borderTopColor: '#333334', borderWidth: 2, width: '100%'}}></View>
              <View style={{display: 'flex', flexDirection: 'row', margin: 15}}>
                <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/830046681898287195/unknown.png' }}
                  style={{width: 22, height: 22, margin: 2}} />
                <View style={{margin: 0, marginLeft: 10}}><Text style={{color: '#ffffff', marginLeft: -2, marginTop: 2, fontSize: 16}}>Пароль</Text>
                  
                </View>
              </View>
            </View>

            
            {/*<Button title="req 1" onPress={() => this.componentDidMount()}/>*/}
           
          </ScrollView>
        </View>
        <NavBar/>
      </View>
    );
  }
}

// ...
