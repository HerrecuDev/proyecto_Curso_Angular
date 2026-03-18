import { Component, output } from '@angular/core';
import { ReactiveFormsModule, FormControl , FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-category-create',
  imports: [ReactiveFormsModule],
  templateUrl: './category-create.component.html',
  styleUrl: './category-create.component.css'
})
export class CategoryCreateComponent {

  //Salida para enviar al padre:
  categoryCreated = output<{ name: string }>();

  // Formulario reactivo
  categoryForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: Validators.required })
  });

  createCategory(){

    if(this.categoryForm.valid) {

      const name = this.categoryForm.value.name;

      if(name){
        this.categoryCreated.emit({ name });
        this.categoryForm.reset();
      }

    }
  }

}
