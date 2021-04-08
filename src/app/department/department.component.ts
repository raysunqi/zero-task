import { Component, Input, OnInit } from '@angular/core';
import { Department } from './../models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  @Input() name?: string = '';
  @Input() manager?: string = '';
  @Input() totalEmployees?: number = 0;
  @Input() color?: string;
  @Input() height?: any;
  @Input() width?: any;
  constructor() {}

  ngOnInit(): void {
  }

}
