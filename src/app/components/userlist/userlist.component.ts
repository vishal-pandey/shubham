import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService} from '../../services/user.service';
import { MasterService} from '../../services/master.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private cS:CookieService, private uS:UserService, private mS:MasterService) { }

  uid:any;

 	projects:any;
  users:any;

  status:any= {
  };

  ngOnInit() {
  	// this.uid = this.cS.get('uid');
  	this.mS.getUserList().subscribe((r:any)=>{
  		this.users = r;
  		
  		console.log(r);
  	})

    // for (var user in this.users) {
    //   status['user.userid'] = this.getUserStatus(user.userid);
    // }
    // this.getUserStatus(uid);
  }

  getUserStatus(uid){
    this.mS.getUserStatus(uid).subscribe((r:any)=>{
      console.log(r);
      return r;
    })
  }

}
