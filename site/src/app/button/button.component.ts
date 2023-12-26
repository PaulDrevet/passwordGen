import { Component } from '@angular/core';
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  constructor(private sharedService: SharedService) { }

  copy(): void{
    console.log(this.sharedService.getSharedVariable());
    navigator.clipboard.writeText(this.sharedService.getSharedVariable()).then(r => alert("Copied to clipboard!"));
    }
}
