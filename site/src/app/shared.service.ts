import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private sharedVariable = "";

  getSharedVariable(): string {
    return this.sharedVariable;
  }

  setSharedVariable(value: string): void {
    this.sharedVariable = value;
  }
}
