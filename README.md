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

| Input            | Type    | Required                   | Description                                                                                               |
| ---------------- | ------- | -------------------------- | --------------------------------------------------------------------------------------------------------- |
| name           | string  | **YES**                    | Name will be used as the local storage name only
| inputMethods           | ImportMethod[]  | **YES**                    | Specify supported import methods from the ImportMethod enum


## Usage

Import module:

```typescript
import { evleyImporter } from '@evley/importer';
```

Set component properties:

```typescript
public name = 'test';
public importMethods = [ImportMethod.CSV];
```

Add component to your html:

```html
<evley-importer [name]="name" [importMethods]="importMethods"></evley-importer>
```
