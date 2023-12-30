import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private sharedPassword = "";
  private sharedLength = 10;
  private sharedSpecial = false;
  private sharedNumbers = true;
  private sharedUppercase = true;
  private sharedLowercase = true;

  getSharedPassword(): string {
    return this.sharedPassword;
  }

  setSharedPassword(value: string): void {
    this.sharedPassword = value;
  }

  getSharedLength(): number {
    return this.sharedLength;
  }

  setSharedLength(value: number): void {
    this.sharedLength = value;
  }

  getSharedSpecial(): boolean {
    return this.sharedSpecial;
  }

  setSharedSpecial(value: boolean): void {
    this.sharedSpecial = value;
  }

  getSharedNumbers(): boolean {
    return this.sharedNumbers;
  }

  setSharedNumbers(value: boolean): void {
    this.sharedNumbers = value;
  }

  getSharedUppercase(): boolean {
    return this.sharedUppercase;
  }

  setSharedUppercase(value: boolean): void {
    this.sharedUppercase = value;
  }

  getSharedLowercase(): boolean {
    return this.sharedLowercase;
  }

  setSharedLowercase(value: boolean): void {
    this.sharedLowercase = value;
  }
}
