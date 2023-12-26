import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  placeholder = '3WIAI9I427fHtRH';

  randomize(): void{
    this.placeholder = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

}
