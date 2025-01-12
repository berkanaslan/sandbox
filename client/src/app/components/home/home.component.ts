import {Component} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';
import {Ping} from '../../services/ping_service/ping';
import {PingService} from '../../services/ping_service/ping.service';
import {HeaderComponent} from '../header/header.component';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  user: any;
  pingResponse?: Ping;
  isLoading: boolean = false;
  error?: string;

  constructor(private oauthService: OAuthService,
              private pingService: PingService) {
  }

  ngOnInit() {
    this.user = this.oauthService.getIdentityClaims();
  }

  protected ping() {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    this.error = undefined;
    this.pingResponse = undefined;

    this.pingService.ping().subscribe({
      next: (response) => {
        this.pingResponse = response;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.error = error.message;
      }
    });
  }

  protected pingAsOwner() {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    this.error = undefined;
    this.pingResponse = undefined;

    this.pingService.pingAsOwner().subscribe({
      next: (response) => {
        this.pingResponse = response;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.error = error.message;
      }
    });
  }
}
