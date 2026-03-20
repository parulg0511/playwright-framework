import { APIRequestContext } from '@playwright/test';

export class ApiHelper {
  constructor(private request: APIRequestContext) {}

  async login(email: string, password: string) {
    const response = await this.request.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_API_KEY}`,
      {
        data: { email, password, returnSecureToken: true }
      }
    );

    const body = await response.json();
    return body.idToken; // Firebase token
  }
}