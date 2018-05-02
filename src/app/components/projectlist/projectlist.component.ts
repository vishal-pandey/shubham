import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService} from '../../services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {

  constructor(private cS:CookieService, private uS:UserService, private router: Router,private route: ActivatedRoute,) { }

  uid:any;

 	projects:any;



  ngOnInit() {


    this.uid = this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe( params => {
      this.uid = params.id
    });



  	
  	this.uS.getProjectList(this.uid).subscribe((r:any)=>{
  		this.projects = r;
  		
  		console.log(r);
  	})
  }

}
