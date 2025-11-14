import {Component, OnInit, signal} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { OnlineStore} from './Shared/store';
import {NgIf, NgForOf} from "@angular/common";
import {ProductListComponent} from './product-list/product-list.component';
import {ProductListItemComponent} from './product-list-item/product-list-item.component';
import {Products} from './product-list/product-list.component';
import {ProductService} from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [NgIf, NgForOf, ProductListComponent, ProductListItemComponent, RouterLinkActive, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('ChristianoNaccaratoLearningAngular');
  // Is the product displayed at the top
  featuredProduct?: Products;
  // Constructor
  constructor(private productService: ProductService) {
  }
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

  // Get an item from an id number
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        if (products.length > 0) {
          this.featuredProduct = products[0];
        }
      },
      error: (err) => console.error('Error fetching products', err)
    });

  }
}


