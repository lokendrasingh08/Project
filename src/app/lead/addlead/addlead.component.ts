import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../shared/service/http-service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-addlead',
  templateUrl: './addlead.component.html',
  styleUrls: ['./addlead.component.css']
})
export class AddleadComponent implements OnInit {
  isError = false;
  errorMessage = '';
  addLeadForm: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.addLeadForm = new FormGroup({
      name: new FormControl(null),
      mobileNumber: new FormControl(null),
      email: new FormControl(null),
      address: new FormControl(null),
      area: new FormControl(null),
    });
  }

  addLeadData(value) {
    console.log(value);
    this.http.post('lead/add', value).subscribe( (result) => {
      console.log(result);
      this.addLeadForm.reset();
    }, error => {
      console.log(error);
    });
  }

}
