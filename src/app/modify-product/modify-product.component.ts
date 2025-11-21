import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { GainFocusDirective } from '../directives/gain-focus.directive';

@Component({
  selector: 'app-modify-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GainFocusDirective],
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {
  productForm!: FormGroup; // FormGroup must be initialized
  isEditMode = false;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: [0],
      Product: ['', Validators.required],
      Store: ['', Validators.required],
      Price: [0, Validators.required],
      imageUrl: ['']
    });

    const id = this.route.snapshot.params['id'];

    if (id) {
      this.isEditMode = true;

      this.productService.getProductById(+id).subscribe({
        next: product => this.productForm.patchValue(product),
        error: err => {
          console.error('Failed to load product', err);
          this.errorMessage = 'Failed to load product data.';
        }
      });
    }
  }


  onSubmit(): void {
    if (this.productForm.invalid) return;

    // temporarily enable ProductID so it's included in value
    this.productForm.get('ProductID')?.enable();

    const productData = this.productForm.value;

    if (this.isEditMode) {
      this.productService.updateProduct(productData).subscribe({
        next: () => this.router.navigate(['/products']),
        error: err => console.error('Update failed', err)
      });
    } else {
      this.productService.addProduct(productData).subscribe({
        next: () => this.router.navigate(['/products']),
        error: err => console.error('Add failed', err)
      });
    }

    // re-disable it after
    this.productForm.get('ProductID')?.disable();
  }
}

