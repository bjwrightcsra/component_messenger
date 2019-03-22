export class ComponentTarget {
    componentSelector: string;
    componentInputName: string;
    constructor(selector: string, inputName: string) {
      this.componentSelector = selector;
      this.componentInputName = inputName;
    }
  }