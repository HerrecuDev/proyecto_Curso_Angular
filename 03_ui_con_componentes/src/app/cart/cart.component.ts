import { Component, input, output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  //Declaro un imput signal para el array de Producto:

  items = input<Product[]>([]);

  //Para poder eliminar el producto:
  remove = output<number>();

}
