import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {ProductListItemComponent} from './app/product-list-item/product-list-item.component';
import {ProductListComponent} from "./app/product-list/product-list.component";


const routes: Routes = [
  {path:'products', component: ProductListComponent},
  {path:'products/:id', component: ProductListItemComponent}
]
bootstrapApplication(App, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
