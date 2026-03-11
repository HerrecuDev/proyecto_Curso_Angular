import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent, CartComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, title: 'Keyboard', total:0 },
    { id: 2, title: 'Microphone', total:0 },
    { id: 3, title: 'Web camera', total:0 },
    { id: 4, title: 'Tablet', total:0 }
  ];

  //Creo el nuevo arrray Cart:
  cart: Product[] = [];

  selectedProduct: Product | undefined;

  onSelect(product: Product){
    this.selectedProduct = product;
    console.log(`Select product: ${product.title}`);
  }

  //Aqui agregamos el producto seleccionado al Array:

  onAdded() {

    if (this.selectedProduct) {

      const existeProduct = this.cart.find(p => p.id === this.selectedProduct!.id)

        if(existeProduct){
          //Si ya existe aumenta la cantidad:
          existeProduct.total = (existeProduct.total || 1) +1;
        }else{

          //En caso de que no exista decimos que el total es 1:

          this.cart = [...this.cart,{...this.selectedProduct, total:1}]
        }
    }
  
  }

  onRemove(productId : number){

    const product = this.cart.find(p=> p.id === productId)

    if (product && product.total > 1) {

      //Si hay mas de 1 restamos el total 1 :
      product.total = product.total -1;

      //Para que angular detecte el cambio :
      this.cart = [...this.cart];
      
    }else[

      //Si solo hay uno eliminamos el producto
      this.cart = this.cart.filter(p=> p.id !== productId)
    ]
    
  }
}
