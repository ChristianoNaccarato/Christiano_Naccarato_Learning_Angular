import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { App } from './app/app';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { importProvidersFrom } from '@angular/core';
import { InMemoryDataService } from './app/in-memory-data.service';
import {ModifyProductComponent} from './app/modify-product/modify-product.component';

// Use loadComponent for standalone components
const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', loadComponent: () => import('./app/product-list/product-list.component').then(m => m.ProductListComponent) },
  { path: 'products/:id', loadComponent: () => import('./app/product-list-item/product-list-item.component').then(m => m.ProductListItemComponent) },
  { path: 'modify-product', loadComponent: () => import('./app/modify-product/modify-product.component').then(m => m.ModifyProductComponent) },
  { path: 'modify-product/:id', component: ModifyProductComponent },
  { path: '**', loadComponent: () => import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent) }
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 })
    ),
  ],
}).catch((err) => console.error(err));


