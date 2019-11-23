import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  employeeForms: FormGroup = new FormGroup({
    $key: new FormControl({
      
    })
  });

}
