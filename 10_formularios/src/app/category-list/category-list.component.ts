import { Component } from '@angular/core';
import { Category } from '../category';
import { CategoryCreateComponent } from '../category-create/category-create.component';

@Component({
  selector: 'app-category-list',
  imports: [CategoryCreateComponent],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {

  categories: Category[] = [

    { id:1 , name: 'Electronica'},
    { id: 2, name: 'Libros'},
    { id: 3, name: 'Bazar'}

  ]


  //Agregamos el componente hijo:
  addCategory(category : { name:string}){

    const newCategory = {
      id : this.categories.length +1,
      name : category.name
    };

    this.categories = [...this.categories, newCategory]
  }

}
