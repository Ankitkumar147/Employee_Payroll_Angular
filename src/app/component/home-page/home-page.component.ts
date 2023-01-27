import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { HttpService } from 'src/app/service/http.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  allEmp:Array<any> = [];
  // constructor(private router: Router) { }
  empList :any ;
  deptList:Array<any> = []
  countNumber:number= 0;
  name:string = "name";
  gender:string = "Gender";
  department:string = "department";
  salary:string = "salary";
  startDate:string = "Start Date";
  note:string = "note";

  imgUrl_1 = "../../assets/profile-images/Ellipse -1.png";
  imgUrl_2 = "../../assets/profile-images/Ellipse -2.png";
  imgUrl_3 = "../../assets/profile-images/Ellipse -3.png";
  imgUrl_4 = "../../assets/profile-images/Ellipse -4.png";


//   editById(Id:number){
//     console.log(Id)
//     let emp = this.allEmp.find((empData)=>{return empData.Id === Id})
//     console.log(emp);
//     this.router.navigate(['/update', Id]);

// }

public employeeCount: number = 0; 
  public employeeDetails: Employee[] = [];

  constructor(private httpService: HttpService, 
              ) { }

ngOnInit(): void {
  this.httpService.getEmployeeData().subscribe(data => {
    this.employeeDetails = data.data;
    this.employeeCount = this.employeeDetails.length;
    //console.log(this.employeeDetails);
  } );
}

}