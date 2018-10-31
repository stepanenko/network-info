import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  isValidUser = true;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.createLoginForm();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const getValue = prop => this.loginForm.controls[prop].value;
    const emailInput = getValue('email');
    const passwordInput = getValue('password');
    const user = JSON.parse(localStorage.getItem('user'));
    this.isValidUser = emailInput === user.email && passwordInput === user.password;
    this.isValidUser && this.login(user);
  }

  login(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.router.navigate([this.returnUrl]);
  }

}
