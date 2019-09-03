import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../shared/service/http-service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-viewlead',
  templateUrl: './viewlead.component.html',
  styleUrls: ['./viewlead.component.css']
})
export class ViewleadComponent implements OnInit {
  dataSource: any;
  displayedColumns = ['leadId', 'name', 'mobileNumber', 'email', 'address', 'area', 'action'];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getLeadData();
  }

  getLeadData() {
    this.http.get('lead/getAll').subscribe( (result: any) => {
      console.log(result);
      this.dataSource = new MatTableDataSource(result);
    }, error => {
      console.log(error);
    });
  }

}
