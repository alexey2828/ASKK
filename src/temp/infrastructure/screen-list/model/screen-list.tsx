import React, { ReactElement, useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { PaginationList } from './pagination-list';
import { UseHttpLatest } from '../../../../hooks/useHttp';
import { IHydraGet } from '../../../../interface/api-platform';
import { Loader } from '../../../component-ui/loader/Loader';
import { Cstyles } from '../../../../styleComponents/screensStyles/screenStyle.styles';
import { ModalMain } from '../../../component-ui/modal/modalMain';
import { choicePopupDetail, IModalDetail } from '../../utils/choose-popup-detail';
import { IListItem, IScreenListRoute } from '../';


interface IScreenList<T> extends IScreenListRoute {
  children: React.FC<IListItem<T>>;
}

export function ScreenList<T> ({ children, route }: IScreenList<T>): ReactElement {

  const { data, updateResponse, isLoading, error } = UseHttpLatest<IHydraGet<T>>();

  const changeUrl = route.name;
  const ListItem = children;

  const [url, setUrl] = useState(changeUrl);
  const [name1, setName] = useState('');
  const [page, setPage] = useState('1');
  const [shouldShow, setShouldShow] = useState(false);
  const [PopupDetail, setPopupDetail] = useState<React.FC<IModalDetail> | null>(null);

  function openModalDetail (member: any): void {
    const type = member?.['@type']
    if (typeof type === 'string') {
      setPopupDetail(choicePopupDetail(data, type));
    }
    setShouldShow(true);
  }

  const changePage = (url: string): void => {
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
      <View style={{height: '87%'}}>
        <View>{data?.['hydra:view'] && <PaginationList onClick={changePage} page={page} view={data['hydra:view']}/>}</View>

        <View style={{marginTop: -410}}>
          <View style={{width: 350}}>
            <TextInput
              placeholder="Знайти"
              placeholderTextColor = "#a1a1a1"
              maxLength={100}
              value={name1}
              onChangeText={(text): void => setName(text)}
              style={Cstyles.textInputc}
            />
          </View>
          {error ? (<Text style={{ color: 'red' }}>сервер недоступен</Text>) : null}
    
          { isLoading ? (<Loader/>) : (
            <ScrollView>
              {data?.['hydra:member'].map((member) => {
                <ListItem key={member.id} data={member} onPress={(): void => openModalDetail(member)}/>
                {shouldShow && PopupDetail ? (
                  <ModalMain onClose={(): void => {setShouldShow(false)}}>
                    <PopupDetail entity={member}/>
                  </ModalMain>) : null}
              })}
            </ScrollView>
          )}
        </View>
      </View>
    </View>
  );
}
