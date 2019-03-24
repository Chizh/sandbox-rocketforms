import { BaseFormElement } from './formElementModel/baseFromElement';

export class FormModel {
  constructor(
    options: { 
      rows: Array<BaseFormElement> }) {
    this.rows = options.rows;
  }
  rows: BaseFormElement[]
}