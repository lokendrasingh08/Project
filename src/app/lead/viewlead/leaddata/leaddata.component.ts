import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../../shared/service/http-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-leaddata',
  templateUrl: './leaddata.component.html',
  styleUrls: ['./leaddata.component.css']
})
export class LeaddataComponent implements OnInit {
  isError = false;
  errorMessage = '';
  leadDataForm: any;
  leadId = null;

  constructor(private http: HttpService, private activeRoute: ActivatedRoute) {
    this.activeRoute.paramMap.subscribe((param) => {
      this.leadId = param.get('leadId');
    });
  }

  ngOnInit() {
    this.leadDataForm = new FormGroup({
      name: new FormControl({value: null, disabled: true}),
      mobileNumber: new FormControl({value: null, disabled: true}),
      email: new FormControl({value: null, disabled: true}),
      address: new FormControl({value: null, disabled: true}),
      area: new FormControl({value: null, disabled: true}),
    });
    this.getLeadDataDetail();
  }

  getLeadDataDetail() {
    this.http.get('lead/getById?leadId=' + this.leadId).subscribe( (result) => {
      console.log(result);
      this.leadDataForm.patchValue(result);
    }, error => {
      console.log(error);
    });
  }
}
