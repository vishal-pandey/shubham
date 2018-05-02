import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MasterService } from '../../services/master.service';
import { UserService } from '../../services/user.service';
import { CookieService } from 'ngx-cookie-service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.css']
})
export class EditprojectComponent implements OnInit {

  constructor(private route: ActivatedRoute,
      private router: Router,
      private ms:MasterService,
      private cS:CookieService,
      private uS:UserService,
      public dialog: MatDialog) { }

  pid:any;
  theProject:any;
  
  tasks:any;

	comments:any;

	uid:any;

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



  addTask(pid){
  	let dialogRef = this.dialog.open(AddTask, {
      width: '500px',
      height: '200px',
      data: pid
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getTaskList(this.pid);
    });
  }

  getTaskList(pid){
  	this.uS.getTaskList(pid).subscribe((r:any)=>{
  		this.tasks = r;
  		console.log(r);
  	})
  }


  completeTask(tid){
    this.uS.completeTask(tid).subscribe((r:any)=>{
      if (r == 'success') {
        this.getTaskList(this.pid);
      }
    })
  }

  uncompleteTask(tid){
    this.uS.uncompleteTask(tid).subscribe((r:any)=>{
      if (r == 'success') {
        this.getTaskList(this.pid);
      }
    })
  }

}




@Component({
  selector: 'add-task',
  templateUrl: './add-task.html',
  styleUrls: ['./add-task.css']
})
export class AddTask implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddTask>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    public snackBar: MatSnackBar,
    private uS: UserService
    ) { }

  	
  	ngOnInit(){
  		
  	}

  	addTask(pid, tname){
  		this.uS.addTask(pid, tname).subscribe((r:any)=>{
  			if (r=="success") {
  				this.onNoClick();
  			}
  		})
  	}


  	onNoClick(): void {
	    this.dialogRef.close();
	  }

}