import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService} from '../../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private cS:CookieService, private uS:UserService) { }

  uid:any;

 	projects:any;

  ngOnInit() {
  	this.uid = this.cS.get('uid');
  	this.uS.getProjectList(this.uid).subscribe((r:any)=>{
  		this.projects = r;
  		
  		console.log(r);
  	})
  }

}
