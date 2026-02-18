import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 16 Pro Max 256GB Black Titanium',
      description: 'The ultimate iPhone with a titanium design, A18 Pro chip, and the best battery life ever on an iPhone.',
      price: 689990,
      rating: 5.0,
      image: 'assets/images/iphone.png',
      images: [
        'assets/images/iphone.png',
        'assets/images/iphone1.png',
        'assets/images/iphone.png'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-titan-123787551/'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra 512GB Titanium Black',
      description: 'Galaxy AI is here. Welcome to the era of mobile AI. With Galaxy S24 Ultra in your hands, you can unleash whole new levels of creativity, productivity and possibility.',
      price: 629990,
      rating: 4.9,
      image: 'assets/images/samsung.png',
      images: [
        'assets/images/samsung.png',
        'assets/images/samsung1.png',
        'assets/images/samsung2.png'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-12-gb-512-gb-chernyi-116043559/'
    },
    {
      id: 3,
      name: 'Apple MacBook Air 13 M3 8GB/256GB Space Grey',
      description: 'MacBook Air sails through work and play — and the M3 chip brings even greater capabilities and advanced AI features to this superportable laptop.',
      price: 519990,
      rating: 5.0,
      image: 'assets/images/macbook.png',
      images: [
        'assets/images/macbook.png',
        'assets/images/macbook1.png',
        'assets/images/macbook2.png'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-8-gb-ssd-256-gb-macos-mrxn3-117302542/'
    },
    {
      id: 4,
      name: 'Sony PlayStation 5 Slim',
      description: 'PlayStation 5 Slim Console. Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio.',
      price: 265990,
      rating: 4.9,
      image: 'assets/images/playstation.png',
      images: [
        'assets/images/playstation.png',
        'assets/images/playstation1.png',
        'assets/images/playstation2.png'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/'
    },
    {
      id: 5,
      name: 'Apple AirPods Pro 2 with USB-C',
      description: 'AirPods Pro feature up to 2x more Active Noise Cancellation, plus Adaptive Transparency, and Personalized Spatial Audio with dynamic head tracking for immersive sound.',
      price: 114990,
      rating: 4.9,
      image: 'assets/images/airpods.png',
      images: [
        'assets/images/airpods.png',
        'assets/images/airpods.png',
        'assets/images/airpods.png'
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-belyi-113677582/'
    },
    {
      id: 6,
      name: 'Dyson Airwrap Multi-styler Complete Long',
      description: 'The only styler to curl, shape and hide flyaways using the Coanda effect - with no extreme heat.',
      price: 299990,
      rating: 4.9,
      image: 'assets/images/dyson.png',
      images: [
        'assets/images/dyson.png',
        'assets/images/dyson1.png',
        'assets/images/dyson2.png'
      ],
      link: 'https://kaspi.kz/shop/p/dyson-hs05-airwrap-complete-long-diffuse-stailer-rozovyi-zolotistyi-110593874/'
    },
    {
      id: 7,
      name: 'Xiaomi Robot Vacuum S10+',
      description: 'Xiaomi Robot Vacuum S10+. 4000Pa powerful suction fan blower. Clean your house in one pass.',
      price: 139990,
      rating: 4.8,
      image: 'assets/images/vacuum.png',
      images: [
        'assets/images/vacuum.png',
        'assets/images/vacuum1.png',
        'assets/images/vacuum2.png'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-s10-belyi-108937691/'
    },
    {
      id: 8,
      name: 'Yandex Station Max with Zigbee',
      description: 'Yandex Station Max with Zigbee. The most powerful smart speaker with Alice. LED display, 65W sound, 4K video support.',
      price: 139990,
      rating: 4.9,
      image: 'assets/images/alisa.png',
      images: [
        'assets/images/alisa.png',
        'assets/images/alisa1.png',
        'assets/images/alisa2.png'
      ],
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-maks-s-zigbee-seryi-109859263/'
    },
    {
      id: 9,
      name: 'Apple iPad Air 13 2024 128GB Space Grey',
      description: 'iPad Air 13-inch. Redesigned with the M2 chip. Serious performance. All-day battery life.',
      price: 389990,
      rating: 5.0,
      image: 'assets/images/ipad.png',
      images: [
        'assets/images/ipad.png',
        'assets/images/ipad1.png',
        'assets/images/ipad2.png'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-13-2024-wi-fi-128gb-seryi-119376662/'
    },
    {
      id: 10,
      name: 'LG 27UL500-W Monitor 4K UHD',
      description: '27-inch Class 4K UHD IPS LED Monitor with HDR10 (27" Diagonal). IPS with sRGB 98%.',
      price: 129990,
      rating: 4.7,
      image: 'assets/images/samsung.png',
      images: [
        'assets/images/samsung.png',
        'assets/images/samsung1.png',
        'assets/images/samsung2.png'
      ],
      link: 'https://kaspi.kz/shop/p/lg-27ul500-w-belyi-100199203/'
    }
  ];
}
