import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private categories: Category[] = [
        { id: 1, name: 'Smartphones' },
        { id: 2, name: 'Laptops' },
        { id: 3, name: 'Headphones' },
        { id: 4, name: 'Tablets' }
    ];

    private products: Product[] = [
        {
            id: 1,
            categoryId: 1,
            name: 'Apple iPhone 16 Pro Max 256GB Black Titanium',
            description: 'The ultimate iPhone with a titanium design, A18 Pro chip, and the best battery life ever on an iPhone.',
            price: 689990,
            rating: 5.0,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h92/h71/87295415713822.jpg?format=gallery-medium',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h92/h71/87295415713822.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h14/h94/87295415779358.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-titan-123787551/'
        },
        {
            id: 2,
            categoryId: 1,
            name: 'Samsung Galaxy S24 Ultra 12GB/512GB Titanium Black',
            description: 'Galaxy AI is here. Welcome to the era of mobile AI. With Galaxy S24 Ultra in your hands, you can unleash whole new levels of creativity.',
            price: 629990,
            rating: 4.9,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h44/h30/84919131930654.jpg?format=gallery-medium',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h44/h30/84919131930654.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h99/h55/84919132061726.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-12-gb-512-gb-chernyi-116043559/'
        },
        {
            id: 3,
            categoryId: 1,
            name: 'Xiaomi 14 Ultra 16GB/512GB Black',
            description: 'Leica Summilux optical lens. Snapdragon 8 Gen 3. WQHD+ dynamic 1-120Hz AMOLED.',
            price: 599990,
            rating: 4.8,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h5b/h6c/85732152344606.jpg?format=gallery-medium',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h5b/h6c/85732152344606.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/xiaomi-14-ultra-16-gb-512-gb-chernyi-118491986/'
        },
        {
            id: 4,
            categoryId: 1,
            name: 'Google Pixel 8 Pro 12GB/128GB Obsidian',
            description: 'The all-pro phone engineered by Google. It s sleek, sophisticated, and powerful.',
            price: 365000,
            rating: 4.7,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h0d/h2d/84084323631134.jpg?format=gallery-medium',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h0d/h2d/84084323631134.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/google-pixel-8-pro-12-gb-128-gb-chernyi-113543136/'
        },
        {
            id: 5,
            categoryId: 1,
            name: 'OnePlus 12 16GB/512GB Flowy Emerald',
            description: 'Smooth Beyond Belief. Snapdragon 8 Gen 3. 2K 120Hz ProXDR display. 50MP triple camera system.',
            price: 345000,
            rating: 4.9,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h97/hbc/84812328730654.jpg?format=gallery-medium',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h97/hbc/84812328730654.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/oneplus-12-16-gb-512-gb-zelenyi-115850989/'
        },
        {
            id: 6,
            categoryId: 2,
            name: 'Apple MacBook Air 13 M3 8GB/256GB Space Grey',
            description: 'MacBook Air sails through work and play — and the M3 chip brings even greater capabilities.',
            price: 519990,
            rating: 5.0,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h65/h41/85428848721950.jpg?format=gallery-medium',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h65/h41/85428848721950.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-8-gb-ssd-256-gb-macos-mrxn3-117302542/'
        },
        {
            id: 7,
            categoryId: 2,
            name: 'ASUS ROG Strix G16 G614JV Eclipse Gray',
            description: 'Power up your play. With the Intel Core i7-13650HX processor and NVIDIA GeForce RTX 4060 GPU.',
            price: 649000,
            rating: 4.9,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h89/he4/80948512129054.jpg?format=gallery-medium',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h89/he4/80948512129054.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-g614jv-n3106-90nr0c61-m006m0-seryi-110511136/'
        },
        {
            id: 8,
            categoryId: 2,
            name: 'Lenovo ThinkPad E16 Gen 1 Graphite Black',
            description: 'Reliability and security for your business. Large 16" display and powerful performance.',
            price: 385000,
            rating: 4.8,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h97/hc8/82823620984862.jpg?format=gallery-medium',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h97/hc8/82823620984862.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/lenovo-thinkpad-e16-gen-1-21jn002drz-chernyi-112467383/'
        },
        {
            id: 9,
            categoryId: 2,
            name: 'HP Pavilion 15-eh3021ci Blue',
            description: 'AMD Ryzen 5 processor. Compact design and long battery life. Ideal for students and professionals.',
            price: 295000,
            rating: 4.7,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h7d/h95/82877911629854.jpg?format=gallery-medium',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h7d/h95/82877911629854.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/hp-pavilion-15-eh3021ci-8l535ea-sinii-112613534/'
        },
        {
            id: 10,
            categoryId: 2,
            name: 'Acer Nitro 5 AN515-58 Black',
            description: 'Intel Core i5-12500H. RTX 3050. 144Hz display. High-performance gaming laptop.',
            price: 369000,
            rating: 4.8,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h57/ha0/64405903081502.jpg?format=gallery-medium',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h57/ha0/64405903081502.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-58-nh-qfjer-004-chernyi-106511394/'
        },
        {
            id: 11,
            categoryId: 3,
            name: 'Apple AirPods Pro 2 with USB-C',
            description: 'Active Noise Cancellation. Adaptive Transparency. Personalized Spatial Audio.',
            price: 114990,
            rating: 4.9,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-belyi-113677582/'
        },
        {
            id: 12,
            categoryId: 3,
            name: 'Sony WH-1000XM5 Black',
            description: 'Industry-leading noise cancellation. Exceptional sound quality and call performance.',
            price: 165000,
            rating: 5.0,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h6a/h7d/64450395799582.jpg?format=gallery-medium',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h6a/h7d/64450395799582.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105221406/'
        },
        {
            id: 13,
            categoryId: 3,
            name: 'Samsung Galaxy Buds3 Silver',
            description: 'Iconic design with a comfortable fit. Galaxy AI powered sound optimization.',
            price: 65000,
            rating: 4.7,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h59/hd7/86544066052126.jpg?format=gallery-medium',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h59/hd7/86544066052126.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds3-seryi-121407357/'
        },
        {
            id: 14,
            categoryId: 3,
            name: 'JBL Tune 770NC Black',
            description: 'Adaptive Noise Cancelling with Smart Ambient. Up to 70 hours of battery life.',
            price: 49000,
            rating: 4.8,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h3d/h33/83020626395166.jpg?format=gallery-medium',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h3d/h33/83020626395166.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/jbl-tune-770nc-chernyi-112705663/'
        },
        {
            id: 15,
            categoryId: 3,
            name: 'Marshall Major IV Brown',
            description: 'Classic Marshall design. 80+ hours of wireless playtime. Quick charging.',
            price: 64000,
            rating: 4.9,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/hab/h47/63973907726366.jpg?format=gallery-medium',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/hab/h47/63973907726366.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/marshall-major-iv-korichnevyi-101150495/'
        },
        {
            id: 16,
            categoryId: 4,
            name: 'Apple iPad Air 13 2024 128GB Space Grey',
            description: 'iPad Air 13-inch. Redesigned with the M2 chip. Serious performance.',
            price: 389990,
            rating: 5.0,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h97/h37/86214150553630.jpg?format=gallery-medium',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h97/h37/86214150553630.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/apple-ipad-air-13-2024-wi-fi-128gb-seryi-119376662/'
        },
        {
            id: 17,
            categoryId: 4,
            name: 'Samsung Galaxy Tab S9 FE 6GB/128GB Gray',
            description: 'Stunning display. Powerful processor. S Pen included in the box.',
            price: 185000,
            rating: 4.8,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h61/h07/84045543768094.jpg?format=gallery-medium',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h61/h07/84045543768094.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-fe-10-9-dyuim-6-gb-128-gb-seryi-113511110/'
        },
        {
            id: 18,
            categoryId: 4,
            name: 'Xiaomi Pad 6 8GB/256GB Gravity Gray',
            description: '144Hz WQHD+ eye-care display. Snapdragon 870. Quad speakers for immersive sound.',
            price: 169000,
            rating: 4.9,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h09/ha9/81232857497630.jpg?format=gallery-medium',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h09/ha9/81232857497630.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-8-gb-256-gb-seryi-110826978/'
        },
        {
            id: 19,
            categoryId: 4,
            name: 'Lenovo Tab P12 8GB/128GB Storm Grey',
            description: 'Large 12.7" 3K display. Cinematic streaming and gaming. Octa-core performance.',
            price: 145000,
            rating: 4.7,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h3d/hee/82823620984862.jpg?format=gallery-medium',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h3d/hee/82823620984862.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/lenovo-tab-p12-12-7-dyuim-8-gb-128-gb-seryi-112467383/'
        },
        {
            id: 20,
            categoryId: 4,
            name: 'Huawei MatePad 11.5 8GB/128GB Space Grey',
            description: '120Hz HUAWEI FullView Display. Sleek metal unibody. Detachable keyboard support.',
            price: 125000,
            rating: 4.8,
            likes: 0,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h6a/h7d/64450395799582.jpg?format=gallery-medium',
            images: [
                'https://resources.cdn-kaspi.kz/img/m/p/h6a/h7d/64450395799582.jpg?format=gallery-medium'
            ],
            link: 'https://kaspi.kz/shop/p/huawei-matepad-11-5-8-gb-128-gb-seryi-112439169/'
        }
    ];

    getCategories(): Category[] {
        return this.categories;
    }

    getProductsByCategory(categoryId: number): Product[] {
        return this.products.filter(p => p.categoryId === categoryId);
    }
}
