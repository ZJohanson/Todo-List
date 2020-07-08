import { Component, OnInit } from '@angular/core';
import { TodoInterface } from '../interfaces/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoList: TodoInterface[] = [
    {
      task: 'Do Laundry',
      completed: false,
    },
    {
      task: 'Make bed',
      completed: true,
    },
    {
      task: 'Watch football game with friends',
      completed: false,
    },
    {
      task: 'Go for a bike ride',
      completed: true,
    },
    {
      task: 'Walk dog',
      completed: false,
    },
    {
      task: 'Go grocery shopping',
      completed: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
