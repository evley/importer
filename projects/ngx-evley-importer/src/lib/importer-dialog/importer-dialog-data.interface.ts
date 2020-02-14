import { ImportMethod } from './method/import-method.enum';

export interface ImporterDialogData {
  appId: string;
  methods: Array<keyof typeof ImportMethod>;
}
