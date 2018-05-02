import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AdminComponent} from './components/admin/admin.component';
import {MasterComponent} from './components/master/master.component';
import {ProjectdetailComponent} from './components/projectdetail/projectdetail.component';
import {CreateprojectComponent} from './components/createproject/createproject.component';
import {AddtaskComponent} from './components/addtask/addtask.component';
import {UserlistComponent} from './components/userlist/userlist.component';
import {ProjectlistComponent} from './components/projectlist/projectlist.component';
import {EditprojectComponent} from './components/editproject/editproject.component';


const routes: Routes = [
	{
		path: '',
		component: LoginComponent
	},
	{
		path: 'admin',
		component: AdminComponent
	},
	{
		path: 'master',
		component: MasterComponent
	},
	{
		path: 'project',
		component: ProjectdetailComponent
	},
	{
		path: 'project/:id',
		component: ProjectdetailComponent
	},
	{
		path: 'createproject',
		component: CreateprojectComponent
	},
	{
		path: 'addtask',
		component: AddtaskComponent
	},
	{
		path: 'userlist',
		component: UserlistComponent
	},
	{
		path: 'projectlist',
		component: ProjectlistComponent
	},
	{
		path: 'projectlist/:id',
		component: ProjectlistComponent
	},
	{
		path: 'editproject',
		component: EditprojectComponent
	},
	{
		path: 'editproject/:id',
		component: EditprojectComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
