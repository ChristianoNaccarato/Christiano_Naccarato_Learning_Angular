import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnlineStore} from './Shared/store';
import {NgIf, NgForOf} from "@angular/common";
import {ProductListComponent} from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  imports: [NgIf, NgForOf, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ChristianoNaccaratoLearningAngular');
  firstname: string = "Christiano"
  lastname: string = "Naccarato"

  stores: OnlineStore[] = [
    { id: 1, name: 'Wallmart', url: 'Wallmart.com', hasMobileApp: true, Rating: 4.8 },
    { id: 2, name: 'American Tire', url: 'AmericanTire.com', hasMobileApp: false, Rating: 4.2, },
    { id: 3, name: 'Forest', url: 'Forest.com', hasMobileApp: true, },
    { id: 4, name: 'Pet Food', url: 'PetFood.com', hasMobileApp: false, Rating: 4.9 },
    { id: 5, name: 'Best Clothing', url: 'BestClothing.com', hasMobileApp: true},
    { id: 6, name: 'Worst Buy', url: 'WorstBuy.com', hasMobileApp: false}
  ];
}


