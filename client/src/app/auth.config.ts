import { AuthConfig } from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {
  issuer: 'http://localhost:8081/realms/sandbox',
  clientId: 'sandbox-server-openid-client',
  redirectUri: window.location.origin + "/login",
  responseType: 'code',
  scope: 'openid profile email offline_access',
  strictDiscoveryDocumentValidation: true
};
