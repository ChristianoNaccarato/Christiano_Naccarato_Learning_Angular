import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { OnlineStore} from '../Shared/store';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb():{ products: OnlineStore[] } {

    const products :OnlineStore[] = [
      { id: 1, name: 'Wallmart', url: 'Wallmart.com', hasMobileApp: true, Rating: 4.8 },
      { id: 2, name: 'American Tire', url: 'AmericanTire.com', hasMobileApp: false, Rating: 4.2, },
      { id: 3, name: 'Forest', url: 'Forest.com', hasMobileApp: true, },
      { id: 4, name: 'Pet Food', url: 'PetFood.com', hasMobileApp: false, Rating: 4.9 },
      { id: 5, name: 'Best Clothing', url: 'BestClothing.com', hasMobileApp: true},
      { id: 6, name: 'Worst Buy', url: 'WorstBuy.com', hasMobileApp: false}
    ];
    return { products };
  }
}
