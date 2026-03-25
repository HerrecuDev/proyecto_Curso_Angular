import { Component } from '@angular/core';
import { Category } from '../category';
import { CategoryCreateComponent } from '../category-create/category-create.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-category-list',
  imports: [
    CategoryCreateComponent,
    SearchBarComponent

  ],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {


  //Primer Arrray de categorias "original"
  categoriesOriginal: Category[] = [

    { id:1 , name: 'Electronica'},
    { id: 2, name: 'Libros'},
    { id: 3, name: 'Bazar'}

  ];

  //Creo otro Array para ir mostrando el buscador modificado :

  categories: Category[] = [...this.categoriesOriginal];

  //Recibimos el texto del hijo y filtramos :
  
  onSearchChange(searchText: string): void {

    if(!searchText) {
      //Si esta vacio mostramos las categorias que hay:

      this.categories = [...this.categoriesOriginal];
    }else{
      //Filtro por nombre ignorando mayusculas del texto incorporado por el usuario:

      this.categories = this.categoriesOriginal.filter( category =>
        category.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
      );
    }



  }
 


  //Agregamos el componente hijo:
  addCategory(category : { name:string}){

    const newCategory = {
      id : this.categoriesOriginal.length +1,
      name : category.name
    };

    //Añado ambos arrays:
    this.categoriesOriginal = [...this.categoriesOriginal, newCategory]

    this.categories = [...this.categories, newCategory];
  }

}
