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

  special : string = "!@#$%^&*()_+{}|:<>?~";
  numbers : string = "0123456789";
  uppercase : string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  lowercase : string = "abcdefghijklmnopqrstuvwxyz";

  ngOnInit() {
    this.randomize();
  }

  randomize(): void{
    let length : number = this.sharedService.getSharedLength();
    let s : boolean = this.sharedService.getSharedSpecial();
    let n : boolean = this.sharedService.getSharedNumbers();
    let u : boolean = this.sharedService.getSharedUppercase();
    let l : boolean = this.sharedService.getSharedLowercase();

    let possible : string = "";
    if(s) possible += this.special;
    if(n) possible += this.numbers;
    if(u) possible += this.uppercase;
    if(l) possible += this.lowercase;

    let newPass : string = "";

    console.log(length);

    for (let i = 0; i < length; i++) {
      newPass += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    this.placeholder = newPass;
    this.sharedService.setSharedPassword(this.placeholder);
  }
}
