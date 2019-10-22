import { Component, OnInit, ViewChild,DoCheck } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { UserDetailsService } from '../user-details/userdetails.service';
import { IUser } from '.././libraries/models/user.model';
import { SnackBarService } from '../libraries/services/snackBar.service';
@Component({
  selector: 'app-user-dbdata',
  templateUrl: './user-dbdata.component.html',
  styleUrls: ['./user-dbdata.component.css']
})

export class UserDBDataComponent implements OnInit,DoCheck {
  displayedColumns: string[] = ['FullName', 'Adress', 'Email', 'EnterMessage', 'PhoneNumber'];
  iusermodel: IUser[];
  elementData: IUser[];
  dataSource: any;

  constructor(private dbdata: UserDetailsService, public snackbarObj: SnackBarService) {

    this.dbdata
      .getUserInfo()
      .subscribe(response => {
        this.elementData = response;
        console.log('DATA from Springboot',this.elementData);
        console.log('After Subscribe in Component', this.snackbarObj.openSnackBar(' Successfully pulled out data from DB', ''))
      },
        (error) => console.log('Yooo DB closed I guess', this.snackbarObj.openSnackBar('Unble to Pull Data from DB', 'Start MongoDB Server'))
      );
  }

  ngOnInit() {
    this.iusermodel = this.elementData;
    console.log('ng on init data ',this.iusermodel);
  }
  ngDoCheck(){

   
  };

}