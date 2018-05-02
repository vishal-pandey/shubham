import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private router: Router, private uS:UserService ) { }

  ngOnInit() {
  }


	login(userid, password){
		let user = userid.split("");
		if ((userid === 'u_00000001') || (userid === 'u_00000002') || (userid === 'u_00000003') || (userid === 'u_00000004') || (userid === 'u_00000005') || (userid === 'master') ) {
			if (password === 'abc@123') {
				if (user[0] === 'u') {
					this.router.navigate(["/admin"])
					this.uS.setUserId(userid);	
				}
				else if(user[0] === 'm'){
					this.router.navigate(["/userlist"])
				}
			}
			else{
				alert("Please Enter Correct Password");
			}
		}else{
			alert("Please enter correct user id")
		}
	}

}
