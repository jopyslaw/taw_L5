import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public credentials = {
    login: '',
    password: '',
  };

  public logged?: boolean;
  public logout?: boolean;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  signIn() {
    this.authService.authencitate(this.credentials).subscribe((result) => {
      if (!result) {
        this.logged = false;
      } else {
        this.logout = false;
        this.credentials = {
          login: '',
          password: '',
        };
        this.router.navigate(['/']);
      }
    });
  }
}
