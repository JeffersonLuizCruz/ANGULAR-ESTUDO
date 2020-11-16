import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: 'Galinha M',
    price: 7.50
  }

  constructor(private productService: ProductService,
              private router: Router) { }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Operação execultada com sucesso!');
      this.router.navigate(['/products']);
    })
    
  }

  cancelProduct(): void {
    this.router.navigate(['/products']);
  }

  ngOnInit(): void {}
}
