import { DetailComponent } from '../../../components/DetailModals/ComponentsData';

export interface IModalDetail {
  entity: any;
}

type TChoicePopupDetail = {
  [key: string]: React.FC<IModalDetail>;
};

const choicePopupDetailType: TChoicePopupDetail = {
  'Component': DetailComponent,
};

export function choicePopupDetail<T>(dataEntity: T, type: string): React.FC<IModalDetail> | null {
  if (dataEntity) {
    if (typeof type !== 'string') {
      return null;
    }
    const PopupDetail = choicePopupDetailType[type];
    if (PopupDetail) {
      return PopupDetail;
    }
  }
  return null;
}
