import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class MasterService {

  constructor(private http:HttpClient) { }

  getUser(){
  	return this.http.get("https://shubhamapi.vishalpandey.xyz/master/getuser.php");
  }

  getComment(pid){
  	let tosent1 = new FormData();
    tosent1.append('pid',pid);  
  	return this.http.post("https://shubhamapi.vishalpandey.xyz/master/getcomments.php", tosent1);
  }

  postComment(pid, comment){
  	let tosent1 = new FormData();
    tosent1.append('pid',pid);
    tosent1.append('comment',comment);

  	return this.http.post("https://shubhamapi.vishalpandey.xyz/master/addcomment.php", tosent1, {responseType: 'text'});
  }

  getUserList(){
    return this.http.get("https://shubhamapi.vishalpandey.xyz/master/getuserlist.php"); 
  }

  getProjectDetail(pid){
    let tosent1 = new FormData();
    tosent1.append('pid',pid);
    return this.http.post("https://shubhamapi.vishalpandey.xyz/master/getprojectdetail.php", tosent1, {responseType: 'json'});
  }

  getUserStatus(userid){
    let tosent1 = new FormData();
    tosent1.append('userid',userid);
    return this.http.post("https://shubhamapi.vishalpandey.xyz/user/getuserstatus.php", tosent1, {responseType: 'json'});
  }

}
