import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // Add your authentication logic here
    const isAuthenticated = true; // Replace with real authentication check

    if (!isAuthenticated) {
      this.router.navigate(['/profile']);
      return false;
    }
    return true;
  }
}
