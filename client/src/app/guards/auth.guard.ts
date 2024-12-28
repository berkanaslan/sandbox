import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

export const authGuard = () => {
  const oauthService = inject(OAuthService);
  const router = inject(Router);

  if (oauthService.hasValidAccessToken() && oauthService.getAccessTokenExpiration() > Date.now()) {
    return true;
  }

  return router.createUrlTree(['/login']);
}; 