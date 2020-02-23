import { Injectable } from '@angular/core';

import { isExt } from './isExt';
import { matchNonQuotedCommas } from './matchNonQuotedCommas';

@Injectable({
  providedIn: 'root'
})
export class CsvService {
  public csvToJson(file: File): Promise<object> {
    return new Promise((resolve, reject) => {
      const fileName = file.name;
      const reader = new FileReader();

      if (isExt(/\.csv$/, fileName)) {
        reader.onload = () => {
          const data = String(reader.result);
          const lines = data.split('\n');
          const headers = lines[0].toLowerCase().split(',');
          const lineMatcher = (line: string) => line.match(matchNonQuotedCommas) || [];
          const result = lines
            .filter((_, i) => i > 0)
            .filter((line) => lineMatcher(line).length === headers.length)
            .map((line) =>
              lineMatcher(line).reduce((obj, lineSplit, j) => {
                obj[headers[j]] = lineSplit;
                return obj;
              }, {})
            );

          resolve(result);
        };

        reader.readAsText(file);
      } else {
        reject();
      }
    });
  }
}
