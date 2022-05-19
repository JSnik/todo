import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  sendForm = this.fb.group({
    name: [],
    password: [],
  });

  ngOnInit(): void {
  }


  submit(): void {
    if (this.sendForm.value.name === 'admin' && this.sendForm.value.password === 'admin') {
      localStorage.setItem('token', 'token');
    }
  }
}
