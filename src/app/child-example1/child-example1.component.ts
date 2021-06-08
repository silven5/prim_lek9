import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-child-example1',
  templateUrl: './child-example1.component.html',
  styleUrls: ['./child-example1.component.scss'],
})
export class ChildExample1Component implements OnInit {
  @Input() public inFromParent: string;
  constructor() { }

  ngOnInit() {}

}
