import { Component, OnInit } from '@angular/core';


export class Todo{
  constructor(
    public  id : number,
    public description : String,
    public done : boolean,
    public targetDate : Date
){

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos=[

    new Todo(1,'Learn to Dance',false,new Date()),
    new Todo(2,'Become an expert in Angularate',false,new Date()),
    new Todo(3,'visit India',false,new Date()),
    // { id : 1,description : 'Learn to dance'},
    // { id : 2,description : 'Become an expert in Angular'},
    // { id : 3,description : 'Visit India'},
  ]
  // todo = {
  //     id : 1,
  //     description : 'Learn to dance'
  // }

  constructor() { }

  ngOnInit() {
  }

}
