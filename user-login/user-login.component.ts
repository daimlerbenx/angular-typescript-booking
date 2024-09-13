import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  form!: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const user = this.authService.login(
      this.form.value.username,
      this.form.value.password
    );

    if (!user) {
      alert('Invalid username or password');
    } else {
      console.log('Redirecting to /user');
      this.router.navigateByUrl('/user');
    }
  }

  back() {
    this.router.navigateByUrl('/');
  }
}
