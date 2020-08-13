import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  //making array private so you can't get it from the outside without getRecipes()
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'http://1.bp.blogspot.com/-mlbm4Cm3WuU/UbixzaOJ6ZI/AAAAAAAAA4I/IhJKhhtkWYQ/s1600/dragon+boat+festival.jpg',
      [new Ingredient('Rice', 1), new Ingredient('Pork', 2)]
    ),
    new Recipe(
      'A Second Recipe',
      'This is simply a test',
      'https://www.thespruceeats.com/thmb/VXHI8RXxjdbYVGOwq-BVitNLVSQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chinese-pan-fried-dumplings-694499_hero-01-f8489a47cef14c06909edff8c6fa3fa9.jpg',
      [new Ingredient('dumpling skin', 10), new Ingredient('chives', 5)]
    ), //creating a new object based on the recipe blueprint
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    //use slice return a new array that's a replica of the recipes array
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes.slice()[index]; 
  }

  addIngToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
