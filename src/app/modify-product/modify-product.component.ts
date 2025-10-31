import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {Products} from '../product-list/product-list.component';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-modify-product',
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './modify-product.component.html',
  styleUrl: './modify-product.component.css'
})
export class ModifyProductComponent {
  productForm: FormGroup;
  product: Products | undefined;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private ProductService: ProductService,
    private router: Router
  ){
    this.productForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      url: ['', Validators.required],
      hasMobileApp: [false],
      Rating: ['']
    });


  }

}
