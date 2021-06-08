import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
//Приклад1

cout=1;
public string1 = <string> 'Data from parent ...';
//Метод для зміни даних в дочірньому компоненті
changeChild1Data() { this.string1 += this.cout+' '; this.cout++;}
//приклад2
public string2 = '';
receiveFromChild(event){
  //Потрібна валідація
  //як мінмум перевірка на тип
  this.string2 = event;
  }
  constructor() {}

}
