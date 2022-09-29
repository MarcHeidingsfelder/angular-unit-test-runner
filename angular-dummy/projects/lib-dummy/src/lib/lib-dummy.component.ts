import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-lib-dummy',
  template: `
    <p>
      lib-dummy works!
    </p>
  `,
  styles: [
  ]
})
export class LibDummyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
