import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  title = 'TechStore';
  categories = signal<Category[]>([]);
  selectedCategory = signal<Category | null>(null);

  displayedProducts = computed(() => {
    const category = this.selectedCategory();
    if (!category) return [];
    return this.productService.getProductsByCategory(category.id);
  });

  private readonly categoryIcons: Record<string, string> = {
    'Smartphones': '📱',
    'Laptops': '💻',
    'Headphones': '🎧',
    'Tablets': '📟',
  };

  constructor(private productService: ProductService) { }

  ngOnInit() {
    const cats = this.productService.getCategories();
    this.categories.set(cats);
    if (cats.length > 0) {
      this.selectedCategory.set(cats[0]);
    }
  }

  selectCategory(category: Category) {
    this.selectedCategory.set(category);
  }

  getCategoryIcon(name: string): string {
    return this.categoryIcons[name] ?? '📦';
  }
}
