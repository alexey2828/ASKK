import React, { useEffect, useState } from 'react';
import { СomponentsScreenItems } from '../components/componentsLists/componentsScreenItems';
import { View, Text } from 'react-native';
import { UseHttpLatest } from '../hooks/useHttp';
import { IHydraGet } from '../interface/api-platform';
import { ComponentBatchPlace } from '../interface/ComponentBatchPlace';
import { PaginationList } from '../temp/infrastructure/screen-list/paginationList/paginationList';
import { TextInput } from 'react-native-gesture-handler';
import { Cstyles } from '../styleComponents/screensStyles/screenStyle.styles'
import { Loader } from '../temp/component-ui/loader/Loader';

type TComponentsScreen = {
  route: { name: string };
}

export const ComponentsScreen: React.FC<TComponentsScreen> = (props) => {

  const { data, updateResponse, isLoading, error } = UseHttpLatest<IHydraGet<ComponentBatchPlace>>();

  const changeUrl = props.route.name;
  const [url, setUrl] = useState(changeUrl);
  const [name1, setName] = useState('');
  const [page, setPage] = useState('1');

  const changePage = (url: string) => {
    setUrl(url);
    setPage(url.charAt(url.length - 1));
  }

  useEffect(() => {
    const url = changeUrl + '?name=' + name1;
    setUrl(url)
  }, [name1]);

  useEffect(() => {
    updateResponse({ url });
  }, [url]);
  return (
    <View style={Cstyles.containerc}>
      <Text style={{color: '#ffffff'}} >Page - {page}</Text>
      <View style={{height: '87%'}}>
        <View>{data?.['hydra:view'] && <PaginationList onClick={changePage} view={data['hydra:view']}/>}</View>

        <View style={{marginTop: -410}}>
          <View style={{width: 350}}>
            <TextInput
              placeholder="Назва компонента"
              placeholderTextColor = "#a1a1a1"
              maxLength={100}
              value={name1}
              onChangeText={(text): void => setName(text)}
              style={Cstyles.textInputc}
            />
          </View>
          {error ? (<Text style={{ color: 'red' }}>сервер недоступен</Text>) : null}
    
          { isLoading ? (<Loader/>) 
            : (data?.['hydra:member'] && <СomponentsScreenItems data={data?.['hydra:member']} />) 
          }
        
        </View>
      </View>
    </View>
  );
};
