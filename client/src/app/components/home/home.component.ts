import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  user: any;

  constructor(private oauthService: OAuthService) {}

  ngOnInit() {
    this.user = this.oauthService.getIdentityClaims();
  }


  logout() {
    this.oauthService.logOut();
  }
}
