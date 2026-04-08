import { Component, input, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  productsInput = input.required<Product[]>({ alias: 'products' });
  filteredProducts = signal<Product[]>([]);

  constructor() {
    // Синхронизируем входные данные с локальным сигналом для возможности удаления
    effect(() => {
      this.filteredProducts.set([...this.productsInput()]);
    }, { allowSignalWrites: true });
  }

  handleRemove(productId: number) {
    this.filteredProducts.set(
      this.filteredProducts().filter(p => p.id !== productId)
    );
  }
}
