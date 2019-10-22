import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatDividerModule, MatGridListModule, MatRadioModule } from '@angular/material';
import { DashboardComponent } from './dashboard.component';
import { DashBoardRoutingModule } from './dash-board-routing';

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
} from '@angular/material';

@NgModule({
  declarations: [DashboardComponent],
  imports: [

    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatRadioModule,
    FlexLayoutModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    MatListModule,
    MatIconModule,
    DashBoardRoutingModule,
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
  ]
})
export class DashBoardModule {
 
  
    
  
 }
