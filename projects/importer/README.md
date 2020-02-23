# @evley/importer

Simple importer to get data into an Evley.app.

## Demo

Clone repo, install dependencies and serve locally.

```
npm install
ng serve
```

## API

```
npm install @evley/importer
```

### @Inputs()

| Input            | Type    | Description                                                                                               |
| ---------------- | ------- | -------------------------- | --------------------------------------------------------------------------------------------------------- |
| [name]           | string  | Name will be used as the local storage name only. Defaults to "evley-import"
| [inputMethods]          | ImportMethod[]  | Specify supported import methods from the ImportMethod enum. Defaults to all import methods
| (importClosed) | boolean | Output method to capture when import is closed and if imported true or undefined

## Usage

Import module:

```typescript
import { ImporterModule } from '@evley/importer';
```

Set component properties:

```typescript
public name = 'test';
public importMethods = [ImportMethod.CSV];

public onImportClosed(imported: boolean): void {
  // Handle imported
}
```

Add component to your html:

```html
<evley-importer [name]="name" [importMethods]="importMethods" (importClosed)="onImportClosed($event)"></evley-importer>
```
