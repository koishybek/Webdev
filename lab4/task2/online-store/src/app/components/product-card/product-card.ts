import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  currentImage: string = '';

  ngOnInit() {
    this.currentImage = this.product.images[0] || this.product.image;
  }

  share(platform: 'whatsapp' | 'telegram') {
    const productUrl = encodeURIComponent(this.product.link);
    
    let url = '';
    if (platform === 'whatsapp') {
      url = `https://wa.me/?text=${encodeURIComponent(`Check out this product: ${this.product.link}`)}`;
    } else {
      url = `https://t.me/share/url?url=${productUrl}&text=${encodeURIComponent(this.product.name)}`;
    }
    window.open(url, '_blank');
  }

  updateImage(image: string) {
    this.currentImage = image;
  }
}
