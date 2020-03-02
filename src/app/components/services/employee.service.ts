import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Form, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { EmployeeInterface } from '../../models/employee-interface';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Observable<any>;
  employee: Observable<any>;

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    'Content-type': 'application/json'
  });

  employeeForms = new FormGroup({
    employeeid: new FormControl(null),
    employeecode: new FormControl(''),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    identification: new FormControl('', Validators.required),
    username: new FormControl(''),
    password: new FormControl(''),
    sex: new FormControl('M'),
    address: new FormControl(''),
    cityid: new FormControl(1),
    countryid: new FormControl(1),
    phonenumber: new FormControl(''),
    cellphone: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    nationality: new FormControl(''),
    hiredate: new FormControl(''),
    dateofbirth: new FormControl('', Validators.required),
    salary: new FormControl(0),
    status: new FormControl('A'),
    rolid: new FormControl(1)

  });

  initializeFormGroup() {
    this.employeeForms.setValue({
      employeeid: null,
      employeecode: '',
      firstname: '',
      lastname: '',
      identification: '',
      username: '',
      password: '',
      sex: 'M',
      address: '',
      cityid: 1,
      countryid: 1,
      phonenumber: '',
      cellphone: '',
      email: '',
      nationality: '',
      hiredate: '',
      dateofbirth: '',
      salary: 0,
      status: 'A',
      rolid: 1
    });
  }

  getAllemployees() {
    const URL_API = 'http://localhost:43354/api/v1/employee/getemployeeslist';
    return this.http.get(URL_API);
  }

  saveEmployee(employee) {
    // TODO: Get Token Authorization
    let token;
    console.log(employee);
    const URL_API = 'http://localhost:43354/api/v1/employee/addemployee';
    return this.http.post(URL_API, employee, {headers: this.headers }).pipe(map(data => data));
  }

}
