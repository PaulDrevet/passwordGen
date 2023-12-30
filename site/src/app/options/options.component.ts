import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSliderModule} from "@angular/material/slider";
import {FormsModule} from "@angular/forms";
import {SharedService} from "../shared.service";
import {MatCheckboxModule} from "@angular/material/checkbox";

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [
    MatSliderModule,
    FormsModule,
    MatCheckboxModule
  ],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css',
})

export class OptionsComponent {
  sliderValue: number = 10;

  special: boolean = false;
  numbers: boolean = true;
  uppercase: boolean = true;
  lowercase : boolean = true;

  constructor(private sharedService: SharedService) { }

  onSliderChange() {
    console.log(this.sliderValue)
    this.sharedService.setSharedLength(this.sliderValue);
  }

  onSpecialChange() {
    this.sharedService.setSharedSpecial(this.special);
  }

  onNumbersChange() {
    this.sharedService.setSharedNumbers(this.numbers);
  }

  onUppercaseChange() {
    this.sharedService.setSharedUppercase(this.uppercase);
  }

  onLowercaseChange() {
    this.sharedService.setSharedLowercase(this.lowercase);
  }

}
