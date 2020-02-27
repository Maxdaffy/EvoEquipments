import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: []
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  form: FormGroup = new FormGroup ({
    $key: new FormControl(null),
  });

  ngOnInit() {
  }

}
