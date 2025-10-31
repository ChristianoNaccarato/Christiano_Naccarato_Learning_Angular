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
export class ModifyProductComponent implements OnInit{
  productForm: FormGroup;
  product: Products | undefined;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private ProductService: ProductService,
    private router: Router
    // Construct the form group
  ){
    this.productForm = this.fb.group({
      Product: ['', Validators.required],
      Store: ['', Validators.required],
      ProductID: ['', Validators.required],
      Price: ['', Validators.required],
      imageUrl: ['']
    });
  }

  // Gets the id and loads it into the form or it will be a blank form
  ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.isEditMode = true;
    this.ProductService.getProductById(+id).subscribe(product => {
      if (product) {
        this.productForm.patchValue(product);
        this.product = product;
        this.productForm.patchValue(product);
      }
    });
  }else {
    this.isEditMode = false;
  }
}
  // Updates the form and redirects to products page
  onSubmit(): void {
    if (this.productForm.valid) {
      const productData = this.productForm.value as Products;

      if (this.isEditMode) {
        this.ProductService.updateProduct(productData).subscribe(() => {
          this.router.navigate(['/products']);
        });
      } else {
        this.ProductService.addProduct(productData).subscribe(() => {
          this.router.navigate(['/products']);
        });
      }
    }
  }

}
