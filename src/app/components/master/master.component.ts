import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor(private ms:MasterService) { }

  ngOnInit() {
  	this.ms.getUser().subscribe((r:any)=>{
  		this.masterUser = r;
  	})
  }

  count(array){
  	let i = 0;
  	for (var x in array) {
  		i = i + 1;
  	}
  	return i;
  }

  masterUser:any;

  projects={
		"totalProj": "7",
		"completedProj": "2",
		"haltedProj": "2",
		"ongoingProj": "3",
	}

	projectList=[
		{
			"id": "p01",
			"pname": "Project 1",
			"sdate": "01/01/2018",
			"edate": "01/06/2018",
			"tasks": [
				{
					"name": "Task1",
					"progress": "50"
				},
				{
					"name": "Task2",
					"progress": "60"
				},
				{
					"name": "Task3",
					"progress": "70"
				},
				{
					"name": "Task4",
					"progress": "80"
				},
				{
					"name": "Task5",
					"progress": "90"
				},
			],
			"pIncharge": "User 1",
			"iContact": "+91-9818630411",
			"pImages":[
				"http://cichub.org/wp-content/uploads/2015/12/project-manager-roll.jpg",
				"https://www.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/02/28/Photos/Processed/modi-kfIC--621x414@LiveMint.jpg",
			]
		},
		{
			"id": "p02",
			"pname": "Project 2",
			"sdate": "01/01/2018",
			"edate": "01/06/2018",
			"tasks": [
				{
					"name": "Task1",
					"progress": "50"
				},
				{
					"name": "Task2",
					"progress": "60"
				},
				{
					"name": "Task3",
					"progress": "70"
				},
				{
					"name": "Task4",
					"progress": "80"
				},
				{
					"name": "Task5",
					"progress": "90"
				},
			],
			"pIncharge": "User 2",
			"iContact": "+91-9818630411",
			"pImages":[
				"http://cichub.org/wp-content/uploads/2015/12/project-manager-roll.jpg",
				"https://www.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/02/28/Photos/Processed/modi-kfIC--621x414@LiveMint.jpg",
			]
		},
		{
			"id": "p03",
			"pname": "Project 3",
			"sdate": "01/01/2018",
			"edate": "01/06/2018",
			"tasks": [
				{
					"name": "Task1",
					"progress": "50"
				},
				{
					"name": "Task2",
					"progress": "60"
				},
				{
					"name": "Task3",
					"progress": "70"
				},
				{
					"name": "Task4",
					"progress": "80"
				},
				{
					"name": "Task5",
					"progress": "90"
				},
			],
			"pIncharge": "User 3",
			"iContact": "+91-9818630411",
			"pImages":[
				"http://cichub.org/wp-content/uploads/2015/12/project-manager-roll.jpg",
				"https://www.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/02/28/Photos/Processed/modi-kfIC--621x414@LiveMint.jpg",
			]
		},
		{
			"id": "p04",
			"pname": "Project 4",
			"sdate": "01/01/2018",
			"edate": "01/06/2018",
			"tasks": [
				{
					"name": "Task1",
					"progress": "50"
				},
				{
					"name": "Task2",
					"progress": "60"
				},
				{
					"name": "Task3",
					"progress": "70"
				},
				{
					"name": "Task4",
					"progress": "80"
				},
				{
					"name": "Task5",
					"progress": "90"
				},
			],
			"pIncharge": "User 4",
			"iContact": "+91-9818630411",
			"pImages":[
				"http://cichub.org/wp-content/uploads/2015/12/project-manager-roll.jpg",
				"https://www.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/02/28/Photos/Processed/modi-kfIC--621x414@LiveMint.jpg",
			]
		},
		{
			"id": "p05",
			"pname": "Project 5",
			"sdate": "01/01/2018",
			"edate": "01/06/2018",
			"tasks": [
				{
					"name": "Task1",
					"progress": "50"
				},
				{
					"name": "Task2",
					"progress": "60"
				},
				{
					"name": "Task3",
					"progress": "70"
				},
				{
					"name": "Task4",
					"progress": "80"
				},
				{
					"name": "Task5",
					"progress": "90"
				},
			],
			"pIncharge": "User 5",
			"iContact": "+91-9818630411",
			"pImages":[
				"http://cichub.org/wp-content/uploads/2015/12/project-manager-roll.jpg",
				"https://www.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/02/28/Photos/Processed/modi-kfIC--621x414@LiveMint.jpg",
			]
		},
		{
			"id": "p06",
			"pname": "Project 6",
			"sdate": "01/01/2018",
			"edate": "01/06/2018",
			"tasks": [
				{
					"name": "Task1",
					"progress": "50"
				},
				{
					"name": "Task2",
					"progress": "60"
				},
				{
					"name": "Task3",
					"progress": "70"
				},
				{
					"name": "Task4",
					"progress": "80"
				},
				{
					"name": "Task5",
					"progress": "90"
				},
			],
			"pIncharge": "User 6",
			"iContact": "+91-9818630411",
			"pImages":[
				"http://cichub.org/wp-content/uploads/2015/12/project-manager-roll.jpg",
				"https://www.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/02/28/Photos/Processed/modi-kfIC--621x414@LiveMint.jpg",
			]
		},
		{
			"id": "p07",
			"pname": "Project 7",
			"sdate": "01/01/2018",
			"edate": "01/06/2018",
			"tasks": [
				{
					"name": "Task1",
					"progress": "50"
				},
				{
					"name": "Task2",
					"progress": "60"
				},
				{
					"name": "Task3",
					"progress": "70"
				},
				{
					"name": "Task4",
					"progress": "80"
				},
				{
					"name": "Task5",
					"progress": "90"
				},
			],
			"pIncharge": "User 7",
			"iContact": "+91-9818630411",
			"pImages":[
				"http://cichub.org/wp-content/uploads/2015/12/project-manager-roll.jpg",
				"https://www.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/02/28/Photos/Processed/modi-kfIC--621x414@LiveMint.jpg",
			]
		},
	]

}
