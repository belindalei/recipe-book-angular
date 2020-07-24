import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>(); 

  //defining type Recipe that holds an array from the model we created in recipe.model.ts
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'http://1.bp.blogspot.com/-mlbm4Cm3WuU/UbixzaOJ6ZI/AAAAAAAAA4I/IhJKhhtkWYQ/s1600/dragon+boat+festival.jpg'
    ),
    new Recipe(
      'A Second Recipe',
      'This is simply a test',
      'https://www.thespruceeats.com/thmb/VXHI8RXxjdbYVGOwq-BVitNLVSQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chinese-pan-fried-dumplings-694499_hero-01-f8489a47cef14c06909edff8c6fa3fa9.jpg'
    ), //creating a new object based on the recipe blueprint
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe){
    console.log("Recipe", recipe)
    // passes recipe as data and now on the list you can listen to it
    this.recipeWasSelected.emit(recipe);
  }
}
