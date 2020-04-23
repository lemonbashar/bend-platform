import {Injectable} from '@angular/core';

export interface ITextProcessingService {
  camelCaseToSentence(text: string): string ;
}

@Injectable({ providedIn: 'root' })
export class TextProcessingService implements ITextProcessingService {

  public camelCaseToSentence(text: string): string {
    let preparedField = '';
    let isSeparatorFound = false;
    for (let i = 0; i < text.length; i++) {
      const ch = text.charAt(i);
      isSeparatorFound = this.checkSeparator(i, ch, text);
      if (isSeparatorFound) {
        if (i !== 0) preparedField += ' ';
        preparedField += ch.toUpperCase();
      } else preparedField += ch;

      isSeparatorFound = false;
    }

    return preparedField;
  }

  public checkSeparator(indexOfChar: number, currentChar: string, text: string): boolean {
    if (this.isUpperCase(currentChar))
      return true;

    return indexOfChar === 0;
  }

  public isUpperCase(currentChar: string): boolean {
    return currentChar >= 'A' && currentChar <= 'Z';
  }

  public isLowerCase(currentChar: string): boolean {
    return currentChar >= 'a' && currentChar <= 'z';
  }
}
