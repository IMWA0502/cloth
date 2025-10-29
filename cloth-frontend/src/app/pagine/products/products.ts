import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  
  constructor(private router: Router) {}

  // Metodo per navigare alla pagina contatti
  goToContact() {
    this.router.navigate(['/contact']);
  }

  // Metodo generico per navigare tramite click da template
  navigateTo(path: string) {
    // use absolute path array form to avoid unexpected relative navigation
    this.router.navigate([path]);
  }

  // Dati delle categorie per eventuale uso futuro
  categories = [
    {
      id: 'raw-materials',
      title: 'Raw Materials',
      description: 'Raw materials for the textile industry',
      products: [
        { name: 'Yarn', icon: '🧶', description: 'Wide variety of yarns' },
        { name: 'Cotton Waste', icon: '🌿', description: 'Comber Noil and Nima Fil' },
        { name: 'Lining Fabric', icon: '📏', description: 'Superior quality linings' },
        { name: 'Raw Woven Fabric', icon: '🏭', description: 'Raw and knitted fabrics' }
      ]
    },
    {
      id: 'hospitality-hospital',
      title: 'Hospitality & Hospital',
      description: 'Products for healthcare and hospitality',
      products: [
        { name: 'Woven Masks', icon: '😷', description: 'Certified protections' },
        { name: 'Chef Uniforms', icon: '👨‍🍳', description: 'Professional clothing' },
        { name: 'Home Textiles', icon: '🛏️', description: 'Linens for hotels' },
        { name: 'Work Wear', icon: '👔', description: 'Technical uniforms' },
        { name: 'Disposable Gloves', icon: '🧤', description: 'Healthcare protections' },
        { name: 'Technical Textiles', icon: '🔬', description: 'Specialized materials' }
      ]
    },
    {
      id: 'home-textile',
      title: 'Home Textile',
      description: 'Affordable luxurious home textiles',
      products: [
        { name: 'Bed Linen', icon: '🛏️', description: 'Premium quality bedding sets' },
        { name: 'Drapes & Curtains', icon: '🪟', description: 'Elegant window treatments' },
        { name: 'Filled Beddings', icon: '🛌', description: 'Comfortable comforters and quilts' },
        { name: 'Throws & Blankets', icon: '🧶', description: 'Cozy decorative throws' }
      ]
    },
    {
      id: 'ready-made-garments',
      title: 'Ready-made Garments',
      description: 'Trustworthy partner for ready-made garments',
      products: [
        { name: 'T-shirts', icon: '👕', description: 'High-quality cotton t-shirts' },
        { name: 'Bottom Wears', icon: '🩳', description: 'Comfortable pants and shorts' },
        { name: 'Casual Wear', icon: '👖', description: 'Everyday comfortable clothing' },
        { name: 'Outerwear', icon: '🧥', description: 'Jackets and seasonal garments' }
      ]
    },
    {
      id: 'bath-linen',
      title: 'Bath Linen',
      description: 'Quality bath products with innovation and comfort',
      products: [
        { name: 'Bath-wear', icon: '👕', description: 'Comfortable bathrobes and bath clothing' },
        { name: 'Shower Curtains', icon: '🚿', description: 'Water-resistant shower curtains' },
        { name: 'Soft Storage', icon: '🧺', description: 'Organized bathroom storage solutions' },
        { name: 'Terry Towels', icon: '🏖️', description: 'Soft and absorbent terry towels' },
        { name: 'Slippers', icon: '🥿', description: 'Comfortable bathroom slippers' },
        { name: 'Terry Bedsheets', icon: '🛏️', description: 'Absorbent terry bedsheets' },
        { name: 'Gown', icon: '🥻', description: 'Luxurious bathrobes and gowns' }
      ]
    },
    {
      id: 'kitchen-linen',
      title: 'Kitchen Linen',
      description: 'Durable kitchen textiles for everyday luxury',
      products: [
        { name: 'Kitchen Towels', icon: '🍽️', description: 'Absorbent kitchen towels' },
        { name: 'Glass Towels', icon: '🥤', description: 'Lint-free towels for glassware' },
        { name: 'Curtains', icon: '🪟', description: 'Kitchen window treatments' },
        { name: 'Napkin', icon: '🍽️', description: 'Elegant cloth napkins' },
        { name: 'Tablecloths & Runners', icon: '🍽️', description: 'Premium table linens' }
      ]
    },
    {
      id: 'kids-infants',
      title: 'Kids & Infants',
      description: 'Extra safe products for children with international quality standards',
      products: [
        { name: 'Baby Clothing', icon: '👕', description: 'Soft and safe baby clothing' },
        { name: 'Baby Accessories', icon: '🧸', description: 'Safe baby accessories' },
        { name: 'Baby Bedding', icon: '🛏️', description: 'Hypoallergenic baby bedding' },
        { name: 'Kids Clothing', icon: '🧦', description: 'Durable children\'s clothing' }
      ]
    }
  ];

}
