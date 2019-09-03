import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpService} from '../../shared/service/http-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: any;
  isLogin: any;

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null)
    });
  }

  handleLogin(value) {
    console.log(value);
    this.http.post('user/signin', value).subscribe( (result) => {
        console.log(result);
        if (result) {
          this.router.navigate(['/lead/view-leads']);
        }
      }, error => {
        console.log(error);
      });
  }
}
