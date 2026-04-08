"""
Script to populate the database with sample data for testing.
Run with: python manage.py shell < seed_data.py
OR: python seed_data.py (from project root after activating venv)
"""
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shop_back.settings')
django.setup()

from api.models import Category, Product

# Clear existing data
Product.objects.all().delete()
Category.objects.all().delete()

# Create categories
electronics = Category.objects.create(name='Electronics')
clothing = Category.objects.create(name='Clothing')
food = Category.objects.create(name='Food')

# Create products
Product.objects.create(
    name='Laptop Pro 15',
    price=1299.99,
    description='High-performance laptop with M2 chip, 16GB RAM, 512GB SSD.',
    count=10,
    is_active=True,
    category=electronics
)
Product.objects.create(
    name='Wireless Headphones',
    price=199.99,
    description='Noise-cancelling wireless headphones with 30hr battery life.',
    count=25,
    is_active=True,
    category=electronics
)
Product.objects.create(
    name='Smartphone X12',
    price=899.00,
    description='Latest flagship phone with 200MP camera and 5G support.',
    count=50,
    is_active=True,
    category=electronics
)
Product.objects.create(
    name='Classic T-Shirt',
    price=29.99,
    description='100% cotton comfortable t-shirt, available in multiple colors.',
    count=100,
    is_active=True,
    category=clothing
)
Product.objects.create(
    name='Denim Jacket',
    price=89.99,
    description='Stylish denim jacket for all seasons.',
    count=30,
    is_active=False,
    category=clothing
)
Product.objects.create(
    name='Organic Coffee Beans',
    price=14.99,
    description='Premium single-origin Arabica coffee beans, 500g.',
    count=200,
    is_active=True,
    category=food
)

print('✅ Database seeded successfully!')
print(f'   Categories: {Category.objects.count()}')
print(f'   Products: {Product.objects.count()}')
