import { Component ,OnInit } from '@angular/core';

import { FormArray, FormBuilder, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Employee } from '../../model/employee';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit {

  public employee: Employee = new Employee();
  employeeFormGroup: FormGroup;

  constructor( private formbuilder: FormBuilder){
   this.employeeFormGroup = this.formbuilder.group({
    name: new FormControl('',[Validators.required,Validators.pattern("^[A-Z][a-zA-Z\\s]{2,}$")]),
    profilePic: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
    department: this.formbuilder.array([],[Validators.required]),
    salary: new FormControl('',[Validators.required]),
    startDate: new FormControl('',[Validators.required]),
    note: new FormControl('',[]),
   })
  }
  
  onSubmit(){
      this.employee = this.employeeFormGroup.value;
      console.log(this.employee);
  }

  ngOnInit(): void{
    console.log(this.employee)

  }

  department: any = ["HR","Finance","Engineer","Sales","Others"];


  departments:Array<any> = [
    {
      id: 1,
      name:"HR",
      value:"HR",
      checked: false
    },
    {
      id: 2,
      name:"Finance",
      value:"Finance",
      checked: false
    },
    {
      id: 3,
      name:"Engineer",
      value:"Engineer",
      checked: false
    },
    {
      id: 4,
      name:"Sales",
      value:"Sales",
      checked: false
    },
    {
      id: 5,
      name:"Others",
      value:"Others",
      checked: false
    }

  ]

  onCheckboxChange(event: MatCheckboxChange) {
    const department: FormArray = this.employeeFormGroup.get('department') as FormArray;
    if(event.checked){
      department.push(new FormControl(event.source.value));
      console.log(department);
    } else {
      const index = department.controls.findIndex(x=>x.value == event.source.value);
      department.removeAt(index);
    }
  }

  salary: number = 400000;
   updateSetting(event:any) {
     this.salary = event.value;
   }

   formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

}

