# Online Store — Lab 5 (Angular)

Premium electronics store application built with Angular 17.

## Key Features
- **Category Hierarchy**: Products organized into 4 categories (Smartphones, Laptops, Headphones, Tablets).
- **Component Architecture**: 
  - `AppComponent`: Root navigation and category handling.
  - `ProductListComponent`: Dynamic product grid rendering.
  - `ProductItemComponent`: Detailed product card with interactive features.
- **Interactive Actions**:
  - ❤️ **Liking**: Increment likes counter with visual feedback.
  - 🗑️ **Deletion**: Remove products from the list with confirmation.
  - 🔗 **Sharing**: Share product links directly via WhatsApp or Telegram.
- **Premium UI**: 
  - Glassmorphism design system.
  - Dark theme with high-end typography (Inter & Outfit).
  - Hover animations and smooth transitions.
  - Responsive grid layout.

## Technologies
- **Angular 19+** (Standalone Components)
- **TypeScript** (Interfaces & Signals)
- **Vanilla CSS** (Custom Variables & Grid)

## Installation & Setup
1. Clone the repo.
2. Navigate to `lab5/online-store`.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run start
   ```
5. Open `http://localhost:4200` in your browser.

## Project Structure
- `src/app/models`: Data interfaces.
- `src/app/services`: Centralized data management (`ProductService`).
- `src/app/components`: Reusable UI components.
