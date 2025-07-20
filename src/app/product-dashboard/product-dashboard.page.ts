import { Component, OnInit } from '@angular/core';

export interface ProductModel {
  id: number;
  name: string;
  initialStock: number;
  soldQuantity: number;
  dateAdded: string;
  price: number;
  rating: number;
  isSelected: boolean;
}

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.page.html',
  styleUrls: ['./product-dashboard.page.scss'],
  standalone: false,
})
export class ProductDashboardPage implements OnInit {

  monthlyIncome = 287000;
  monthlySales = 4500;
  
  productList: ProductModel[] = [
    {
      id: 1,
      name: 'MacBook Pro with M2 Chip',
      initialStock: 4159,
      soldQuantity: 878,
      dateAdded: 'Jul 14, 2023',
      price: 1200,
      rating: 4.8,
      isSelected: false
    },
    {
      id: 2,
      name: 'iPhone 15 128 / 256 / 512 IBOX',
      initialStock: 1590,
      soldQuantity: 981,
      dateAdded: 'Aug 09, 2023',
      price: 1600,
      rating: 5.0,
      isSelected: true
    },
    {
      id: 3,
      name: 'Apple Watch Ultra 2 Alpine',
      initialStock: 1090,
      soldQuantity: 184,
      dateAdded: 'Aug 12, 2023',
      price: 999,
      rating: 4.7,
      isSelected: true
    },
    {
      id: 4,
      name: 'iPhone 15 Pro Max 256',
      initialStock: 2590,
      soldQuantity: 995,
      dateAdded: 'Aug 24, 2023',
      price: 1600,
      rating: 4.2,
      isSelected: false
    },
    {
      id: 5,
      name: 'MacBook Pro with M2 Chip',
      initialStock: 4100,
      soldQuantity: 645,
      dateAdded: 'Nov 30, 2023',
      price: 1200,
      rating: 5.0,
      isSelected: false
    },
    {
      id: 6,
      name: 'Apple Watch Series 9 45MM',
      initialStock: 3140,
      soldQuantity: 981,
      dateAdded: 'Dec 04, 2023',
      price: 980,
      rating: 4.6,
      isSelected: false
    },
    {
      id: 7,
      name: 'Apple Watch Ultra 2 Alpine',
      initialStock: 2150,
      soldQuantity: 167,
      dateAdded: 'Dec 08, 2023',
      price: 799,
      rating: 4.8,
      isSelected: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onToggleProductSelection(product: ProductModel): void {
    product.isSelected = !product.isSelected;
  }

  onEditProduct(product: ProductModel): void {
    console.log('Edit product:', product);
  }

  onDeleteProduct(product: ProductModel): void {
    console.log('Delete product:', product);
  }

  onAnalyzeReport(): void {
    console.log('Analyze December report');
  }

  onDownloadReport(): void {
    console.log('Download December report');
  }

  onExportData(): void {
    console.log('Export product data');
  }
}