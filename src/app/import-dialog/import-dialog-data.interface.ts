import { ImportMethod } from './import-method.enum';

export interface ImportDialogData {
  appId: string;
  methods: Array<keyof typeof ImportMethod>;
}
