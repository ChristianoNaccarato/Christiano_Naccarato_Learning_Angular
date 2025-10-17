import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import { OnlineStore} from '../Shared/store';
import {NgIf} from "@angular/common";
import {Products} from "../product-list/product-list.component"
import { NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-product-list-item',
  imports: [
    NgForOf, NgForOf, NgIf, NgOptimizedImage
    ],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.css'
})
export class ProductListItemComponent {
  // Added one-way binding
  @Input() product?: any;
}
