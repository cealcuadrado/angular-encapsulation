import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadowdom-encapsulation',
  templateUrl: './shadowdom-encapsulation.component.html',
  styleUrls: ['./shadowdom-encapsulation.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowdomEncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
