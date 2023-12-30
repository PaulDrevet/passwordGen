import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSliderModule} from "@angular/material/slider";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [
    MatSliderModule,
    FormsModule
  ],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css',
})

export class OptionsComponent {
  sliderValue: number = 10;
}
