import { Component, OnInit, Input } from '@angular/core';
import { Task }  from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  faTimes = faTimes;

  @Input() task: Task;

  constructor() { 
    this.task = {} as Task;
  }

  ngOnInit(): void {
  }

}
