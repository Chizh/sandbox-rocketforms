import { BaseFormElement } from './baseFromElement';

export class Input
  extends BaseFormElement {
    constructor(options: {name:string}) 
    {
      super({
        name: options.name});
    }
  value: string
};