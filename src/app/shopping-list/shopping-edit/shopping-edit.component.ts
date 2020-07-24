import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef; 
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef; 
  
  //emit event and use ingredient model to create
  @Output() ingredientAdded = new EventEmitter<Ingredient>();


  constructor() { }

  ngOnInit(): void {
  }


  onAddItem(){
    //const instead of let because we don't plan on changing the variables
    const ingName = this.nameInputRef.nativeElement.value; 
    const ingAmt = this.amountInputRef.nativeElement.value; 
    const newIngredient = new Ingredient(ingName, ingAmt); 
    //emit event to pass new ing as data
    this.ingredientAdded.emit(newIngredient);
  }

}
