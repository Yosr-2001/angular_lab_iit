import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MemberFormComponent } from './member-form/member-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TemplateComponent } from './template/template.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolsComponent } from './tools/tools.component';
import { ArticlesComponent } from './articles/articles.component';
import { EventsComponent } from './events/events.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ModalEventComponent } from './modal-event/modal-event.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EventDetailsComponent } from './event-details/event-details.component';
import { ModalPubComponent } from './modal-pub/modal-pub.component';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './login/login.component';


import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from './environnements';
 ;
@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,

    MemberFormComponent,
    ConfirmDialogComponent,
    TemplateComponent,
    DashboardComponent,
    ToolsComponent,
    ArticlesComponent,
    EventsComponent,
    ModalEventComponent,
    EventDetailsComponent,
    ModalPubComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,   
    MatFormFieldModule, MatSelectModule,   
     AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
