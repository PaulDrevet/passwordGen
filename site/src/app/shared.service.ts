import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private sharedVariable = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  getSharedVariable(): string {
    return this.sharedVariable;
  }

  setSharedVariable(value: string): void {
    this.sharedVariable = value;
  }
}
