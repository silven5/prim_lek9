import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //Приклад1

  cout=1;
  public string1 = <string> 'Data from parent ...';
  //Метод для зміни даних в дочірньому компоненті
  changeChild1Data() { this.string1 += this.cout+' '; this.cout++;}

  constructor() {}

}
