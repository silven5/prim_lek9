import { Task } from './task/task.component';
import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs/internal/observable/empty';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FrirebaseTodoService {

  taskListRef: AngularFireList<any>;
  taskListRefDel: AngularFireList<any>;
  taskRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }
    // Create
    createTask(task: Task,op:boolean) {
      if (op)
      return this.taskListRef.push({
      //  id:task.id,
        title: task.title,
        description: task.description

      })
      else
      return this.taskListRefDel.push({
        //  id:task.id,
          title: task.title,
          description: task.description

        })
    }

    // Get Single
    getTask(id: string,bd:string) {
      this.taskRef = this.db.object('/'+bd+'/' + id);
      console.log("taskhRef="+this.taskRef.snapshotChanges());
      return this.taskRef;

    }

    // Get List
    getTaskList(bd:string,op:boolean) {
      if (op)
      {this.taskListRef = this.db.list('/'+bd);
      return this.taskListRef;}
      else
      {
      this.taskListRefDel = this.db.list('/'+bd);
      return this.taskListRefDel;
    }
    }

    // Update
    updateTask(id, task: Task,bd:string) {

      this.taskRef = this.db.object('/'+bd+'/' + id);
      return this.taskRef.update({
        title: task.title,
        description: task.description
      })
    }

    // Delete
    deleteTask(id: string,bd:string,op) {
      if (op)
      {this.taskRef = this.db.object('/'+bd+'/' + id);
      this.taskRef.remove();}
      else
      {
        this.taskListRefDel.remove(id);
      }
    }
}


