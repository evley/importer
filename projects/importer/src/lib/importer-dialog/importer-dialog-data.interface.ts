import { ImportMethod } from './method/import-method.enum';

export interface ImporterDialogData {
  name: string;
  methods: Array<keyof typeof ImportMethod>;
}
