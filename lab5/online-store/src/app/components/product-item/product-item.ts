import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent {
  product = input.required<Product>();
  onDelete = output<number>();
  
  // Локальное состояние для лайков чтобы обновлять мгновенно
  likesCount = signal<number>(0);
  isLiked = signal<boolean>(false);

  constructor() {
    // Инициализируем лайки из пропсов
    // Примечание: В реальном приложении мы бы обновляли это через сервис
    setTimeout(() => {
      this.likesCount.set(this.product().likes);
    }, 0);
  }

  like() {
    this.likesCount.update(v => v + 1);
    this.isLiked.set(true);
    // Сбрасываем флаг анимации через секунду
    setTimeout(() => this.isLiked.set(false), 1000);
  }

  delete() {
    if (confirm(`Are you sure you want to remove "${this.product().name}"?`)) {
      this.onDelete.emit(this.product().id);
    }
  }

  share(platform: 'whatsapp' | 'telegram') {
    const text = `Check out this ${this.product().name}!`;
    const url = this.product().link;
    
    let shareUrl = '';
    if (platform === 'whatsapp') {
      shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
    } else {
      shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    }
    
    window.open(shareUrl, '_blank');
  }
}
