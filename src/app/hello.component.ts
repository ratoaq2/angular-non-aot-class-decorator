import { Component, Input, OnInit } from '@angular/core';

class DecoratorBuilder {
  customClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    console.log('Class Decorated');
    return class extends constructor {
      myName = 'Decorated Foobar';
    };
  }
}

export function ClassDecorators() {
  return new DecoratorBuilder();
}

@ClassDecorators().customClassDecorator
class MyNonAngularClass {
  myName = 'foobar';
}

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{ name }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  ngOnInit() {
    this.name = new MyNonAngularClass().myName;
  }
}
