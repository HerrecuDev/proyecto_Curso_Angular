import { Component, output, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  //Output para comunicarnos con el padre : 
  searchChange = output<string>();

  //FormControl para el input

  searchControl = new FormControl('');

  //Observable
  ngOnInit(): void {

      //Escuha los cambios y los emite al padre :
      this.searchControl.valueChanges.subscribe(value => {
      this.searchChange.emit( value || '');


      });
  }

}
