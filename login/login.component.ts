import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
      console.log('Redirecting to /admin');
      this.router.navigateByUrl('/admin');
    }
  }

  back() {
    this.router.navigateByUrl('/');
  }
}
