import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[] = [];

  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content :"First Todo",
        completed : false
      },
      {
        content :"Second Todo",
        completed : false
      },
      {
        content :"Third Todo",
        completed : false
      }
    ]

  }

  toggleDone(id:number) : void{     
    this.todos.map((value,i)=> {
      if (i == id) value.completed = !value.completed;
    })
  }

  deleteTodo(id : number) : void {
    this.todos = this.todos.filter( (value, i) => i !==id );    // we will pass every todo that is not equal to 'id'
  }

  addTodo(){
    this.todos.push({
      content : this.inputTodo,
      completed : false
    })

    this.inputTodo = '';
  }

}
