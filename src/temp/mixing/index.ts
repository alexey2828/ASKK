export interface IMixing {
  state: string;
  normativeDocument: string;
  batchNumber: string;
  name: string;
  fields: [
      {
          id: string;
          name: string;
          componentBatchPlace: string;
      }
  ];
}