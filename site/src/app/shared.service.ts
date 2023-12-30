import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private sharedPassword = "";
  private sharedLength = 0;

  getSharedPassword(): string {
    return this.sharedPassword;
  }

  setSharedPassword(value: string): void {
    this.sharedPassword = value;
  }
}
