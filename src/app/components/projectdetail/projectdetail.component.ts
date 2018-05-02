import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MasterService } from '../../services/master.service';
import { UserService } from '../../services/user.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.css']
})
export class ProjectdetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
      private router: Router,
      private ms:MasterService,
      private uS:UserService,
      private cS:CookieService) { }

  pid:any;
  theProject:any;

  tasks:any;  

	comments:any;

	uid:any;

  status:any;

  ngOnInit() {
  	this.pid = this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe( params => {
      this.pid = params.id
    });


    this.ms.getProjectDetail(this.pid).subscribe((r:any)=>{
    	this.theProject = r;
    	console.log(r);
    })

    this.ms.getComment(this.pid).subscribe((r:any)=>{
    	this.comments = r;
    })

    this.uid = this.cS.get('uid');

    this.getTaskList(this.pid);

    this.uS.getProjectStatus(this.pid).subscribe((r:any)=>{
      this.status = r;
      console.log(r);
    })

  }
  sending:boolean = false;
  postComment(pid, comment){
  	this.sending = true;
  	this.ms.postComment(pid, comment).subscribe((r:any)=>{
  		this.ms.getComment(this.pid).subscribe((r:any)=>{
	    	this.comments = r;
	    	this.sending = false;
	    })
  	})
  }


  getTaskList(pid){
    this.uS.getTaskList(pid).subscribe((r:any)=>{
      this.tasks = r;
      console.log(r);
    })
  }


}
