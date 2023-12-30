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
    console.log(this.sharedService.getSharedPassword());
    navigator.clipboard.writeText(this.sharedService.getSharedPassword()).then(r => alert("Copied to clipboard!"));
    }
}
