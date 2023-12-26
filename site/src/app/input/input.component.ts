import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit {
  constructor(private sharedService: SharedService) { }
  placeholder = "";
  ngOnInit() {
    this.randomize();
  }


  randomize(): void{
    this.placeholder = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    this.sharedService.setSharedVariable(this.placeholder);
  }

}
