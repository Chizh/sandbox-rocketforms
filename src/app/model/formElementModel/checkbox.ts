import { BaseFormElement } from './baseFromElement';

export class CheckBox extends BaseFormElement {
  constructor(options: {name:string}) 
    {
      super({
        name: options.name});
    }
  chacked: boolean
};