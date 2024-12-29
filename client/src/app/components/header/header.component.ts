import {Component} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user: any;

  constructor(private oauthService: OAuthService) {
    this.user = this.oauthService.getIdentityClaims();
  }

  logout() {
    this.oauthService.logOut();
  }
}
