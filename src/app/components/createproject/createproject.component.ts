import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})
export class CreateprojectComponent implements OnInit {

  constructor(private uS:UserService, private router: Router) { }

  ngOnInit() {
  }

  tasks=[];

  taskflag:boolean = false;
  loading:boolean = false;
  
  addField(noOfTask){
    this.tasks=[];
    for (var i = 0; i < noOfTask; ++i) {
      this.tasks.push(i+1);
    }
    this.taskflag = true; 
  }

  addProject(pname,inchargename,inchargecontact,startdate,enddate,notask){
    this.loading = true;
    let userid = this.uS.getUserId();
    this.uS.addProject(pname,inchargename,inchargecontact,startdate,enddate,notask,userid).subscribe((r:any)=>{
      if (r === 'success') {
        this.loading = false;
        this.router.navigate(["/admin"]);
      }else{
        alert("Data is incorrect");
        this.loading = false;
      }
    })
  }
}
