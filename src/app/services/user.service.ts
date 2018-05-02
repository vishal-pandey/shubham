import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class UserService {

  constructor(private http:HttpClient , private cS: CookieService) { }

  addProject(pname,inchargename,inchargecontact,startdate,enddate,notask,userid){
  	let tosent1 = new FormData();
  	tosent1.append('pname',pname);
  	tosent1.append('inchargename',inchargename);
  	tosent1.append('inchargecontact',inchargecontact);
  	tosent1.append('startdate',startdate);
  	tosent1.append('enddate',enddate);
    tosent1.append('notask',notask);
  	tosent1.append('userid',userid);
  	return this.http.post("https://shubhamapi.vishalpandey.xyz/user/addproject.php", tosent1, {responseType: 'text'});
  }

  setUserId(id){
  	this.cS.set('uid',id,360000,"/");
  }
  getUserId(){
    return this.cS.get('uid');
  }


  getProjectList(userid){
    let tosent1 = new FormData();
    tosent1.append('userid',userid);
    return this.http.post("https://shubhamapi.vishalpandey.xyz/user/getprojectlist.php", tosent1, {responseType: 'json'});
  }

  addTask(pid, tname){
    let tosent1 = new FormData();
    tosent1.append('pid',pid);
    tosent1.append('tname',tname);
    return this.http.post("https://shubhamapi.vishalpandey.xyz/user/addtask.php", tosent1, {responseType: 'text'});
  }

  getTaskList(pid){
    let tosent1 = new FormData();
    tosent1.append('pid',pid);
    return this.http.post("https://shubhamapi.vishalpandey.xyz/user/gettasklist.php", tosent1, {responseType: 'json'});
  }

  completeTask(tid){
   let tosent1 = new FormData();
    tosent1.append('tid',tid);
    return this.http.post("https://shubhamapi.vishalpandey.xyz/user/completetask.php", tosent1, {responseType: 'text'}); 
  }

  uncompleteTask(tid){
   let tosent1 = new FormData();
    tosent1.append('tid',tid);
    return this.http.post("https://shubhamapi.vishalpandey.xyz/user/uncompletetask.php", tosent1, {responseType: 'text'}); 
  }


  getProjectStatus(pid){
    let tosent1 = new FormData();
    tosent1.append('pid',pid);
    return this.http.post("https://shubhamapi.vishalpandey.xyz/user/getprojectstatus.php", tosent1, {responseType: 'json'}); 
  }

}
