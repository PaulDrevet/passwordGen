import {Component, HostListener} from '@angular/core';
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

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if ((event.ctrlKey || event.metaKey) && event.key === 'c') {
      console.log(this.sharedService.getSharedPassword());
      navigator.clipboard.writeText(this.sharedService.getSharedPassword()).then(r => alert("Copied to clipboard!"));
    }
  }

  copy(): void{
    console.log(this.sharedService.getSharedPassword());
    navigator.clipboard.writeText(this.sharedService.getSharedPassword()).then(r => alert("Copied to clipboard!"));
    }
}
