import { Component } from '@angular/core';
import {MatSliderModule} from "@angular/material/slider";

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [
    MatSliderModule
  ],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent {

}
