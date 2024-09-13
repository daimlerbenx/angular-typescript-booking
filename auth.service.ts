import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Admin users
  private admin: any[] = [
    {
      id: 1,
      name: 'admin',
      username: 'a',
      password: 'a',
    },
  ];

  // Regular users
  private users: any[] = [
    {
      id: 1,
      name: 'User A',
      username: 'aa',
      password: 'aa',
    },
    {
      id: 2,
      name: 'User B',
      username: 'aaa',
      password: 'aaa',
    },
  ];

  private session: any = null;

  constructor(private router: Router) {
    if (typeof window !== 'undefined') {
      const storedSession = localStorage.getItem('session');
      if (storedSession) {
        this.session = JSON.parse(storedSession);
      }
    }
  }

  // Updated login method for both admin and user
  login(username: string, password: string) {
    // Check if the user is an admin
    const adminUser = this.admin.find(
      (u) => u.username === username && u.password === password
    );

    if (adminUser) {
      console.log('Admin login successful', adminUser);
      this.session = { ...adminUser, role: 'admin' };
      if (typeof window !== 'undefined') {
        localStorage.setItem('session', JSON.stringify(this.session));
      }
      this.router.navigateByUrl('/admin'); // Redirect to admin page
      return adminUser;
    }

    // Check if the user is a regular user
    const normalUser = this.users.find(
      (u) => u.username === username && u.password === password
    );

    if (normalUser) {
      console.log('User login successful', normalUser);
      this.session = { ...normalUser, role: 'user' };
      if (typeof window !== 'undefined') {
        localStorage.setItem('session', JSON.stringify(this.session));
      }
      this.router.navigateByUrl('/user-dashboard'); // Redirect to user dashboard
      return normalUser;
    }

    console.log('Login failed');
    return null;
  }

  logout() {
    this.session = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('session');
    }
    this.router.navigateByUrl('/login'); // Redirect to login page after logout
  }

  isAuthenticated(): boolean {
    return !!this.session;
  }

  isAdmin(): boolean {
    return this.session?.role === 'admin';
  }

  isUser(): boolean {
    return this.session?.role === 'user';
  }
}
