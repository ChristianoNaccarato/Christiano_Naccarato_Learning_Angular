import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {ProductListItemComponent} from './app/product-list-item/product-list-item.component';
import {ProductListComponent} from "./app/product-list/product-list.component";
import {ModifyProductComponent} from './app/modify-product/modify-product.component';
import {PageNotFoundComponent} from './app/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'products', component: ProductListComponent},
  {path:'products/:id', component: ProductListItemComponent},
  {path:'modify-product', component: ModifyProductComponent},
  {path:'**', component: PageNotFoundComponent}
]
bootstrapApplication(App, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
