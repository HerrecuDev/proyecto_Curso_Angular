import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Category } from "./category";

@Injectable({
    providedIn: 'root'
})

export class CategoryService{

    private categoriesSource = new BehaviorSubject<Category[]>([
        {id: 1 , name:'Electronica'},
        {id: 2, name: 'Ropa'},
        {id: 3, name: 'PC'}

    ]);

    //Observable al que los componentes se podrian subcribir:

    readonly categories$ = this.categoriesSource.asObservable();

    constructor(){}

    addCategory(category: Category){

        //Obtenemos el valor actual del BehaviorSubject
        const current = this.categoriesSource.value;

        //Se añade la nueva categoria:
        const update = [...current,category];


    }
}
