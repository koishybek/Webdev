import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shop_back.settings')
django.setup()

from api.models import Category, Product

Product.objects.all().delete()
Category.objects.all().delete()

electronics = Category.objects.create(name='Electronics')
clothing = Category.objects.create(name='Clothing')
books = Category.objects.create(name='Books')
home = Category.objects.create(name='Home & Kitchen')

products = [
    # Electronics (5)
    Product(name='Smartphone', price=699.99, description='Latest model smartphone with OLED display', count=50, is_active=True, category=electronics),
    Product(name='Laptop', price=1199.99, description='15-inch laptop with SSD storage', count=30, is_active=True, category=electronics),
    Product(name='Wireless Headphones', price=149.99, description='Noise-cancelling over-ear headphones', count=100, is_active=True, category=electronics),
    Product(name='Smartwatch', price=249.99, description='Fitness tracker with heart rate monitor', count=75, is_active=True, category=electronics),
    Product(name='Tablet', price=449.99, description='10-inch tablet with stylus support', count=40, is_active=True, category=electronics),
    # Clothing (5)
    Product(name='Denim Jacket', price=59.99, description='Classic blue denim jacket', count=80, is_active=True, category=clothing),
    Product(name='Running Shoes', price=89.99, description='Lightweight running shoes with cushioning', count=120, is_active=True, category=clothing),
    Product(name='Cotton T-Shirt', price=19.99, description='100% cotton basic t-shirt', count=200, is_active=True, category=clothing),
    Product(name='Slim Fit Jeans', price=49.99, description='Stretch slim-fit denim jeans', count=90, is_active=True, category=clothing),
    Product(name='Wool Sweater', price=69.99, description='Soft merino wool crewneck sweater', count=60, is_active=True, category=clothing),
    # Books (5)
    Product(name='Clean Code', price=34.99, description='A handbook of agile software craftsmanship', count=45, is_active=True, category=books),
    Product(name='The Pragmatic Programmer', price=39.99, description='Your journey to mastery', count=35, is_active=True, category=books),
    Product(name='Design Patterns', price=44.99, description='Elements of reusable object-oriented software', count=25, is_active=True, category=books),
    Product(name='Python Crash Course', price=29.99, description='Hands-on project-based introduction to Python', count=55, is_active=True, category=books),
    Product(name='The Lean Startup', price=24.99, description='How to build a successful startup', count=40, is_active=True, category=books),
    # Home & Kitchen (5)
    Product(name='Coffee Maker', price=79.99, description='12-cup programmable drip coffee maker', count=35, is_active=True, category=home),
    Product(name='Air Fryer', price=99.99, description='5.8-quart digital air fryer', count=45, is_active=True, category=home),
    Product(name='Knife Set', price=59.99, description='8-piece stainless steel kitchen knife set', count=30, is_active=True, category=home),
    Product(name='Blender', price=49.99, description='High-speed countertop blender', count=50, is_active=True, category=home),
    Product(name='Cutting Board', price=24.99, description='Large bamboo cutting board', count=70, is_active=True, category=home),
]
Product.objects.bulk_create(products)

print(f'Created {Category.objects.count()} categories and {Product.objects.count()} products.')
