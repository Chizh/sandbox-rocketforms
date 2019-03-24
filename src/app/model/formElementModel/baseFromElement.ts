export class BaseFormElement {
  constructor(options: { name: string }) {
    this.name = options.name;
  }
  name: string
}