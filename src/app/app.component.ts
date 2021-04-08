import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { Department } from './models/department';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  departments?: Department[];

  COLORS = ['#bd10e0', '#4a90e2', '#50e3c2', '#b8e986', '#7ed321', '#417505', '#f8e71c', '#f5a623', '#9b9b9b'];
  constructor(private service: EmployeeService) {
  }
  ngOnInit(): void {
    this.departments = this.service.getDepartments();
  }

  getColor(index: number): string {
    if (index > this.COLORS.length) return '#000000';
    return this.COLORS[index];
  }
  getWidth(department: Department): number {
    if (!department || !department.employees || !department.employees.length) return 100;
    var res = Math.floor(department.employees.length / 3300 * 1000);
    return res < 10 ? 10 : res;
  }
  getManger(department: Department): string {
    if (!department || !department.employees || !department.employees.length) return '';
    //var manager = department.employees.filter(e => e.managerEmployeeId == "1")[0];
    var manager = department.employees[0];
    return `${manager?.firstName} ${manager?.lastName}`;
  }
}
