import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import { OnlineStore} from '../Shared/store';

@Component({
  selector: 'app-product-list-item',
  imports: [
    NgForOf,
    NgForOf,],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.css'
})
export class ProductListItemComponent {
  @Input() product?: any;
}
