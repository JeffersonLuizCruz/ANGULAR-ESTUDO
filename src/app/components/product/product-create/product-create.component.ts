import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService,
              private router: Router) { }

  createProduct(): void {
    this.productService.showMessage('Operação execultada com sucesso!');
  }

  cancelProduct(): void {
    this.router.navigate(['/products']);
  }

  ngOnInit(): void {}
}
