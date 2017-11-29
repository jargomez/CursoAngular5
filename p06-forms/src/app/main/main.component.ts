import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  <div class="container">
  <article class="row alto">
    <app-form-td class="col-12"></app-form-td>
  </article>
  </div>
  `,
  styles: [
    '.alto {min-height: 10rem}'
  ]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
