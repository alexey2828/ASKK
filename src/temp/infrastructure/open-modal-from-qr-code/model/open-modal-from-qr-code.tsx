import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import HoneywellScanner from 'react-native-honeywell-scanner';
import { UseHttpLatest } from '../../../../hooks/useHttp';
import { Loader } from '../../../component-ui/loader/Loader';
import { ModalMain } from '../../../component-ui/modal/modalMain';
import { ViewError } from '../../../component-ui/viewError/viewError';
import { choicePopupDetail } from '../../utils/choose-popup-detail';


type TEntity = {
  '@type': string;
}

type TDataCode = {
  data: string;
}

export const OpenModalFromQrCode: React.FC = () => {
  const [dataEntity, setDataEntity] = useState<TEntity | null>(null);
  const [dataCode, setDataCode] = useState<TDataCode | string>('');
  const [scanError, setScanError] = useState('');
  const [url, setUrl] = useState('');
  let PopupDetail = null;

  const { data, updateResponse, isLoading } = UseHttpLatest<TEntity>();

  const closeModal = (): void => {
    setDataEntity(null);
    setScanError('');
  }

  HoneywellScanner.startReader().then((claimed) => {
    console.log(claimed ? 'Barcode reader is claimed' : 'Barcode reader is busy');
  });
  
  HoneywellScanner.on('barcodeReadFail', () => {
    setScanError('Barcode read failed');
  });
  
  isLoading ? (<Loader/>) : (
    HoneywellScanner.on('barcodeReadSuccess', event => {
      setScanError('');
      if (event) {
        setDataCode(event);
      } else {
        setDataCode('');
      } 
    }
    ));

  useEffect(() => {
    if (typeof dataCode !== 'string' && dataCode.data) {
      try {
        const url = JSON.parse(dataCode.data)['@id'];
        setUrl(url);
        if (!url) {
          throw new Error('Error url');
        }
      } catch (error) {
        setUrl('');
        setScanError(error.message);
      }
    }

  }, [dataCode]);

  useEffect(() => {
    if (scanError) {
      console.log(scanError);
    }
  }, [scanError]);

  useEffect(() => {
    if (url) {
      updateResponse({ url })
    }
  }, [url]);

  useEffect(() => {
    if (data) {
      setDataEntity(data);
    } else {
      setDataEntity(null);
    }
  }, [data])

  try {
    if (typeof data?.['@type'] === 'string') {
      PopupDetail = choicePopupDetail(data, data?.['@type']);
    }    
    if (!PopupDetail) {
      throw new Error('Error type'); 
    }
  } catch (error) {
    setScanError(error.message);
  } 

  return(
    <View>
      <Text>
        {scanError &&(
          <ModalMain onClose={closeModal}>
            <ViewError message={scanError} />
          </ModalMain>
        )}
        {PopupDetail &&(
          <ModalMain onClose={closeModal}>
            <PopupDetail entity={dataEntity}/>
          </ModalMain>
        )}
      </Text>
    </View>
  );
}
