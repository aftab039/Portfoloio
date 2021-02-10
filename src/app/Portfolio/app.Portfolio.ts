import { Component } from '@angular/core';
import { EmployeesService } from 'src/service/employees.service';

@Component({
  selector: 'app-Portfolio',
  templateUrl: './app.Portfolio.html'
  
})
export class AppPortfolio {
  public mydata:any =[];

  constructor(private emp:EmployeesService){}
  title = 'Portfolio'

  ngOnInit(){
    this.data();

  }
  data(){
    this.emp.getData().subscribe((data)=>{
      this.mydata=data;
      console.log("data a gya",this.mydata);
    })

  }
}
