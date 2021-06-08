import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {Task} from '../task/task.component'
@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.page.html',
  styleUrls: ['./task-dialog.page.scss'],
})
export class TaskDialogPage implements OnInit {
@Input() task1:Task;
  constructor(private modalCtrl: ModalController) { }
  //Закриваємо вікно та повертаєму пустий task
close()
{
  this.task={title:"",description:""};
  this.modalCtrl.dismiss(this.task);
}
task:Task={title:"",description:""};
//закриваємо вікно та повертаємо task з веденими значеннями
save (name,desc)
{
  this.task.title=name;
  this.task.description=desc;

  this.modalCtrl.dismiss(this.task);
}
  ngOnInit() {
    console.log(this.task1);
  }
  dismiss() {
  close();
}
}
