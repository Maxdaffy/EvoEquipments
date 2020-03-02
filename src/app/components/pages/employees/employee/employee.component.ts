import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/components/services/employee.service';

import swal from 'sweetalert';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: []
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  cities = [
    { cityId: 1, cityName: 'Santo Domingo' },
    { cityId: 23, cityName: 'San Pedro de Macoris' },
    { cityId: 28, cityName: 'Higuey' }
  ];


  ngOnInit() {
    this.getEmployeesList();
  }

  onClear() {
    this.employeeService.employeeForms.reset();
    this.employeeService.initializeFormGroup();
  }

  getEmployeesList() {
    this.employeeService.getAllemployees().subscribe(employeesData => console.log(employeesData));
  }

  saveEmployee() {

    this.employeeService.saveEmployee(this.employeeService.employeeForms.value)
      .subscribe(employeeData => {

        console.log(employeeData);
        swal('EmployeeCreate!', employeeData[1], employeeData[0]);
        location.reload();
        // return;

      });



    // console.log(this.employeeService.employeeForms.value);
  }

}
