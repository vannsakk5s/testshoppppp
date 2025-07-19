import { Component } from '@angular/core';
import { AdsComponent } from '../ads/ads.component';
import { ProductComponent } from '../product/product.component';
import { CopyrightComponent } from '../copyright/copyright.component';

@Component({
  selector: 'app-home',
  imports: [AdsComponent, ProductComponent, CopyrightComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
