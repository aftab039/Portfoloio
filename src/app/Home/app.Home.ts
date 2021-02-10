import { Component,OnInit,OnDestroy } from '@angular/core';
// import { Observable } from 'rxjs';
import {EmployeesService} from "../../service/employees.service";



@Component({
  selector: 'app-Home',
  templateUrl: './app.Home.html'
  
})
export class AppHome {
  title = 'Home';
  constructor(private emp:EmployeesService){
}

// ngOnInit(){
//  // alert("page load");
//   this.apicall();
//   console.log("my data",this.emp.getData());
// }
 
  Myfunction(){
  // alert("page load");
   this.apicall();
   console.log("my data",this.emp.getData());
 }
 
  
// ngOnDestroy(){
//   alert("page finish");

// }

  apicall(){
     this.emp.getData().subscribe((res: any)=>{
      console.log("api data",res);
    })
   }

  
}
