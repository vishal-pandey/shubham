import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';




import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';





import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { HeaderComponent } from './components/header/header.component';
import { MasterComponent } from './components/master/master.component';
import { ProjectdetailComponent } from './components/projectdetail/projectdetail.component';
import { MasterService } from './services/master.service';
import { CreateprojectComponent } from './components/createproject/createproject.component';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { UserService } from './services/user.service';
import { UserlistComponent } from './components/userlist/userlist.component';
import { ProjectlistComponent } from './components/projectlist/projectlist.component';
import { EditprojectComponent } from './components/editproject/editproject.component';
import { AddTask } from './components/editproject/editproject.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HeaderComponent,
    MasterComponent,
    ProjectdetailComponent,
    CreateprojectComponent,
    AddtaskComponent,
    UserlistComponent,
    ProjectlistComponent,
    EditprojectComponent,
    AddTask
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTableModule,
    MatMenuModule,
    MatSidenavModule,
    MatExpansionModule,
    MatProgressBarModule,

  ],
  providers: [MasterService, UserService, CookieService],
  bootstrap: [AppComponent],
  entryComponents: [AddTask]
})
export class AppModule { }
