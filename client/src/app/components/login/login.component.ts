import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../../auth.config';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router,
              private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.oauthService.hasValidAccessToken()) {
        this.router.navigate(['/home']);
      }
    });
  }

  login() {
    this.oauthService.initCodeFlow();

    this.oauthService.events.subscribe(event => {
      if (event.type === 'token_received') {
        this.router.navigate(['/home']);
      }
    });
  }
}
