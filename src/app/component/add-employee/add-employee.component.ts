import { Component ,OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider/options';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit {

  constructor(){

  }

   ngOnInit(): void{

   }

   value:number = 10;
   options: Options = {
    floor: 10000,
    step:1000,
    ceil: 500000
   };

}

