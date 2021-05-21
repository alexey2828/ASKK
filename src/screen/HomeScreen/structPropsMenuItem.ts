import { PropsMenu } from '../../components/menu/menu';
import { apiComponentsUrlShort, apiMixingsUrlShort, apiNormativeDocumentShort, apiTzpDetailShort, apiTzpPlateShort, apiTzpPressformShort } from '../../const/urls';

export const strPropsMenuItem: PropsMenu['itemsList'] = [

  {
    id: 'a',
    sourceImg: 'https://cdn.discordapp.com/attachments/466314747281801228/805188533282144276/unknown.png',
    textValue: 'Компоненти на складі',
    colorBG: '#C38FFF',
    route: apiNormativeDocumentShort,
  },
  {
    id: 'b',
    sourceImg: 'https://cdn.discordapp.com/attachments/497433271567908874/815697366270738493/unknown.png',
    textValue: 'Змішування',
    colorBG: '#83D0CC',
    route: apiMixingsUrlShort,
  },
  {
    id: 'c',
    sourceImg: 'https://cdn.discordapp.com/attachments/497433271567908874/815697686085763092/unknown.png',
    textValue: 'Пластина ТЗП',
    colorBG: '#F896AF',
    route: apiTzpPlateShort,
  },
  {
    id: 'd',
    sourceImg: 'https://cdn.discordapp.com/attachments/497433271567908874/819928340605304852/unknown.png',
    textValue: 'Прес-форми деталі ТЗП',
    colorBG: '#E2BD19',
    route: apiTzpPressformShort,
  },
  {
    id: 'e',
    sourceImg: 'https://cdn.discordapp.com/attachments/497433271567908874/815698067977535548/unknown.png',
    textValue: 'Деталi ТЗП',
    colorBG: '#6FB1E4',
    route: apiTzpDetailShort,
  },
  {
    id: 'f',
    sourceImg: 'https://cdn.discordapp.com/attachments/497433271567908874/815698426141474866/unknown.png',
    textValue: 'Информація',
    colorBG: '#FF5C00',
    route: 'TestScreen',
  }
]
