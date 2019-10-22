import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoadSpinnerComponent } from './libraries/components/load-spinner/load-spinner.component';
import { LoadSpinnerInterceptor } from './libraries/interceptors/loadspinner.interceptor';
// import { SnackBarService } from './libraries/services/snackBar.service';


import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,MatRadioModule,MatDatepickerModule,MatNativeDateModule
} from '@angular/material';
import { UserDBDataComponent } from './user-dbdata/user-dbdata.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EventsComponent } from './events/events.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    LoadSpinnerComponent,
    UserDBDataComponent,
    WelcomeComponent,
    EventsComponent

  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule, FormsModule, ReactiveFormsModule, FlexLayoutModule,MatRadioModule,MatDatepickerModule,MatNativeDateModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadSpinnerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
