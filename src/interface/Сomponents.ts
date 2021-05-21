export interface IСomponents {
    id: string;
    name: string;
    normativeDocument: string; //временно пока нет поиска на сервере
    '@id': string;
    fields: [
        {
            id: string;
            '@type': string;
            name: string;
            norm: string;
        }
    ];
}

export interface IComponet {
    id: string;
    name: string;
    normativeDocument: string;
}
